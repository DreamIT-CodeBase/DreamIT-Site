import React from "react";

const OurStory = () => {
  return (
    <section className="container   xl:py-16 lg:py-16 md:py-16 sm:py-8 xs:py-8  bg-white">
      <div className=" flex flex-col lg:flex-row xl:gap-16 lg:gap-16 md:lg-8 xs:gap-8 items-center">
        <div className="lg:w-1/2 space-y-4">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              OUR STORY
            </span>
          </div>

          <h2>Turning Data Into Stories That Drive Success</h2>

          <p className="xl:text-20 lg:text-16 md:text-16 text-[#072032] xl:max-w-[40rem]">
            Founded in 2020, we began with a strong focus on Advanced Data
            Analytics and Digital Marketing. Over the years we have
            strategically expanded our expertise to offer a comprehensive range
            of services including Cloud Data Management, ERP/CRM Implementation,
            Robotic Process Automation (RPA), Digital Transformation and Custom
            Business Applications
          </p>
          <p className="xl:text-20 lg:text-16 md:text-16 xl:leading-[26.04px] font-400 text-[#072032] xl:max-w-[40rem]">
            Our journey has been marked by a commitment to quality, leveraging
            both organic growth and strategic expansion to build robust
            capabilities
          </p>
          <p className="xl:text-20 lg:text-16 md:text-16 xl:leading-[26.04px] font-400 text-[#072032] xl:max-w-[40rem]">
            We prioritize understanding our clients unique challenges,
            leveraging innovation and excellence to help them navigate the
            complexities of digital transformation.
          </p>
          <p className="xl:text-20 lg:text-16 md:text-16 xl:leading-[26.04px] font-400 text-[#072032] xl:max-w-[40rem]">
            With a commitment to quality and a forward-thinking approach, we
            strive to be a trusted partner, enabling businesses to thrive in a
            dynamic ever evolving marketplace.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div>
            <img
              src="/assets/images/our-story.webp"
              alt="Professional working with city view"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
