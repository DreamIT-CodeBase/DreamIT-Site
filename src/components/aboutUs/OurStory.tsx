import React from "react";

const OurStory = () => {
  return (
    <section className="container   xl:py-16 lg:py-16 md:py-16 sm:py-8 xs:py-8  bg-white">
      <div className=" flex flex-col lg:flex-row xl:gap-16 lg:gap-16 md:lg-8 xs:gap-8 items-center">
        <div className="lg:w-1/2 space-y-5">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
            <span className="text-[#00A9FF]  text-center font-bold ">
              OUR STORY
            </span>
          </div>

          <h2>Turning Data Into Stories That Drive Success</h2>

          <p className="xl:text-20 lg:text-16 md:text-16 text-black-100 xl:max-w-[32rem]">
            We are a leading company specializing in Data Visualization and
            Digital Marketing solutions. Over the years, we have partnered with
            software firms and organizations to deliver innovative breakthroughs
            that boost productivity, foster growth, and cultivate strong
            customer relationships.
          </p>
          <p className="xl:text-20 lg:text-16 md:text-16 xl:leading-[26.04px] font-400 text-gray-800 xl:max-w-[32rem]">
            We are dedicated to unlocking the full potential of integrated
            services that streamline workflows, enhance operational efficiency,
            and create a powerful online presence in the competitive digital
            marketplace.
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
