import { Col, Modal, Row, Spin } from "antd";
import React, { useState } from "react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import FileUploader from "../../utils/FileUploader";
import Storage from "../../utils/Storage";
import { useForm } from "react-hook-form";
import { LEAD_API } from "@/utils/constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JOB_DATA = {

  "Management Intern": {

    title: "Management Intern",

    experienceRequired: "0-6 Months",

    positions: 1

  },
 
  "Digital Marketing Intern": {

    title: "Digital Marketing Intern",

    experienceRequired: "Fresher",

    positions: 1

  },
 
  "Data Analyst / Data Engineer (Internship)": {

    title: "Data Analyst / Data Engineer (Internship)",

    experienceRequired: "0-6 Months",

    positions: 2

  },
 
  "PowerApps Developer Intern": {

    title: "PowerApps Developer Intern",

    experienceRequired: "0-6 Months",

    positions: 1

  },
 
  "Data Analyst": {

    title: "Data Analyst",

    experienceRequired: "-",

    positions: 0

  },
 
  "Data Engineer": {

    title: "Data Engineer",

    experienceRequired: "-",

    positions: 0

  },
 
  "Power Platform Developer": {

    title: "Power Platform Developer",

    experienceRequired: "-",

    positions: 0

  },
 
  "AI/ML Engineer": {

    title: "AI/ML Engineer",

    experienceRequired: "-",

    positions: 0

  },
 
  "D365 CRM Developer": {

    title: "D365 CRM Developer",

    experienceRequired: "2-5 Years",

    positions: 1

  },
 
  "D365 CRM Senior Developer": {

    title: "D365 CRM Senior Developer",

    experienceRequired: "5-8 Years",

    positions: 3

  },
 
  "D365 CRM Team Lead/Solution Architect": {

    title: "D365 CRM Team Lead/Solution Architect",

    experienceRequired: "8+ Years",

    positions: 1

  },
 
  "Open for Work": {

    title: "Open for Work",

    experienceRequired: "-",

    positions: 1

  }

};
 

