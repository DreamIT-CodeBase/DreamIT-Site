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

          <h2 className="mb-4 mt-4 sm:mb-2 sm:mt-2 xs:mb-2 xs:mt-2 md:mb-4 md:mt-4 lg:mb-4 lg:mt-4 xl:mb-4 xl:mt-4">
            Why Work With Us?{" "}
          </h2>

          <p className="xl:text-20 lg:text-16 md:text-16 sm:text-13 xs:text-13 xl:leading-[26.04px] font-400 text-[#596168] xl:max-w-[32rem]">
            Dream IT Consulting Services fosters a collaborative, growth-driven
            work culture with opportunities to work on advanced technologies. We
            offer continuous upskilling, a supportive environment, and flexible
            work schedules to promote productivity and well-being. Join us for a
            rewarding career that blends innovation, empowerment, and
            professional growth.
          </p>

          <ul className="list-disc pl-5 xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] text-[#596168] mb-4 mt-4 sm:mb-2 sm:mt-2 xs:mb-2 xs:mt-2 md:mb-4 md:mt-4 lg:mb-4 lg:mt-4 xl:mb-4 xl:mt-4 font-bold">
            <li>Continuous upskilling</li>
            <li>A supportive environment</li>
            <li>
              Flexible work schedules to promote productivity and well-being
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default RoomForGrowth;
