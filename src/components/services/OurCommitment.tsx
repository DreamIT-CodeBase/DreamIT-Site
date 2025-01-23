import React from "react";

const OurCommitment = () => {
  const features = [
    {
      title: "Continuous Innovation",
      description:
      "We embrace cutting-edge solutions that evolve with your business needs.",
      icon: "/assets/icons/continous-innovation-icon.svg",
    },
    {
      title: "Dedicated Support",
      description:
        " With round the clock support, we ensure your success is our top priority.",
      icon: "/assets/icons/dedicated-support-icon.svg",
    },
    {
      title: "Transparent Communication",
      description:" We believe in honesty and clarity, keeping you informed every step of the way.",
      icon: "/assets/icons/transparent-communication-icon.svg",
    },
    {
      title: "Measurable Results",
      description:
        " We believe in honesty and clarity, keeping you informed every step of the way.",
      icon: "/assets/icons/measurable-result-icon.svg",
    },
  ];
  return (
    <div className="container bg-[#F9FDFF]">
      <section className=" lg:py-24 md:py-20 sm:py-10 xs:py-10 bg-[#F9FDFF]">
        <div className="grid  sm:gap-8 xs:gap-8 md:gap-10 lg:gap-12 xl:gap-12 lg:grid-cols-2">
          <div className="sm:space-y-2 xs:space-y-2 md:space-y-6 lg:space-y-6 xl:space-y-6">
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                OUR COMMITMENT
              </span>
            </div>
            <h1>
            A Commitment to<br/> Quality  & Trust
            </h1>
            <h6 className="xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px]">
            Building Trust Through Innovative Solutions, Exceptional Quality and a Relentless Commitment to Your Success
            </h6>
          </div>

          <div className="grid gap-6 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[18px] border-2 border-[#EAEAEA] bg-card p-6 shadow-sm"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-4 h-16  w-16 rounded-full bg-blue-50"
                />
                <p className="mb-2 p-large font-semibold text-left max-w-[220px]">
                  {feature.title}
                </p>
                <p className="text-14 text-gray-800 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitment;
