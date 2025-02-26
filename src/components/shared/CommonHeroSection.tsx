import React from "react";

const CommonHeroSection = ({ data }: any) => {
  return (
    <div className=" common-hero-section-background-image pb-[10px]">
      <div className="container pt-60 pb-60">
        <div className="flex items-start justify-between lg:flex-nowrap md:flex-nowrap  gap-6 xs:flex-wrap">
          <div className="xl:mt-[60px] lg:mt-[60px] md:mt-[60px] sm:mt-[0px]">
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full xl:mb-[20px] lg:mb-[20px] md:mb-[20px] sm:mb-[10px]">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                {data.tag}
              </span>
            </div>
            <div>
              <h1 className=" max-w-[38rem] text-black-700 ">{data.title}</h1>
            </div>
          </div>
          <div>
            <img
              src={data.image}
              alt="Cloud Powered, Data Driven & Future Ready!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeroSection;
