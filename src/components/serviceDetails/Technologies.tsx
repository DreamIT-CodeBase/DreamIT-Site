import React from "react";

const Technologies = ({ technology }: any) => {
  return (
    <div className="container pt-60 pb-60 text-center" id="jobOpening">
      <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3 ">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          {technology.techData[0].tag}
        </span>
      </div>
      <h2 className="mb-12 max-w-[64rem] m-auto">
        {technology.techData[0].title}
      </h2>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-4">
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
        <img src="/assets/icons/technology-logo.svg" alt="icon" />
      </div>
    </div>
  );
};

export default Technologies;
