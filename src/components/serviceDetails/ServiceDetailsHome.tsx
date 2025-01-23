import { Row } from "antd";
import React, { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceDetailsHome = ({ servicedata }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="bg-[url('/assets/images/service-details-background-image.webp')] bg-cover bg-bottom  container w-full pt-120 pb-60 xl:h-[450px] lg:h-[450px] md:h-[300px] sm:h-[300px]">
        <Row align={"middle"} justify={"center"} className="flex-col gap-8">
          <h1 className=" text-white text-center ">{servicedata?.title}</h1>
          <h6 className="font-medium text-white text-center ">
            {servicedata?.description}
          </h6>
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-white flex gap-2 max-w-[186px] items-center text-black-700 hover:text-black-700 py-3 text-[18px] px-6 font-bold rounded-[10px] border-[2px] border-[#eaeaea] transition-transform duration-300 hover:scale-105 "
          >
            Get Started
            <FaArrowRightLong />
          </button>
        </Row>
      </div>

      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default ServiceDetailsHome;
