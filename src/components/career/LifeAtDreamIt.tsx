import React from "react";
import Marquee from "react-fast-marquee";

const LifeAtDreamIt = () => {
  const logo1 = [
    { src: "/assets/images/teamImages/pic1.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic2.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic3.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic4.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic5.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic6.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic7.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic8.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic9.webp", alt: "Power BI" },
  ];
  const logo2 = [
    { src: "/assets/images/teamImages/pic10.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic11.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic12.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic13.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic14.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic15.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic16.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic17.webp", alt: "Power BI" },
    { src: "/assets/images/teamImages/pic18.webp", alt: "Power BI" },
  ];

  const allLogo1 = [...logo1, ...logo1];
  const allLogo2 = [...logo2, ...logo2];
  return (
    <div className=" pt-60 pb-60">
      <div className="text-center  xl:mb-10 lg:mb-10 md:mb-10 sm:mb-4 xs:mb-4">
        <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
          <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
            WHAT WE VALUE
          </span>
        </div>
        <h2 className=" xl:mt-4 lg:mt-4 md:mt-6 max-w-[45rem] m-auto sm:mt-4 xs:mt-4  tracking-tight text-black-100">
          Life at DreamIT
        </h2>
      </div>

      <div
        style={{
          backgroundImage: `url(/assets/images/teammem-pics-background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: `center`,
        }}
      >
        <div className="xl:mb-12 lg:mb-12  xs:mb-8 sm:mb-8">
          <Marquee speed={60}>
            <div className="flex  items-center">
              {allLogo1.map((logo, index) => (
                <div key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain ml-4 mr-4 xl:h-[350px] lg:h-[300px] md:h-[250px] sm:h-[250px] xs:h-[200px] rounded-[19px]"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="xl:mb-12 lg:mb-12  xs:mb-8 sm:mb-8">
          <Marquee speed={60} direction="right">
            <div className="flex  items-center">
              {allLogo2.map((logo, index) => (
                <div key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="object-contain ml-4 mr-4 xl:h-[350px] lg:h-[300px] md:h-[250px] sm:h-[250px] xs:h-[200px] rounded-[19px]"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LifeAtDreamIt;
