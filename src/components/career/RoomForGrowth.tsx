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
        <Col xl={11} lg={12} md={12}>
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              ROOM FOR GROWTH
            </span>
          </div>

          <h2 className="mb-4 mt-4">Why Work with Us?</h2>

          <p className="xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px] xl:leading-[26.04px] font-400 text-[#596168] xl:max-w-[32rem]">
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
