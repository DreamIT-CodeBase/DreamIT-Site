import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const ExploreLifeDreamIt = () => {
  return (
    <section className="bg-[#E3F6FF] container relative">
      <Row align={"middle"} justify={"space-between"} className=" ">
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          className="content-center z-[1000]"
        >
          <h2 className=" text-black-600 font-bold sm:mt-5 xs:mt-5">
            Explore Life @Dream IT
          </h2>
          <h6 className="max-w-[580px] mt-4">
            Our team blends deep expertise with cutting-edge technology to bring
            your data to life.{" "}
          </h6>

          <div className="mt-6">
            <Link
              href="/about-us"
              className="bg-[#072032] text-[16px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white   py-2.5 px-4 font-bold rounded-[10px] border-[1.5px]  "
            >
              Explore More
            </Link>
          </div>
        </Col>

        <Col
          xl={8}
          lg={8}
          md={12}
          sm={24}
          className="relative xl:h-[400px] lg:h-[300px] md:h-[300px] sm:h-[320px]"
        >
          <img
            src="/assets/images/explore-at-dream-it-image.webp"
            alt="Explore Life At Dream IT"
            className="xl:absolute lg:absolute md:absolute   xl:h-[400px] xl:mt-0 lg:mt-0 md:mt-0 sm:mt-4 lg:h-[300px] md:h-[300px] sm:h-[300px] z-[1]"
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
    </section>
  );
};

export default ExploreLifeDreamIt;
