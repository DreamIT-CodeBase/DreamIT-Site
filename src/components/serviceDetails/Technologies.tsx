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

      <div className="flex flex-wrap justify-center items-center gap-4">
        {technology.techData[0].techLogos?.map(
          (logo: { logos: string }, index: number) => (
            <img
              key={index}
              src={logo.logos}
              alt="icon"
              className="xl:max-w-[200px] lg:max-w-[200px] md:max-w-[150px] sm:max-w-[150px] xs:max-w-[150px] h-auto"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Technologies;
