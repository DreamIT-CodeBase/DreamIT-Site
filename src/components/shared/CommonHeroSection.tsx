import React from "react";
import DataDrivenSolutions from "../home/DataDrivenSolutions";

const CommonHeroSection = ({
  data,
  showInsightsIndustries,
  showDataDrivenCrousal,
}: any) => {
  return (
    <div className=" common-hero-section-background-image pb-[10px]">
      <div className="container ph-50 pd-40">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="  sm:text-center xs:text-center xl:text-left lg:text-left md:text-left">
            <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-1 xs:py-1 rounded-full xl:mb-[20px] lg:mb-[20px] md:mb-[20px] sm:mb-[12px] xs:mb-[12px]">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] text-center font-bold mb-0">
                {data.tag}
              </span>
            </div>
            <div>
              <h1
                style={{ maxWidth: data.maxwidth || "28rem" }}
                className="   text-black-700 hero-section-title"
              >
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

      <div>
        <DataDrivenSolutions
          showInsightsIndustries={showInsightsIndustries}
          showDataDrivenCrousal={showDataDrivenCrousal}
        />
      </div>
    </div>
  );
};

export default CommonHeroSection;
