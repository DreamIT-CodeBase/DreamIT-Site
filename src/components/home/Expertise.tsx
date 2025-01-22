import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Expertise = () => {
  const logo1 = [
    { src: "/assets/images/power-bi.png", alt: "Power BI" },
    { src: "/assets/images/facebook-ads.png", alt: "Facebook Ads" },
    {
      src: "/assets/images/microsoft.png",
      alt: "Microsoft Dynamics 365",
    },
    { src: "/assets/images/power-apps.png", alt: "Power Apps" },
    { src: "/assets/images/bing.png", alt: "Bing" },
  ];
  const logo2 = [
    { src: "/assets/images/google-ads.png", alt: "Google Ads" },
    { src: "/assets/images/google-analytics.png", alt: "Microsoft Fabric" },
    { src: "/assets/images/microsoft-fabric.png", alt: "Google Analytics" },
    { src: "/assets/images/knime.png", alt: "KNIME" },
    { src: "/assets/images/power-automate.png", alt: "Power Automate" },
  ]; 

  const allLogo1 = [...logo1, ...logo1];
  const allLogo2 = [...logo2, ...logo2];
  return (
    <div>
      <section className="w-full xl:py-20 lg:py-20 md:py-20    bg-[url('/assets/images/expertise-bg.webp')] bg-cover bg-center">
        <div className="py-8">
          <div className="flex flex-col items-center mb-16 mx-auto text-center">
            <div className=" relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#4C6FFF30] mb-4">
              <span className="text-18   font-bold   text-white">
                EXPERTISE
              </span>
            </div>

            <h1 className="text-white mb-3 px-2">
              Where Innovation Meets Powerful IT Tools
            </h1>

            <h6 className="text-[#FFFFFF]   mx-auto md:max-w-[48rem] px-2">
              Harnessing advanced technologies to deliver scalable and efficient
              solutions
            </h6>
          </div>

          <div className="xl:mb-12 lg:mb-12  xs:mb-8 sm:mb-8">
            <Marquee speed={70}>
              <div className="flex  items-center">
                {allLogo1.map((logo, index) => (
                  <div key={index}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="object-contain ml-4 mr-4 lg:w-[200px] md:w-[150px] sm:w-[100px] xs:w-[100px]"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="xl:mb-12 lg:mb-12  xs:mb-8 sm:mb-8">
            <Marquee speed={70} direction="right">
              <div className="flex items-center">
                {allLogo2.map((logo, index) => (
                  <div key={index}>
                    <img
                      src={logo.src}
                      loading="lazy"
                      alt={logo.alt}
                      className="object-contain ml-4 mr-4 lg:w-[200px] md:w-[150px] sm:w-[100px] xs:w-[100px]"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="flex justify-center">
            <Link
              href="#contactForm"
              className="text-[18px] text-white transition-transform duration-300 hover:scale-105  hover:bg-[#0A2540]/90 rounded-[8px] border-[2px] border-white px-8 py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
