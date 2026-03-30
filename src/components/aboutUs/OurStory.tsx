import React from "react";

const OurStory = () => {
  return (
    <section className="container  xl:py-16 lg:py-16 md:py-16 sm:py-4 xs:py-4  bg-white">
      <div className=" flex flex-col lg:flex-row xl:gap-16 lg:gap-16 md:lg-8 xs:gap-8 items-center">
        <div className="lg:w-1/2"> 
          <div className="web-version-image">
            <img
              src="/assets/images/our-story.webp"
              alt="Professional working with city view"
              loading="lazy"
            />
          </div>
          <div className="mobile-version-image">
            <img
              src="/assets/images/our-story-mobile-version-img.webp"
              alt="Professional working with city view"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-3">
          <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              OUR STORY
            </span>
          </div>

          <h2>Turning Data Into Stories That Drive Success</h2>

          <p className="xl:text-18 lg:text-16 md:text-16 sm:text-[12px] xs:text-[12px] text-[#2D2D2D] xl:max-w-[40rem]">
            Founded in 2020, we began with a strong focus on <a href="https://www.dreamitcs.com/services/advanced-analytics/" className="text-[#00A9FF]">Advanced Data Analytics</a> and <a href="https://www.dreamitcs.com/services/digital-marketing/" className="text-[#00A9FF]">Digital Marketing</a>. Over the years we have
            strategically expanded our expertise to offer a comprehensive range
            of services including Cloud Data Management, ERP/CRM Implementation,
            Robotic Process Automation (RPA), Digital Transformation and Custom
            Business Applications
          </p>
          <p className="xl:text-18 lg:text-16 md:text-16 sm:text-[12px] xs:text-[12px] xl:leading-[26.04px] font-400 text-[#2D2D2D] xl:max-w-[40rem]">
            Our journey has been marked by a commitment to quality, leveraging
            both organic growth and strategic expansion to build robust
            capabilities
          </p>
          <p className="xl:text-18 lg:text-16 md:text-16 xl:leading-[26.04px] sm:text-[12px] xs:text-[12px] font-400 text-[#2D2D2D] xl:max-w-[40rem]">
            We prioritize understanding our clients unique challenges,
            leveraging innovation and excellence to help them navigate the
            complexities of digital transformation.
          </p>
          <p className="xl:text-18 lg:text-16 md:text-16 xl:leading-[26.04px] sm:text-[12px] xs:text-[12px] font-400 text-[#2D2D2D] xl:max-w-[40rem]">
            With a commitment to quality and a forward-thinking approach, we
            strive to be a trusted partner, enabling businesses to thrive in a
            dynamic ever evolving marketplace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
