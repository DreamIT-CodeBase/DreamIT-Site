import React from "react";
import { BsCheckLg } from "react-icons/bs";

const OurExpertise = ({ servicedata }: any) => {
  return (
    <div className="container pt-60 pb-60 text-center bg-gradient-to-b from-white to-[#F9FDFF]">
      <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-semibold">
          {servicedata.ourExpertise[0].tag}
        </span>
      </div> 
      <h2 className="xl:mb-12 lg:mb-12 md:mb-4 sm:lg-4 xs:mb-6">
        {" "}
        {servicedata.ourExpertise[0].title}
      </h2>

      <div className="our-expertise-container">
        {servicedata?.ourExpertise[0]?.expertiseContent?.map(
          (item: any, index: any) => (
            <div
              key={index}
              className={`rounded-lg pt-4 pb-4 pl-6 pr-8 flex items-center gap-3 hover:shadow-lg transition-shadow color-containers`}
              style={{ backgroundColor: item.bgColor }}
            >
              <BsCheckLg className="text-[22px] font-semibold text-black-100 flex-shrink-0" />
              <h6 className="text-black-100 font-semibold features-card-title">{item.text}</h6>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OurExpertise;
