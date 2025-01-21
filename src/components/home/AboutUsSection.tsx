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
      description:
        " Unlock a competitive edge with powerful data visualization",
    },
  ];
  return (
    <div>
      <section className="container  pt-60 pb-60">
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
            className="  xl:space-y-6 lg:xl:space-y-6 sm:space-y-4 xs:space-y-4"
          >
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                ABOUT US
              </span>
            </div>

            <h2 className="font-bold tracking-tight">
              Turning Data Into Stories That Drive Success
            </h2>

            <h6>
              At Dream IT, we specialize in helping businesses thrive through
              cutting-edge technology solutions like Cloud Data Management,
              Advanced Analytics & Visualisation, Digital Marketing and more.
            </h6>

            <div className="space-y-4">
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
                    <span className="lg:text-18 text-black-100 font-bold">
                      {feature.title}
                    </span>{" "}
                    <span className="lg:text-18 text-gray-800">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                className="bg-[#0A2540] text-[16px] transition-transform duration-300 hover:scale-105 hover:text-white  text-white hover:bg-[#0A2540]/90 rounded-md px-8 py-3 "
                href="/about-us"
              >
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutUsSection;
