import { Col, Row } from "antd";
import React from "react";

const RoomForGrowth = () => {
  return (
    <div className="container pt-60 pb-60">
      <Row gutter={[24, 24]} align={"middle"} justify={"space-between"}>
        <Col xl={11} lg={12} md={12}>
          <img
            src="/assets/images/room-for-growth-section-image.webp"
            alt="image"
          />
        </Col>
        <Col
          xl={11}
          lg={12}
          md={12}
          className="  xl:text-left lg:text-left md:text-left sm:text-center xs:text-center"
        >
          <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              ROOM FOR GROWTH
            </span>
          </div>

          <h2 className="mb-4 mt-4 sm:mb-2 sm:mt-2 xs:mb-2 xs:mt-2 md:mb-5 md:mt-5 lg:mb-6 lg:mt-6 xl:mb-8 xl:mt-8">
            Why Work with Us?
          </h2>

          <p className="xl:text-20 lg:text-16 md:text-16 sm:text-13 xs:text-13 xl:leading-[26.04px] font-400 text-[#596168] xl:max-w-[32rem]">
            At Dream IT, we empower businesses with cloud data management,
            advanced analytics, and visualization services, driving performance,
            revenue growth, and customer acquisition.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default RoomForGrowth;
