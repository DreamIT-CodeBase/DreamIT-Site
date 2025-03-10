import React from "react";
 
const expertiseData = [
  {
    bgColor: "#FFFFFF",
    text: "Performance Bonuses",
  },
  {
    bgColor: "#FFFFFF",
    text: "Provident Fund & Gratuity",
  },
  {
    bgColor: "#FFFFFF",
    text: "Health Insurance",
  },
  {
    bgColor: "#FFFFFF",
    text: "Training Programs",
  },
  {
    bgColor: "#FFFFFF",
    text: "Team Outings & Retreats",
  },
  {
    bgColor: "#FFFFFF",
    text: "Maternity / Paternity Benefits",
  },
  {
    bgColor: "#FFFFFF",
    text: "Competitive Salary",
  },
  {
    bgColor: "#FFFFFF",
    text: "Upskilling & Certifications",
  },
];

const PerksAndBenefits = () => {
  return (
    <div className="container pt-60 pb-60 bg-[#F9FDFF] text-center">
      <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          BENEFITS & PERKS
        </span>
      </div>
      <h2 className="xl:mb-12 lg:mb-12 md:mb-12 sm:mb-4 xs:mb-4 max-w-[44rem] m-auto">
      Empowering you with the tools and support to thrive at work and beyond
      </h2>

      <div className="our-expertise-container">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg pt-4 pb-4 pl-6 pr-8 flex items-center gap-2 hover:shadow-lg transition-shadow color-containers`}
            style={{ backgroundColor: item.bgColor,border:"2px solid #EAEAEA" }}
          >
            <img src="/assets/icons/pers-check-icon.svg" alt="icon" className="xl:h-[35px] lg:h-[35px] md:h-[35px] sm:h-[20px] xs:h-[20px]"/>
            <h6 className="text-black-100 font-semibold">{item.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksAndBenefits;
