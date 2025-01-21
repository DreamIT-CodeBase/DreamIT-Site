import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactFormModal from "../shared/ContactFormModal";

const IndustriesWeServe = ({ industriesWeServeData }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="container pt-60 pb-60 bg-white">
      <div className="grid gap-14 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {industriesWeServeData.map((industry: any, index: any) => (
          <div
            key={index}
            className="flex flex-col space-y-4 industries-we-serve-container"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full object-cover"
              />
            </div>
            <h4>{industry.title}</h4>
            <p className="text-muted-foreground text-[16px] text-[#596168] overflow-hidden text-ellipsis line-clamp-3">
              {industry.description}
            </p>
            <button
              onClick={() => setIsModalVisible(true)}
              className="bg-white flex gap-2 max-w-[165px] items-center text-black-700 hover:text-black-700 py-2 text-[16px] px-4 font-bold rounded-[10px] border-[2px] border-[#eaeaea] transition-transform duration-300 hover:scale-105"
            >
              Get Started
              <FaArrowRightLong />
            </button>{" "}
          </div>
        ))}
      </div>
      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </section>
  );
};

export default IndustriesWeServe;
