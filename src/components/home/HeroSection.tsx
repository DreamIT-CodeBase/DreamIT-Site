import Link from "next/link";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  const industries = [
    { name: "Healthcare", src: "/assets/icons/healthcare.svg" },
    { name: "Finance", src: "/assets/icons/finance.svg" },
    { name: "Retail", src: "/assets/icons/retail.svg" },
    { name: "Manufacturing", src: "/assets/icons/manufacturing.svg" },
    { name: "Technology", src: "/assets/icons/technology.svg" },
    { name: "Education", src: "/assets/icons/education.svg" },
    { name: "E-commerce", src: "/assets/icons/e-commerce.svg" },
  ];

  const industries1 = [
    ...industries,
    ...industries,
    ...industries,
    ...industries,
  ];
  return (
    <div className="home-page-hero-section-background-image pb-[10px]">
      <div className="container pt-60 pb-60">
        <div className="flex items-center justify-between lg:flex-nowrap md:flex-nowrap  gap-6 xs:flex-wrap">
          <div className="">
            <h1 className=" text-black-700 hero-section-title">
              Cloud Powered,
              <br /> Data Driven & Future Ready!
            </h1>

            <h6 className="  max-w-[34rem] text-black-700 hero-section-subtitle">
              Seamless, interconnected solutions for unparalleled digital
              transformation.
            </h6>

            <div className="xl:mt-8 lg:mt-8 md:mt-8 sm:mt-8 xs:mt-6   sm:text-center xs:text-center xl:text-left lg:text-left md:text-left">
              <Link
                href={"#contactForm"}
                className="bg-[#072032] text-white py-3 px-6  sm:px-8 xs:px-8 text-lg sm:text-[12px] xs:text-[12px] md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/home-page-hero-sec-image.png"
              alt="Cloud Powered, Data Driven & Future Ready!"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-center xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4 data-driven-title">
          Empowering Industries with Data-Driven Solutions{" "}
        </h4>
        <Marquee gradient={false} speed={50}>
          <div className="flex flex-wrap justify-center xl:gap-7 lg:gap-7 md:gap-7 sm:gap-4 xs:gap-3 ml-5 mr-5">
            {industries1.map(({ name, src }) => (
              <div
                key={name}
                className="flex items-center justify-center bg-white px-6 py-3 border border-[#CFCFCF80] rounded-[11.03px] gap-2 
                      xl:px-8 xl:py-4 lg:px-7 lg:py-3 md:px-6 md:py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-2"
              >
                <img
                  className="w-8 h-7 sm:w-7 sm:h-6 xs:w-6 xs:h-5"
                  alt={name}
                  src={src}
                  loading="lazy"
                />
                <span className="text-[#7F7F7F] font-normal xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
