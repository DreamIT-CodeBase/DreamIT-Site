import React from "react";
 
const expertiseData = [
  {
    bgColor: "#FFFFFF",
    text: "Competitive compensation",
  },
  {
    bgColor: "#FFFFFF",
    text: "Healthcare & wellness benefits",
  },
  {
    bgColor: "#FFFFFF",
    text: "Flexible paid time off",
  },
  {
    bgColor: "#FFFFFF",
    text: "Paid parental & family leave",
  },
  {
    bgColor: "#FFFFFF",
    text: "Home office setup budget",
  },
];

const PerksAndBenefits = () => {
  return (
    <div className="container pt-60 pb-60 bg-[#F9FDFF] text-center">
      <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
        <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
          BENEFITS & PERKS
        </span>
      </div>
      <h2 className="mb-12 max-w-[64rem] m-auto">
        Empowering You with the Tools and Support to Thrive at Work and Beyond
      </h2>

      <div className="our-expertise-container">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg pt-4 pb-4 pl-6 pr-8 flex items-center gap-3 hover:shadow-lg transition-shadow color-containers`}
            style={{ backgroundColor: item.bgColor,border:"2px solid #EAEAEA" }}
          >
            <img src="/assets/icons/pers-check-icon.svg" alt="icon" className="h-[35px]"/>
            <h6 className="text-black-100 font-semibold">{item.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksAndBenefits;
