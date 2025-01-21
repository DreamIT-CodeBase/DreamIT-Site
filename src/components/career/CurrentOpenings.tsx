import { Col, Row } from "antd";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";

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
  return (
    <FaqWrapper>
      <div className="container pt-60 pb-60 text-center" id="jobOpening">
        <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3 ">
          <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
            CURRENT OPENINGS
          </span>
        </div>
        <h2 className="mb-12 max-w-[64rem] m-auto">
          We’re growing exponentially, so there are plenty of new roles across
          the globe.
        </h2>

        <div className="faq-container text-left">
          <div className="faq-item">
            <Row
              align={"middle"}
              justify={"space-between"}
              className="  w-full max-w-4xl items-center lg:gap-0 md:gap-4 sm:gap-4 xs:gap-4 rounded-2xl bg-white pt-6 pb-6 pl-6 pr-6"
            >
              <Col lg={11} md={24} sm={24} xs={24}>
                <h2 className="text-lg font-semibold mb-2 text-black-100">
                  Select Job Category
                </h2>
                <input
                  type="text"
                  placeholder="Select job title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full rounded-lg border-2 bg-white text-black-100 border-[#EAEAEA] px-4 py-2 text-sm focus:border-[#EAEAEA] focus:outline-none"
                />
              </Col>
              <Col lg={11} md={24} sm={24} xs={24}>
                <h2 className="text-lg font-semibold mb-2 text-black-100">
                  Upload Resume
                </h2>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    className="hidden border-2 border-[#EAEAEA] rounded-lg text-black-100  focus:border-gray-300 focus:outline-none"
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume"
                    className="block w-full cursor-pointer rounded-lg border-2 border-[#EAEAEA] px-4 py-2 text-sm  text-[#072032] hover:bg-gray-50"
                  >
                    {file ? file.name : "Upload here"}
                  </label>
                </div>
              </Col>
              <button aria-label="Continue">
                <img
                  src="/assets/icons/faq-right-arrow-icon.svg"
                  alt="icon"
                  className="faq-icon"
                />
              </button>
            </Row>
          </div>
        </div>

        <div className="faq-container text-left">
          {jonOpeningData.map((content, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
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
      </div>
    </FaqWrapper>
  );
};

export default CurrentOpenings;

const FaqWrapper = styled.div``;
