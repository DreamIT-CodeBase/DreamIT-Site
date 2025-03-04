import React from "react";
import Marquee from "react-fast-marquee";

const Expertise = () => {
  const logo1 = [
    { src: "/assets/images/loker-logo6.png", alt: "Power BI" },
    { src: "/assets/images/amazon-quicksight-logo7.png", alt: "Facebook Ads" },
    { 
      src: "/assets/images/knime.png",
      alt: "Microsoft Dynamics 365",
    },
    { src: "/assets/images/microsoft-fabric.png", alt: "Power Apps" },
    { src: "/assets/images/microsoft-azure-logo2.png", alt: "Bing" },
    { src: "/assets/images/databricks-logo.png", alt: "Bing" },
    { src: "/assets/images/purview-logo4.png", alt: "Bing" },
    { src: "/assets/images/dynamic-365-logo8.png", alt: "Bing" },
    { src: "/assets/images/powerbi-logo5.png", alt: "Bing" },
    { src: "/assets/images/power-automate.png", alt: "Bing" },
    { src: "/assets/images/power-paltform.png", alt: "Bing" },
    { src: "/assets/images/power-pages-logo.png", alt: "Bing" },
  ]; 
  const logo2 = [
    { src: "/assets/images/google-ads.png", alt: "Google Ads" },
    { src: "/assets/images/bing.png", alt: "Microsoft Fabric" },
    { src: "/assets/images/meta-ads.png", alt: "Google Analytics" },
    { src: "/assets/images/linkedinAds-logo15.png", alt: "Google Analytics" },
    { src: "/assets/images/google-analytics.png", alt: "KNIME" },
    { src: "/assets/images/semrush-logo9.png", alt: "Power Automate" },
    { src: "/assets/images/ahrefs-logo.png", alt: "Power Automate" },
    { src: "/assets/images/moz-logo.png", alt: "Power Automate" },
    { src: "/assets/images/hootsuite-logo16.png", alt: "Power Automate" },
    { src: "/assets/images/canva-logo19.png", alt: "Power Automate" },
    { src: "/assets/images/mailChimp-logo22.png", alt: "Power Automate" },
    { src: "/assets/images/hubspot-logo23.png", alt: "Power Automate" },
  ];

  const allLogo1 = [...logo1, ...logo1];
  const allLogo2 = [...logo2, ...logo2];
  return (
    <div>
      <section className="w-full xl:py-16 lg:py-16 md:py-16    bg-[#072032] bg-cover bg-center">
        <div className="py-8">
          <div className="flex flex-col items-center xl:mb-12 lg:mb-12 md:mb-12 sm:mb-6 xs:mb-6 mx-auto text-center">
            <div className=" relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#4C6FFF30] mb-4">
              <span className=" lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold  text-white">
                EXPERTISE
              </span>
            </div>

            <h3 className="text-white mb-3 px-2">
              Where Innovation Meets Powerful IT Tools
            </h3>

            <h6 className="text-[#FFFFFF] font-[500]  mx-auto md:max-w-[48rem] px-2">
              Harnessing advanced technologies to deliver scalable and efficient
              solutions
            </h6>
          </div>

          <div className="xl:mb-12 lg:mb-12  xs:mb-6 sm:mb-6">
            <Marquee speed={50}>
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
          <div >
            <Marquee speed={50} direction="right">
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

          {/* <div className="flex justify-center">
            <Link
              href="#contactForm"
              className="text-[18px] text-white transition-transform duration-300 hover:scale-105  hover:bg-[#0A2540]/90 rounded-[8px] border-[2px] border-white px-8 py-3"
            >
              Get Started
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Expertise;
