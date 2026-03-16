import { Col, Modal, Row, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type JobDetails = {
  title: string;
  experienceRequired: string;
  positions: number;
  jdFileName?: string;
};

type FormValues = {
  role: string;
  attachment?: FileList;
};

const CAREER_FORM_ACTION = "https://formsubmit.co/Tarun@dreamitcs.com";
const CAREER_FORM_TARGET = "careerApplicationMailFrame";
const CAREER_FORM_CC = "HR@dreamitcs.com,kanchan@dreamitcs.com";
const CAREER_RESUME_UPLOAD_ENDPOINT =
  process.env.NEXT_PUBLIC_CAREER_RESUME_UPLOAD_ENDPOINT ||
  "https://career-api-hzfffvcfewd2bmet.canadacentral-01.azurewebsites.net/apply-job";
const CAREER_RESUME_UPLOAD_TIMEOUT_MS = 20000;
const SUBMISSION_FALLBACK_DELAY_MS = 2000;

const JOB_DATA: Record<string, JobDetails> = {
  "Management Intern": {
    title: "Management Intern",
    experienceRequired: "0-6 Months",
    positions: 1,
    jdFileName: "#001_JD_Management Intern_Gurgaon_Dream IT.pdf",
  },
  "Digital Marketing Intern": {
    title: "Digital Marketing Intern",
    experienceRequired: "Fresher",
    positions: 1,
    jdFileName: "#002_JD_Digital Marketing Intern_Panchkula_Dream IT (1).pdf",
  },
  "Data Analyst / Data Engineer (Internship)": {
    title: "Data Analyst / Data Engineer (Internship)",
    experienceRequired: "0-6 Months",
    positions: 2,
    jdFileName: "#003_01_to_02_JD_Data Analyst Intern_Gurgaon_Dream IT.pdf",
  },
  "PowerApps Developer Intern": {
    title: "PowerApps Developer Intern",
    experienceRequired: "0-6 Months",
    positions: 1,
    jdFileName: "#004_JD_PowerApps Developer Intern_Gurgaon_Dream IT.pdf",
  },
  "Data Analyst": {
    title: "Data Analyst",
    experienceRequired: "-",
    positions: 0,
  },
  "Data Engineer": {
    title: "Data Engineer",
    experienceRequired: "-",
    positions: 0,
  },
  "Power Platform Developer": {
    title: "Power Platform Developer",
    experienceRequired: "-",
    positions: 0,
  },
  "AI/ML Engineer": {
    title: "AI/ML Engineer",
    experienceRequired: "-",
    positions: 0,
  },
  "D365 CRM Developer": {
    title: "D365 CRM Developer",
    experienceRequired: "2-5 Years",
    positions: 1,
  },
  "D365 CRM Senior Developer": {
    title: "D365 CRM Senior Developer",
    experienceRequired: "5-8 Years",
    positions: 3,
  },
  "D365 CRM Team Lead/Solution Architect": {
    title: "D365 CRM Team Lead/Solution Architect",
    experienceRequired: "8+ Years",
    positions: 1,
  },
  "Open for Work": {
    title: "Open for Work",
    experienceRequired: "-",
    positions: 1,
  },
};

const JOB_LIST = Object.values(JOB_DATA).filter((job) => Boolean(job.jdFileName));

const resumeValidation = {
  required: "Resume is required",
  validate: {
    fileType: (files?: FileList) => {
      if (!files || files.length === 0) return true;
      const file = files[0];
      if (file.type !== "application/pdf") {
        return "Only PDF files are allowed.";
      }
      return true;
    },
    fileSize: (files?: FileList) => {
      if (!files || files.length === 0) return true;
      const file = files[0];
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        return "File size must be less than 10MB.";
      }
      return true;
    },
  },
};

const getJdAssetPath = (fileName: string) =>
  `/assets/jd/${encodeURIComponent(fileName)}`;

const getJobDetails = (role: string) =>
  JOB_DATA[role as keyof typeof JOB_DATA];

