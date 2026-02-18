import React, { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";
import { FaArrowRightLong } from "react-icons/fa6";

const CommonHeroSection = ({ servicedata }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="service-details-hero-section-background-image">
      <div className="container ph-50 pd-40">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className=" ">
            <div>
              <h2 className=" max-w-[28rem]   text-black-700 hero-section-title">
                {servicedata?.title}
              </h2>
              <h6 className="xl:mt-4 lg:mt-4 md:mt-4 sm:mt-4 xs:mt-4 max-w-[30rem] hero-section-subtitle">
                {servicedata?.description}
              </h6>
              <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-center xs:justify-center align-middle sm:text-center xs:text-center xl:text-left lg:text-left md:text-left">
                <button
                  onClick={() => setIsModalVisible(true)}
                  className="bg-white flex gap-2 max-w-[186px] items-center text-black-700 hover:text-black-700  sm:px-4 xs:px-4   xl:px-6 lg:px-6 md:px-6  sm:py-2 xs:py-2   xl:py-3 lg:py-3 md:py-3 font-bold rounded-[10px] border-[2px] border-[#eaeaea] transition-transform duration-300 hover:scale-105 xl:mt-6 lg:mt-6 md:mt-4 sm:mt-4 xs:mt-4 cursor-pointer xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[12px] xs:text-[12px] "
                >
                  Get Started
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src={servicedata?.heroImage}
              alt="Cloud Powered, Data Driven & Future Ready!"
              className={`w-full h-auto ${
                servicedata?.heroImageClassName || ""
              }`}
            />
          </div>
        </div>
      </div>
      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default CommonHeroSection;
