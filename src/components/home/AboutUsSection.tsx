import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  const features = [
    {
      title: "Enhance Performance:",
      description:
        "Streamline workflows tailored to your needs to boost efficiency",
    },
    {
      title: "Optimize Revenue:",
      description: "Make data driven decisions to boost profitability",
    },
    {
      title: "Accelerate Growth:",
      description: "Unlock a competitive edge with powerful data visualization",
    },
  ];

  return (
    <div>
      <section className="container pt-60 pb-60">
        <Row align={"middle"} gutter={[24, 24]} justify={"space-between"}>
          <Col xl={11} lg={12} md={12} sm={24} xs={24}>
            <div>
              <img
                src="/assets/images/aboutUs-image.webp"
                alt="Professional working with city view"
                loading="lazy"
              />
            </div>
          </Col>

          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className="xl:space-y-4 lg:space-y-4 sm:space-y-3 xs:space-y-3 sm:text-center xs:text-center xl:text-left lg:text-left md:text-left "
          >
            <div className="relative inline-flex justify-center align-middle bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full  ">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] text-center font-bold mb-0">
                ABOUT US
              </span>
            </div>

            <h2 className="font-bold   about-us-section-title ">
              Turning Data Into Stories That Drive Success
            </h2>

            <h6 className="xl:text-20 text-[#596168] lg:text-16 md:text-16  about-use-section-subtitle">
              At Dream IT, we specialize in helping businesses thrive through
              cutting-edge technology solutions like Cloud Data Management,
              Advanced Analytics & Visualisation, Digital Marketing, and more.
            </h6>

            <div className="xl:space-y-4 lg:space-y-4 md:space-y-4 sm:space-y-2 xs:space-y-2 sm:text-left xs:text-left xl:text-left lg:text-left md:text-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <img
                      src="/assets/icons/solid-check-icon.svg"
                      alt="icon"
                      className="h-[20px] mt-[3px]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="xl:text-18 lg:text-18 md:text-18 sm:text-14 xs:text-13  text-black-100 font-bold ">
                      {feature.title}
                    </span>{" "}
                    <span className="xl:text-18 lg:text-18 md:text-18 sm:text-14 xs:text-13 text-gray-800 ">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }} className="">
              <Link
                className="bg-[#072032] text-white py-3 px-6 text-lg  xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[12px] xs:text-[12px]  hover:text-[#FFFFFF] font-bold rounded-lg transition-transform duration-300 hover:scale-105"
                href="/about-us"
              >
                Know More
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutUsSection;