const getResumeUploadErrorMessage = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const errorPayload = await response.json().catch(() => null);
    const message =
      errorPayload?.message || errorPayload?.title || errorPayload?.detail;

    if (typeof message === "string" && message.trim()) {
      return message.trim();
    }
  }

  if (response.status >= 500) {
    return "Resume upload failed. Please try again.";
  }

  return "Unable to upload resume. Please check the file and try again.";
};

const uploadResumeToCareerApi = async (files?: FileList) => {
  if (!files?.length) {
    throw new Error("Resume is required.");
  }

  const formData = new FormData();
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    CAREER_RESUME_UPLOAD_TIMEOUT_MS
  );

  formData.append("attachment", files[0]);

  try {
    const response = await fetch(CAREER_RESUME_UPLOAD_ENDPOINT, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(await getResumeUploadErrorMessage(response));
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Resume upload timed out. Please try again.");
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the resume upload service. Please try again."
      );
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

const CurrentOpenings = ({ pageInfo }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [submittedRole, setSubmittedRole] = useState("");
  const [pendingRole, setPendingRole] = useState("");
  const [mailFrameReady, setMailFrameReady] = useState(false);
  const submissionFallbackRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      role: "",
    },
  });

  const selectedRole = watch("role");
  const selectedJob = selectedRole ? getJobDetails(selectedRole) : undefined;
  const resumeFile = watch("attachment");
  const currentPageUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const resetForm = (role = "") => {
    reset({ role });
  };

  const clearSubmissionFallback = () => {
    if (submissionFallbackRef.current) {
      clearTimeout(submissionFallbackRef.current);
      submissionFallbackRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearSubmissionFallback();
    };
  }, []);

  const finalizeSubmission = () => {
    clearSubmissionFallback();
    setLoading(false);
    setSubmittedRole(pendingRole);
    resetForm();
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
    setPendingRole("");
  };

  const handleMailFrameLoad = () => {
    if (!mailFrameReady) {
      setMailFrameReady(true);
      return;
    }

    if (!loading) {
      return;
    }

    finalizeSubmission();
  };

  const onSubmit = (data: FormValues, event?: any) => {
    const form = (event?.currentTarget || event?.target) as
      | HTMLFormElement
      | undefined;

    if (!form) {
      toast.error("Submission failed. Try again later.", {
        autoClose: 3000,
        closeOnClick: true,
      });
      return;
    }

    setPendingRole(data.role);
    setLoading(true);
    clearSubmissionFallback();

    uploadResumeToCareerApi(data.attachment)
      .then(() => {
        submissionFallbackRef.current = setTimeout(() => {
          finalizeSubmission();
        }, SUBMISSION_FALLBACK_DELAY_MS);
        form.submit();
      })
      .catch((error) => {
        clearSubmissionFallback();
        setLoading(false);
        setPendingRole("");
        toast.error(
          error instanceof Error
            ? error.message
            : "Resume upload failed. Please try again.",
          {
            autoClose: 3000,
            closeOnClick: true,
          }
        );
      });
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openApplicationModal = (role: string) => {
    const resolvedRole = JOB_DATA[role] ? role : "";
    resetForm(resolvedRole);
    setIsModalOpen(true);
  };

  const openingSections = Array.isArray(pageInfo.sections)
    ? pageInfo.sections.filter((section: any) =>
        Boolean(JOB_DATA[section.title as keyof typeof JOB_DATA]?.jdFileName)
      )
    : [];

  const renderJdActions = (job?: JobDetails) => {
    const actionClassName =
      "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#D9E6F2] bg-white text-[#072032] transition-colors hover:border-[#00A9FF] hover:text-[#00A9FF]";

    if (!job?.jdFileName) {
      return (
        <div className="flex items-center gap-2">
          <span
            className={`${actionClassName} cursor-not-allowed opacity-45`}
            aria-hidden="true"
          >
            <FiEye className="text-[16px]" />
          </span>
        </div>
      );
    }

    const jdPath = getJdAssetPath(job.jdFileName);

    return (
      <div className="flex items-center gap-2">
        <a
          href={jdPath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Preview JD"
          title="Preview JD"
          className={actionClassName}
        >
          <FiEye className="text-[16px]" />
        </a>
      </div>
    );
  };

  const renderApplicationForm = (fileInputId: string) => (
    <form
      action={CAREER_FORM_ACTION}
      method="POST"
      encType="multipart/form-data"
      target={CAREER_FORM_TARGET}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="hidden"
        name="_subject"
        value={
          selectedRole
            ? `New Career Application - ${selectedRole}`
            : "New Career Application"
        }
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_cc" value={CAREER_FORM_CC} />
      <input type="hidden" name="source" value="website" />
      <input type="hidden" name="page_url" value={currentPageUrl} />
      <input type="hidden" name="job_role" value={selectedRole || ""} />
      <input
        type="hidden"
        name="experience_required"
        value={selectedJob?.experienceRequired || "-"}
      />
      <input
        type="hidden"
        name="positions"
        value={String(selectedJob?.positions || 0)}
      />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="job-opening-form mb-12 overflow-hidden rounded-[18px] border border-[#EAEAEA] bg-[rgba(255,255,255,0.78)] shadow-[0_16px_40px_rgba(7,32,50,0.07)]">
        <div
          className="rounded-[18px] xl:px-8 xl:pt-8 xl:pb-8 lg:px-8 lg:pt-8 lg:pb-8 md:px-6 md:pt-8 md:pb-8 sm:px-4 sm:pt-5 sm:pb-6 xs:px-4 xs:pt-5 xs:pb-6"
          style={{
            background:
              "radial-gradient(circle at 88% 28%, rgba(0,169,255,0.18), transparent 20%), radial-gradient(circle at 8% 100%, rgba(85,80,255,0.12), transparent 22%)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Row
            gutter={[16, 16]}
            align="bottom"
            justify="center"
            className="w-full"
          >
            <Col lg={6} md={12} sm={24} xs={24}>
              <h2 className="mb-2 whitespace-nowrap xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold text-black-100">
                Select Job Category
              </h2>
              <select
                {...register("role", {
                  required: "Please select a job category.",
                })}
                className="customSelectTag h-[48px] w-full rounded-lg border-2 border-[#EAEAEA] bg-[#FAFAFA] px-4 text-sm text-[#072032] focus:border-[#EAEAEA] focus:outline-none"
              >
                <option value="" disabled>
                  Select job title
                </option>
                {JOB_LIST.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.role.message as string}
                </p>
              )}
            </Col>

            <Col lg={5} md={12} sm={24} xs={24}>
              <h2 className="mb-2 whitespace-nowrap xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold text-black-100">
                Experience Required
              </h2>
              <div className="flex h-[48px] w-full items-center rounded-lg border-2 border-[#EAEAEA] bg-[#F5F5F5] px-4 text-sm text-[#072032]">
                {selectedJob?.experienceRequired || "-"}
              </div>
            </Col>

            <Col lg={3} md={12} sm={24} xs={24}>
              <h2 className="mb-2 whitespace-nowrap xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold text-black-100">
                Positions
              </h2>
              <div className="flex h-[48px] w-full items-center rounded-lg border-2 border-[#EAEAEA] bg-[#F5F5F5] px-4 text-sm text-[#072032]">
                {selectedJob?.positions || 0}
              </div>
            </Col>

            <Col lg={4} md={12} sm={24} xs={24}>
              <h2 className="mb-2 whitespace-nowrap xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold text-black-100">
                Job Description
              </h2>
              <div className="flex h-[48px] w-full items-center rounded-lg border-2 border-[#EAEAEA] bg-[#FAFAFA] px-4 text-sm text-[#072032]">
                {renderJdActions(selectedJob)}
              </div>
            </Col>

            <Col lg={6} md={12} sm={24} xs={24}>
              <h2 className="mb-2 whitespace-nowrap xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold text-black-100">
                Upload Resume
              </h2>
              <div className="relative">
                <input
                  type="file"
                  id={fileInputId}
                  {...register("attachment", resumeValidation)}
                  className="hidden border-2 border-[#EAEAEA] rounded-lg text-black-100 focus:border-gray-300 focus:outline-none"
                  accept=".pdf"
                />
                <label
                  htmlFor={fileInputId}
                  className="flex h-[48px] w-full cursor-pointer items-center gap-2 rounded-lg border-2 border-[#EAEAEA] bg-[#FAFAFA] px-4 text-sm text-[#072032] hover:bg-gray-50"
                >
                  <MdOutlineFileUpload className="text-[20px]" />
                  <span className="truncate">
                    {resumeFile?.length ? resumeFile[0].name : "Upload PDF here"}
                  </span>
                </label>
                {errors.attachment && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.attachment.message as string}
                  </p>
                )}
              </div>
            </Col>
          </Row>

          <div className="mt-6 flex justify-center">
            <button
              className="form-submit-button flex items-center gap-2 rounded-lg bg-[#072032] px-5 py-2 text-lg font-500 text-white transition-transform duration-300 hover:scale-105 sm:text-base xs:text-base md:text-lg lg:text-sm xl:text-sm"
              aria-label="Continue"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spin /> : "Submit"}
              {!loading && <FaArrowRightLong />}
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div
      className="container pt-60 pb-60 text-center bg-[url('/assets/images/home-page-her-section-background.webp')] bg-cover bg-bottom"
      id="jobOpening "
    >
      <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          JOIN OUR TALENT POOL
        </span>
      </div>
      <h2 className="xl:mb-12 lg:mb-12 md:mb-12 sm:mb-2 xs:mb-2 max-w-[44rem] m-auto">
        We&apos;re Growing Exponentially, So There Are Plenty of New Roles
      </h2>

      {pageInfo.metadata?.showOpenings !== true && (
        <div className="faq-container text-left">
          {renderApplicationForm("leadAttachment")}
        </div>
      )}

      {pageInfo.metadata?.showOpenings === true && (
        <div className="faq-container text-left">
          {openingSections.map((data: any, index: number) => {
            const job = JOB_DATA[data.title as keyof typeof JOB_DATA];

            return (
              <div
                key={index}
                className={`faq-item bg-[#FFFFFF] ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="question" onClick={() => toggleFAQ(index)}>
                  <div>
                    <h3 className="faq-questions">{data.title}</h3>
                    <p className="job-location">Location: Remote | Full-Time</p>
                  </div>
                  {activeIndex === index ? (
                    <img
                      src="/assets/icons/faq-right-arrow-icon.svg"
                      alt="icon"
                      className="faq-icon active"
                    />
                  ) : (
                    <img
                      src="/assets/icons/faq-right-arrow-icon.svg"
                      alt="icon"
                      className="faq-icon"
                    />
                  )}
                </div>
                <div
                  className={`answer ${activeIndex === index ? "active" : ""}`}
                >
                  <div className="faq-answers">
                    <p>{data.content}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {renderJdActions(job)}
                    <button
                      type="button"
                      className="dream-it-cta-button"
                      onClick={() => openApplicationModal(data.title)}
                    >
                      Apply Now
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Modal
        title={null}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={960}
      >
        <div className="pt-2">{renderApplicationForm("leadAttachmentModal")}</div>
      </Modal>

      <Modal
        title={null}
        open={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        footer={null}
        centered
        width={520}
      >
        <div className="px-2 py-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ECF9FF] text-[#00A9FF]">
            <span className="text-sm font-semibold tracking-[0.24em]">OK</span>
          </div>
          <h3 className="text-[24px] font-semibold text-[#072032]">
            Thanks for showing interest
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#4F6473]">
            {submittedRole
              ? `We have received your application for ${submittedRole}. Our hiring team will review your profile and contact you if your experience matches the role requirements.`
              : "We have received your application. Our hiring team will review your profile and contact you if your experience matches the role requirements."}
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-[#072032] px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            Back to Careers
          </button>
        </div>
      </Modal>

      <ToastContainer />
      <iframe
        title="Career Application Mail Target"
        name={CAREER_FORM_TARGET}
        className="hidden"
        onLoad={handleMailFrameLoad}
      />
    </div>
  );
};

export default CurrentOpenings;
