export default function CompanyProfile() {
  return (
    <div className="container pt-60 pb-60">
      <div className="grid xl:gap-20 lg:gap-12 md:gap-12 sm:gap-6 xs:gap-6 lg:grid-cols-2 md:grid-cols-2  items-center">
        {/* Content Section */}
        <div className="space-y-3">
          <div className=" ">
            <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full ">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-semibold">
                OUR MISSION & VISION
              </span>
            </div>
            <h2 className="tracking-tight xl:mt-[15px] lg:mt-[15px] md:mt-[15px] sm:mt-[15px] xs:mt-[15px]">
            Inspiring innovation and transforming futures
            </h2>
            {/* <p className="text-gray-800 xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px] max-w-3xl ">
              We specialize in helping businesses thrive through cutting-edge
              technology solutions like Cloud Data Management, CRM, Data
              Migration, Process Automation, Digital Marketing and more
            </p> */}

            {/* Vertical Line with Gradient */}
            <div className="flex items-start gap-5 xl:mt-[50px] lg:mt-[20px] md:mt-[18px] sm:mt-[18px] xs:mt-[18px]">
              {/* Vertical Line */}
              <div className="w-2 xl:h-[200px] lg:h-[200px] md:h-[230px] sm:h-[170px] xs:h-[200px] bg-gradient-to-b from-[#7DC1E9] to-[#854CFF] rounded-full our-mission-and-vision-gradient"></div>

              {/* Mission & Vision Section */}
              <div>
                <div>
                  <p className="text-[#072032] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-bold">
                    Our Mission
                  </p>
                  <p className="text-[#072032] max-w-[420px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[14px] font-medium mt-1">
                    Ensuring security, scalability, and sustainability in every
                    solution we provide.
                  </p>
                </div>
                <div className="xl:mt-6 lg:mt-6 md:mt-6 sm:mt-3 xs:mt-3">
                  <p className="text-[#072032] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-bold">
                    Our Vision
                  </p>
                  <p className="text-[#072032] max-w-[420px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[14px] font-medium mt-1">
                    Inspiring trust and confidence by consistently delivering
                    value through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full xl:-order-first lg:-order-first md:-order-first sm:order-first xs:order-first">
          <img
            src="/assets/images/mission-and-vision.webp"
            alt="Team members collaborating at a computer"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
