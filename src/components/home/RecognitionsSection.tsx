const RecognitionsSection = () => {
  return (
    <section className="bg-white text-[#072032] py-6 md:py-8 border-b border-[#F1F5F9]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        <h2 className="text-center text-[24px] md:text-[34px] leading-tight font-semibold mb-6 md:mb-8">
          Recognitions & Certifications
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center gap-x-5 gap-y-6 md:gap-x-24 md:gap-y-10 lg:gap-x-28 xl:gap-x-32">
          <div className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[90px] flex items-center justify-center mx-auto">
            <img
              src="/assets/icons/ISOcertification1.png"
              alt="ISO 9001:2015"
              className="max-h-full max-w-full object-contain"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
          </div>
          <div className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[90px] flex items-center justify-center mx-auto">
            <img
              src="/assets/icons/ISOcertification2.png"
              alt="ISO 27001:2022"
              className="max-h-full max-w-full object-contain"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
          </div>
          <a
            href="https://marketplace.microsoft.com/en-us/partners/0d1140e7-b7b2-4f63-9354-31e03923ad5d/overview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dream IT Microsoft Partner Profile"
            className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[145px] flex items-center justify-center mx-auto"
          >
            <img
              src="/assets/images/mssolutionpartnerdataandaiazure.png"
              alt="Microsoft Solution Partner Data & AI Azure"
              className="max-h-full max-w-full object-contain"
            />
          </a>
          <a
            href="https://marketplace.microsoft.com/en-us/partners/0d1140e7-b7b2-4f63-9354-31e03923ad5d/overview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dream IT Microsoft Digital & App Innovation Profile"
            className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[145px] flex items-center justify-center mx-auto"
          >
            <img
              src="/assets/images/microsftsolutionandappinnovation.png"
              alt="Microsoft Solution Partner Digital & App Innovation"
              className="max-h-full max-w-full object-contain"
            />
          </a>
          <a
            href="https://clutch.co/profile/dream-it-consulting-services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dream IT Clutch Profile"
            className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[150px] flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/images/clutch.png"
              alt="Clutch 5.0/5.0"
              className="max-h-full max-w-full object-contain"
            />
          </a>
          <a
            href="https://www.goodfirms.co/company/dream-it-consulting-services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dream IT GoodFirms Profile"
            className="h-[64px] w-[150px] sm:w-[170px] md:h-[74px] md:w-[205px] flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/images/goodfirms.png"
              alt="GoodFirms 5.0/5.0"
              className="max-h-full max-w-full object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecognitionsSection;
