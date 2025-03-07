import React from "react";

const CommonHeroSection = ({ data }: any) => {
  return (
    <div className=" common-hero-section-background-image pb-[10px]">
      <div className="container pt-60 pb-60">
        <div className="flex items-start justify-between lg:flex-nowrap md:flex-nowrap  gap-6 xs:flex-wrap">
          <div className="xl:mt-[60px] lg:mt-[60px] md:mt-[60px] sm:mt-[0px] sm:text-center xs:text-center xl:text-left lg:text-left md:text-left">
            <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-1 xs:py-1 rounded-full xl:mb-[20px] lg:mb-[20px] md:mb-[20px] sm:mb-[12px] xs:mb-[12px]">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] text-center font-bold mb-0">
                {data.tag}
              </span>
            </div>
            <div>
              <h1 className=" max-w-[32rem] text-black-700 hero-section-title">
                {data.title}
              </h1>
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
