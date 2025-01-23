import React from "react";

const CommonHeroSection = ({ data }: any) => {
  return (
    <section>
      <div className="text-center pt-60 pb-60">
        <h1 className="pab-30">{data.title}</h1>
        <img
          src={data.image}
          alt="Professional working with city view"
          loading="lazy"
        />

        <img
          src="/assets/images/about-us-strip.png"
          alt="About us strip"
          loading="lazy"
          className="absolute top-[100px] text-center w-full"
        />
      </div>
    </section>
  );
};

export default CommonHeroSection;
