import { Col, Modal, Row, Spin } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { FiDownload, FiEye } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LEAD_API } from "@/utils/constant";
import FileUploader from "../../utils/FileUploader";
import Storage from "../../utils/Storage";

type JobDetails = {
  title: string;
  experienceRequired: string;
  positions: number;
  jdFileName?: string;
};

type FormValues = {
  role: string;
  resume?: FileList;
};

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

const CurrentOpenings = ({ pageInfo }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);

  const storage = Storage.values?.leadAttachment;

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
  const selectedJob = selectedRole
    ? JOB_DATA[selectedRole as keyof typeof JOB_DATA]
    : undefined;
  const resumeFile = watch("resume");

  const uploadResume = async (file: File) => {
    try {
      FileUploader.validate(file, { storage });
      return await FileUploader.upload(file, { storage, undefined });
    } catch (error) {
      console.error("File upload error:", error);
      throw new Error("Failed to upload resume.");
    }
  };

  const resetForm = (role = "") => {
    reset({ role });
  };

  const postOnServer = async (formSubmissionData: FormValues) => {
    setLoading(true);
    try {
      let uploadedFile = null;

      if (formSubmissionData.resume?.length) {
        uploadedFile = await uploadResume(formSubmissionData.resume[0]);
      }

      const payload = {
        description: `${formSubmissionData.role}`,
        attachment: uploadedFile ? [uploadedFile] : [],
        source: "website",
      };

      const postData = {
        ...payload,
        tags: [formSubmissionData.role],
        sourceDetail: { pageUrl: window.location.href },
      };

      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${LEAD_API}/lead`, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          setLoading(false);
          if (xhr.status === 200) {
            toast.success("Form submitted successfully!", {
              autoClose: 3000,
              closeOnClick: true,
            });
            resetForm();
            setIsModalOpen(false);
          } else {
            const errorData = JSON.parse(xhr.responseText || "{}");
            resetForm();

            toast.error(
              errorData?.message || "Submission failed. Try again later.",
              {
                autoClose: 3000,
                closeOnClick: true,
              }
            );
          }
        }
      };

      xhr.onerror = function () {
        setLoading(false);
        console.error("Network error during form submission");
        toast.error("Network error during form submission", {
          autoClose: 3000,
          closeOnClick: true,
        });
      };

      xhr.send(JSON.stringify({ data: postData }));
    } catch (error) {
      setLoading(false);
      console.error("Error uploading resume:", error);
    }
  };

  const onSubmit = (data: FormValues) => {
    postOnServer(data);
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
          <span
            className={`${actionClassName} cursor-not-allowed opacity-45`}
            aria-hidden="true"
          >
            <FiDownload className="text-[16px]" />
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
        <a
          href={jdPath}
          download={job.jdFileName}
          aria-label="Download JD"
          title="Download JD"
          className={actionClassName}
        >
          <FiDownload className="text-[16px]" />
        </a>
      </div>
    );
  };

  const renderApplicationForm = (fileInputId: string) => (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("resume", resumeValidation)}
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
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.resume.message as string}
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

      <ToastContainer />
    </div>
  );
};

export default CurrentOpenings;
