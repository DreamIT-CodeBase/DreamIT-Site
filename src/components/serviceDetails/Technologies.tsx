import React from "react";
import Marquee from "react-fast-marquee";

const Technologies = ({ technology }: any) => {
  const techLogo = technology.techData[0].techLogos;
  const logo = [...techLogo, ...techLogo];
  return (
    <div className="container pt-60 pb-60 text-center" id="jobOpening">
      <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3 ">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          {technology.techData[0].tag}
        </span>
      </div>
      <h2 className="xl:mb-12 lg:mb-12 md:mb-4 sm:lg-4 xs:mb-4  max-w-[64rem] m-auto ">
        {technology.techData[0].title}
      </h2>

      {/* <div className="technologies-logo-for-web">
        <div className="flex flex-wrap justify-center items-center gap-4  ">
          {logo?.map(
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
      </div> */}

      <div className=" ">
        <Marquee gradient={false} speed={50}>
          <div className="flex   justify-center gap-7 ml-4 mr-4">
            {logo?.map((logo: { logos: string }, index: number) => (
              <img
                key={index}
                src={logo.logos}
                alt="icon"
                className="xl:max-w-[200px] lg:max-w-[200px] md:max-w-[150px] sm:max-w-[130px] xs:max-w-[120px] h-auto"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
