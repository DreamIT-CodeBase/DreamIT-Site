import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactFormModal from "../shared/ContactFormModal";

const IndustriesWeServe = ({ industriesWeServeData }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="container pt-60 pb-60 bg-white">
      <div className="grid xl:gap-10 lg:gap-10 md:gap-10 sm:gap-4 xs:gap-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {industriesWeServeData.map((industry: any, index: any) => (
          <div
            key={index}
            className="flex flex-col industries-we-serve-container"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center xl:mt-4 lg:mt-4 md:mt-4 sm:mt-2 xs:mt-2">
              <h4 className=" industry-we-serve-title">{industry.title}</h4>
              <div>
                <button
                  onClick={() => setIsModalVisible(true)}
                  className="bg-[#072032] flex text-white py-3 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
            <p className="text-muted-foreground xl:text-16 lg:text-16 md:text-16 sm:text-13 xs:text-13 text-[#596168] overflow-hidden text-ellipsis line-clamp-4 xl:mt-2 lg:mt-2 md:mt-1 sm:mt-1 xs:mt-1">
              {industry.description}
            </p>
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
