/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const OurCoreValues = () => {
  const values = [
    {
      title: "Delight",
      description:
        "Creating moments that leave a lasting smile and exceed expectations.",
      url: "/assets/icons/delight-icon.svg",
    },
    {
      title: "Reliability",
      description: "A foundation of trust, always dependable and consistent.",
      url: "/assets/icons/reliability-icon.svg",
    },
    {
      title: "Expertise",
      description:
        "Mastery through experience, delivering quality with confidence.",
      url: "/assets/icons/expertise-icon.svg",
    },
    {
      title: "Adaptability",
      description:
        "Thriving in change, adjusting seamlessly to every challenge.",
      url: "/assets/icons/adaptability-icon.svg",
    },
    {
      title: "Motivation",
      description:
        "Driven by purpose, pushing boundaries to achieve greatness.",
      url: "/assets/icons/motivation-icon.svg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "url('/assets/images/our-core-and-values-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="container pt-60 pb-60 ">
        <div className="text-center  xl:mb-10 lg:mb-10 md:mb-10 sm:mb-0 xs:mb-0">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-semibold">
              OUR CORE VALUES
            </span>
          </div>
          <h2 className=" xl:mt-6 lg:mt-6 md:mt-6 max-w-[40rem] m-auto sm:mt-4 xs:mt-4  tracking-tight text-black-100">
            Committed to Quality, Driven by integrity, Focused on you
          </h2>
        </div>

        <div className="flex  flex-wrap justify-center items-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-0 ">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center justify-center minor-container xl:max-w-[380px] lg:max-w-[240px] md:max-w-[200px] sm:max-w-[190px] gap-2"
            >
              <img
                src={value.url}
                alt={value.title}
                className="xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[50px] xs:h-[50px]"
              />
              <h6 className="mb-0 text-[#1c1c1c] font-bold mt-3 text-[22px] our-core-values-title">
                {value.title}
              </h6>
              <p className="text-[#072032] text-center  mb-0">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurCoreValues;
