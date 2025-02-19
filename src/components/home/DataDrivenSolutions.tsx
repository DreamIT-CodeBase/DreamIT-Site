import React from "react";
import Marquee from "react-fast-marquee";

const DataDrivenSolutions = () => {
  const industries = [
    { name: "Healthcare", src: "/assets/icons/healthcare.svg" },
    { name: "Finance", src: "/assets/icons/finance.svg" },
    { name: "Retail", src: "/assets/icons/retail.svg" },
    { name: "Manufacturing", src: "/assets/icons/manufacturing.svg" },
    { name: "Technology", src: "/assets/icons/technology.svg" },
    { name: "Education", src: "/assets/icons/education.svg" },
    { name: "E-commerce", src: "/assets/icons/e-commerce.svg" },
  ];

  const industries2 = [...industries, ...industries];
  return (
    <div>
      <div className=" mx-auto  pt-10 xl:pb-10 lg:pb-10 md:pb-5 sm:pb-5 xs:pb-5">
        <h4 className="font-medium text-center mb-8">
          Empowering Industries with Data-Driven Solutions
        </h4>
        <Marquee gradient={false} speed={50}>
          <div className="flex flex-wrap justify-center gap-7 ml-5 mr-5">
            {industries2.map(({ name, src }) => (
              <div
                key={name}
                className="flex items-center justify-center bg-white px-6 py-3 border-[1px] border-[#CFCFCF80] rounded-[11.03px] gap-2"
              >
                <img className="w-8 h-7" alt={name} src={src} loading="lazy" />
                <span className="text-[#7F7F7F] font-400 text-22">{name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DataDrivenSolutions;
