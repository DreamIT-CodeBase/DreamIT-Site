import { Col, Row } from "antd";
import React, { useState } from "react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";
import { MdOutlineFileUpload } from "react-icons/md";

const CurrentOpenings = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const jonOpeningData = [
    {
      question: "Software Engineer (Full Stack)",
      answer:
        "Join our team as a Full Stack Software Engineer, where you'll have the opportunity to work on exciting projects, develop innovative solutions, and collaborate with a talented group of professionals. We're looking for someone with a passion for technology, a strong background in web development, and a desire to make a meaningful impact. Apply now and be part of a dynamic and supportive work environment!",
    },
    {
      question: "Software Engineer (Full Stack)",
      answer:
        "Join our team as a Full Stack Software Engineer, where you'll have the opportunity to work on exciting projects, develop innovative solutions, and collaborate with a talented group of professionals. We're looking for someone with a passion for technology, a strong background in web development, and a desire to make a meaningful impact. Apply now and be part of a dynamic and supportive work environment!",
    },
    {
      question: "Software Engineer (Full Stack)",
      answer:
        "Join our team as a Full Stack Software Engineer, where you'll have the opportunity to work on exciting projects, develop innovative solutions, and collaborate with a talented group of professionals. We're looking for someone with a passion for technology, a strong background in web development, and a desire to make a meaningful impact. Apply now and be part of a dynamic and supportive work environment!",
    },
    {
      question: "Software Engineer (Full Stack)",
      answer:
        "Join our team as a Full Stack Software Engineer, where you'll have the opportunity to work on exciting projects, develop innovative solutions, and collaborate with a talented group of professionals. We're looking for someone with a passion for technology, a strong background in web development, and a desire to make a meaningful impact. Apply now and be part of a dynamic and supportive work environment!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jobOpeiningAvailable = false;
  return (
    <FaqWrapper>
      <div
        className="container pt-60 pb-60 text-center bg-[url('/assets/images/home-page-her-section-background.webp')] bg-cover bg-bottom"
        id="jobOpening "
      >
        <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3 ">
          <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
            CURRENT OPENINGS
          </span>
        </div>
        <h2 className="mb-12 max-w-[64rem] m-auto">
          We’re growing exponentially, so there are plenty of new roles across
          the globe.
        </h2>

        {!jobOpeiningAvailable && (
          <div className="faq-container text-left  ">
            <div className="job-opening-form mb-12 ">
              <Row
                align={"bottom"}
                justify={"center"}
                className=" w-full lg:gap-6 md:gap-4 sm:gap-4 xs:gap-4 rounded-2xl   pt-8 pb-8 pl-8 pr-8 bg-transparent"
                style={{ backdropFilter: "blur(18.899999618530273px)" }}
              >
                <Col lg={10} md={24} sm={24} xs={24}>
                  <h2 className="text-lg font-semibold mb-2 text-black-100">
                    Select Job Category
                  </h2>
                  <input
                    type="text"
                    placeholder="Select job title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full rounded-lg border-2 bg-[#FAFAFA] text-[#072032] border-[#EAEAEA] px-4 py-2 text-sm focus:border-[#EAEAEA] focus:outline-none"
                  />
                </Col>
                <Col lg={10} md={24} sm={24} xs={24}>
                  <h2 className="text-lg font-semibold mb-2 text-black-100">
                    Upload Resume
                  </h2>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      onChange={handleFileChange}
                      className="hidden border-2  border-[#EAEAEA] rounded-lg text-black-100  focus:border-gray-300 focus:outline-none"
                      accept=".pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="resume"
                      className=" flex items-center gap-2 w-full cursor-pointer rounded-lg border-2 border-[#EAEAEA] px-4 py-2 text-sm  text-[#072032] bg-[#FAFAFA] hover:bg-gray-50"
                    >
                      <MdOutlineFileUpload className="text-[20px]" />
                      {file ? file.name : "Upload here"}
                    </label>
                  </div>
                </Col>
                <button
                  className="bg-[#072032] text-white py-2 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-sm xl:text-sm font-500 rounded-lg transition-transform duration-300 hover:scale-105 flex gap-2 items-center"
                  aria-label="Continue"
                >
                  Submit
                  <FaArrowRightLong />
                </button>
              </Row>
            </div>
          </div>
        )}

        {jobOpeiningAvailable && (
          <div className="faq-container text-left">
            {jonOpeningData.map((content, index) => (
              <div
                key={index}
                className={`faq-item bg-[#FFFFFF] ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="question" onClick={() => toggleFAQ(index)}>
                  <div>
                    <h3 className="faq-questions">{content.question}</h3>
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
                    <p>{content.answer}</p>
                  </div>

                  <div className="mt-3">
                    <a className="dream-it-cta-button" href="">
                      Apply Now
                      <FaArrowRight />
                    </a>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </FaqWrapper>
  );
};

export default CurrentOpenings;

const FaqWrapper = styled.div``;
