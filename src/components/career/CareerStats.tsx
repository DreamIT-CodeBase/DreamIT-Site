import React from "react";

const CareerStats = () => {
  const stats = [
    {
      value: "10+",
      label: "Years of Excellence",
    },
    {
      value: "100+",
      label: "Team Members",
    },
    {
      value: "50+",
      label: "Global Clients",
    },
    {
      value: "95%",
      label: "Employee Retention Rate",
    },
  ];
  return (
    <div className="container pt-60 pb-60 bg-[#0B1829]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="relative  ">
            <div className="space-y-2">
              <div className="text-center text-white text-5xl sm:text-6xl font-bold">
                {stat.value}
              </div>
              <p className="text-center text-white text-sm sm:text-base">
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
