import Link from "next/link";

const HeroSection = () => {
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
    </div>
  );
};

export default HeroSection;
