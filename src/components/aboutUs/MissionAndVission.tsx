export default function CompanyProfile() {
  return (
    <div className="container xl:py-16 lg:py-16 md:py-16 sm:py-8 xs:py-8">
      <div className="grid gap-12 lg:grid-cols-2 md:grid-cols-2 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/assets/images/mission-and-vision.webp"
            alt="Team members collaborating at a computer"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <div className="space-y-4">
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                OUR MISSION & VISION
              </span>
            </div>
            <h1 className="tracking-tight">
              Inspiring Innovation and Transforming Futures
            </h1>
            <p className="text-gray-800 xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px] max-w-3xl ">
              We specialize in helping businesses thrive through cutting-edge
              technology solutions like Cloud Data Management, CRM, Data
              Migration, Process Automation, Digital Marketing and more
            </p>
            <div>
              <p className="text-[#072032] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[18px] font-bold">
                Our Mission
              </p>
              <p className="text-[#072032] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[18px] font-medium mt-2">
                Ensuring security, scalability and sustainability in every
                solution we provide.
              </p>
            </div>
            <div>
              <p className="text-[#072032] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[18px] font-bold">
                Our Vision
              </p>
              <p className="text-[#072032] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[18px] font-medium mt-2">
                Inspiring trust and confidence by consistently delivering value
                through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
