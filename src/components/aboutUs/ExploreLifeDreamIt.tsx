import { Col, Row } from "antd";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactFormModal from "../shared/ContactFormModal";
import Link from "next/link";

const ExploreLifeDreamIt = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="bg-[#E3F6FF] container relative overflow-hidden">
      <Row 
        align={"middle"} 
        justify={"space-between"} 
        className="py-8 sm:py-12"
      >
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className="content-center z-10 px-4"
        >
          <h2 className="text-black-600 font-bold">
            Explore Life @Dream IT
          </h2>
          <h6 className="max-w-[500px] mt-4">
            Our team blends deep expertise with cutting-edge technology to bring
            your data to life.{" "}
          </h6>

          <div className="mt-6 mb-8 sm:mb-0">
            <Link href={"/career"}>
              <button
                className="bg-[#072032] inline-flex gap-2 items-center text-[18px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white py-3 px-4 font-bold rounded-[7px] border-[1.5px] text-[#FFFFFF]"
              >
                Explore More
                <FaArrowRightLong />
            </button></Link>
          </div>
        </Col>

        <Col
          xl={8}
          lg={8}
          md={12}
          sm={24}
          xs={24}
          className="relative flex justify-center"
        >
          <img
            src="/assets/images/explore-at-dream-it-image.webp"
            alt="Explore Life At Dream IT"
            className="xl:absolute lg:absolute md:absolute xl:h-[400px] lg:h-[300px] md:h-[300px] sm:h-auto xs:h-auto max-h-[300px] sm:max-h-none sm:max-w-full object-contain z-[1]"
          />
        </Col>
      </Row>
      <div>
        <img
          className="absolute xl:top-[-150px] lg:top-[-80px] md:top-[-30px] left-0 explore-dream-it-bg-image"
          src="/assets/images/explore-dream-it-bg-image.webp"
          alt=""
        />
      </div>

      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </section>
  );
};

export default ExploreLifeDreamIt;
