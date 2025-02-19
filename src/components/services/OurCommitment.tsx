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
      description:
        " We believe in honesty and clarity, keeping you informed every step of the way.",
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
        <div className="   sm:gap-8 xs:gap-8 md:gap-10 lg:gap-12 xl:gap-12 lg:grid-cols-2">
          <div className="text-center sm:space-y-2 xs:space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4">
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
              <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                OUR COMMITMENT
              </span>
            </div>
            <h2>Data-Driven Success: From Information to Execution</h2>
            <h6 className="max-w-[800px] m-auto xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px]">
              However, we are not static and limit ourselves to a specific
              field. We are dedicated to data visualization along with
              customized digital marketing services.
            </h6>
          </div>

          <div className="grid gap-6 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-6 xl:mt-6 md:mt-6 sm:mt-6 xs:mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex shadow-[0px_4px_16.5px_0px_rgba(49,112,144,0.11)] items-center gap-3 rounded-[18px]  bg-[#FFFFFF] py-8 px-6 "
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="  h-16  w-16 rounded-full bg-blue-50"
                />

                <div>
                  <p className="mb-2 p-large font-semibold text-left  ">
                    {feature.title}
                  </p>
                  <p className="text-16 text-gray-800 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitment;