const CurrentOpenings = ({ pageInfo }: any) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);

   const storage = Storage.values?.leadAttachment;

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm();
  const resumeFile = watch("resume");



  const uploadResume = async (file: any) => {
    try {
      FileUploader.validate(file, { storage });
      return await FileUploader.upload(file, { storage, undefined });
    } catch (error) {
      console.error("File upload error:", error);
      throw new Error("Failed to upload resume.");
    }
  };

  const postOnServer = async (formSubmissionData: any) => {
    setLoading(true);
    try {
      let uploadedFile = null;

      if (formSubmissionData.resume) {
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
            reset();
            setIsModalOpen(false);
          } else {
            const errorData = JSON.parse(xhr.responseText || "{}");
            reset();

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

  const onSubmit = (data: any) => {
    postOnServer(data);
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="container pt-60 pb-60 text-center bg-[url('/assets/images/home-page-her-section-background.webp')] bg-cover bg-bottom  "
      id="jobOpening "
    >
      <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3 ">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          JOIN OUR TALENT POOL
        </span>
      </div>
      <h2 className="xl:mb-12 lg:mb-12 md:mb-12 sm:mb-2 xs:mb-2 max-w-[44rem] m-auto">
      We’re Growing Exponentially, So There Are Plenty of New Roles      </h2>

      {pageInfo.metadata?.showOpenings !== true && (
        <div className="faq-container text-left  ">
          <div className="job-opening-form mb-12 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row
                align={"bottom"}
                justify={"center"}
                className=" w-full lg:gap-4 md:gap-3 sm:gap-3 xs:gap-3 rounded-2xl   xl:pt-8 lg:pt-8 md:pt-8 sm:pt-4 xs:pt-4 xl:pb-8 lg:pb-8 md:pb-8 sm:pb-6 xs:pb-6 xl:pl-8 lg:pl-8 md:pl-8 sm:pl-4 xs:pl-4 xl:pr-8 lg:pr-8 md:pr-8 sm:pr-4 xs:pr-4 bg-transparent"
                style={{ backdropFilter: "blur(18.899999618530273px)" }}
              >
                <Col lg={6} md={12} sm={24} xs={24}>
                  <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                    Select Job Category
                  </h2>
                  <select
                    {...register("role")}
                    className="w-full rounded-lg border-2 bg-[#FAFAFA] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm focus:border-[#EAEAEA] focus:outline-none customSelectTag"
                  >
                    <option value="" disabled selected>
                      Select job title
                    </option>
                    {Object.values(JOB_DATA).map((job) => (
                      <option key={job.title} value={job.title} disabled={job.positions === 0}>
                        {job.title} {job.positions === 0 ? "(No openings)" : ""}
                      </option>
                    ))}
                  </select>
                </Col>

                <Col lg={5} md={12} sm={24} xs={24}>
                  <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                    Experience Required
                  </h2>
                  <div className="w-full rounded-lg border-2 bg-[#F5F5F5] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm">
                    {watch("role") ? JOB_DATA[watch("role") as keyof typeof JOB_DATA]?.experienceRequired || "-" : "-"}
                  </div>
                </Col>

                <Col lg={4} md={12} sm={24} xs={24}>
                  <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                    Positions
                  </h2>
                  <div className="w-full rounded-lg border-2 bg-[#F5F5F5] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm">
                    {watch("role") ? JOB_DATA[watch("role") as keyof typeof JOB_DATA]?.positions || 0 : 0}
                  </div>
                </Col>

                <Col lg={6} md={12} sm={24} xs={24}>
                  <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                    Upload Resume
                  </h2>
                  <div className="relative">
                    <input
                      type="file"
                      id="leadAttachment"
                      {...register("resume", {
                        required: "Resume is required",
                        validate: {
                          fileType: (files) => {
                            if (!files || files.length === 0) return true;
                            const file = files[0];
                            if (file.type !== "application/pdf") {
                              return "Only PDF files are allowed.";
                            }
                            return true;
                          },
                          fileSize: (files) => {
                            if (!files || files.length === 0) return true;
                            const file = files[0];
                            const maxSize = 10 * 1024 * 1024; // 10MB
                            if (file.size > maxSize) {
                              return "File size must be less than 10MB.";
                            }
                            return true;
                          }
                        }
                      })}
                      className="hidden border-2  border-[#EAEAEA] rounded-lg text-black-100  focus:border-gray-300 focus:outline-none"
                      accept=".pdf"
                    />
                    <label
                      htmlFor="leadAttachment"
                      className=" flex items-center gap-2 w-full cursor-pointer rounded-lg border-2 border-[#EAEAEA] px-4 py-2 text-sm  text-[#072032] bg-[#FAFAFA] hover:bg-gray-50"
                    >
                      <MdOutlineFileUpload className="text-[20px]" />
                      {resumeFile?.length > 0
                        ? resumeFile[0].name
                        : "Upload PDF here"}{" "}
                    </label>
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">{errors.resume.message as string}</p>
                    )}
                  </div>
                </Col>
                <button
                  className="bg-[#072032] text-white py-2 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-sm xl:text-sm font-500 rounded-lg transition-transform duration-300 hover:scale-105 flex gap-2 items-center form-submit-button"
                  aria-label="Continue"
                  type="submit"
                >
                  {loading ? <Spin /> : "Submit"}
                  {!loading && <FaArrowRightLong />}
                </button>
              </Row>
            </form>
          </div>
        </div>
      )}

      {pageInfo.metadata?.showOpenings === true && (
        <div className="faq-container text-left">
          {pageInfo.sections.map((data: any, index: any) => (
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

                <div className="mt-3">
                  <button
                    className="dream-it-cta-button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setValue("role", data.title);
                    }}
                  >
                    Apply Now
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        title={null}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row
            align={"bottom"}
            justify={"start"}
            className=" w-full lg:gap-4 md:gap-3 sm:gap-3 xs:gap-3 rounded-2xl   xl:pt-4 lg:pt-4 md:pt-4 sm:pt-4 xs:pt-4 xl:pb-4 lg:pb-8 md:pb-8 sm:pb-6 xs:pb-6  bg-transparent"
            style={{ backdropFilter: "blur(18.899999618530273px)" }}
          >
            <Col lg={12} md={12} sm={24} xs={24}>
              <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                Select Job Category
              </h2>
              <select
                {...register("role")}
                className="w-full rounded-lg border-2 bg-[#FAFAFA] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm focus:border-[#EAEAEA] focus:outline-none customSelectTag"
              >
                <option value="" disabled selected>
                  Select job title
                </option>
                {Object.values(JOB_DATA).map((job) => (
                  <option key={job.title} value={job.title} disabled={job.positions === 0}>
                    {job.title} {job.positions === 0 ? "(No openings)" : ""}
                  </option>
                ))}
              </select>
            </Col>
            
            <Col lg={6} md={12} sm={24} xs={24}>
              <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                Experience Required
              </h2>
              <div className="w-full rounded-lg border-2 bg-[#F5F5F5] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm">
                {watch("role") ? JOB_DATA[watch("role") as keyof typeof JOB_DATA]?.experienceRequired || "-" : "-"}
              </div>
            </Col>

            <Col lg={6} md={12} sm={24} xs={24}>
              <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                Positions
              </h2>
              <div className="w-full rounded-lg border-2 bg-[#F5F5F5] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm">
                {watch("role") ? JOB_DATA[watch("role") as keyof typeof JOB_DATA]?.positions || 0 : 0}
              </div>
            </Col>
            
            <Col lg={12} md={24} sm={24} xs={24}>
              <h2 className="xl:text-lg lg:text-lg md:text-lg sm:text-16 xs:text-16 font-semibold mb-2 text-black-100">
                Upload Resume
              </h2>
              <div className="relative">
                <input
                  type="file"
                  id="leadAttachmentModal"
                  {...register("resume", {
                    required: "Resume is required",
                    validate: {
                      fileType: (files) => {
                        if (!files || files.length === 0) return true;
                        const file = files[0];
                        if (file.type !== "application/pdf") {
                          return "Only PDF files are allowed.";
                        }
                        return true;
                      },
                      fileSize: (files) => {
                        if (!files || files.length === 0) return true;
                        const file = files[0];
                        const maxSize = 10 * 1024 * 1024; // 10MB
                        if (file.size > maxSize) {
                          return "File size must be less than 10MB.";
                        }
                        return true;
                      }
                    }
                  })}
                  className="hidden border-2  border-[#EAEAEA] rounded-lg text-black-100  focus:border-gray-300 focus:outline-none"
                  accept=".pdf"
                />
                <label
                  htmlFor="leadAttachmentModal"
                  className=" flex items-center gap-2 w-full cursor-pointer rounded-lg border-2 border-[#EAEAEA] px-4 py-2 text-sm  text-[#072032] bg-[#FAFAFA] hover:bg-gray-50"
                >
                  <MdOutlineFileUpload className="text-[20px]" />
                  {resumeFile?.length > 0
                    ? resumeFile[0].name
                    : "Upload PDF here"}{" "}
                </label>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume.message as string}</p>
                )}
              </div>
            </Col>
            <button
              className="bg-[#072032] text-white py-2 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-sm xl:text-sm font-500 rounded-lg transition-transform duration-300 hover:scale-105 flex gap-2 items-center form-submit-button"
              aria-label="Continue"
              type="submit"
            >
              {loading ? <Spin /> : "Submit"}
              {!loading && <FaArrowRightLong />}
            </button>
          </Row>
        </form>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default CurrentOpenings;
