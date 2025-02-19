import React from "react";

const CareerStats = () => {
  const stats = [
    {
      value: "200+",
      label: "Global Clients",
    },
    {
      value: "95%",
      label: "Employee Retention rate",
    },
    {
      value: "98%",
      label: "Client Satisfaction Rate",
    },
    
  ];
  return (
    <div className="container pt-60 pb-60 bg-[#0B1829]">
      <div className="grid   lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-10 lg:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative  ">
            <div className="space-y-2">
              <div className="text-center text-white xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-bold">
                {stat.value}
              </div>
              <p className="text-center text-white xl:text-lg lg:text-lg md:text-lg  sm:text-base">
                {stat.label}
              </p>
            </div>
            {index !== stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-[#D6F1FF36]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerStats;
