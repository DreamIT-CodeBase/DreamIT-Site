import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="home-page-hero-section-background-image pb-[10px]">
      <div className="container pt-60 pb-60">
        <div className="flex items-center justify-between lg:flex-nowrap md:flex-nowrap  gap-6 xs:flex-wrap">
          <div className="">
            <h1 className="mb-4    text-black-700 ">
              Cloud Powered,
              <br /> Data Driven & Future Ready!
            </h1>

            <h6 className="xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4 max-w-[34rem] text-black-700">
              Seamless, interconnected solutions for unparalleled digital
              transformation.
            </h6>

            <div>
              <Link
                href={"#contactForm"}
                className="bg-[#072032] text-white py-3 px-6 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"
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
