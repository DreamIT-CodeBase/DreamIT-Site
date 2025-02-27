import { Tag } from "antd";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CaseStudyList = ({ data }: any) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      setCenterSlidePercentage(window.innerWidth < 770 ? 100 : 33.33);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-24">
      <div className="text-center">
        <div className="flex justify-center text-center mb-4">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              SUCCESS STORIES
            </span>
          </div>
        </div>
        <h2 className="text-center mb-6">
          Real Results, Real Impact: This Is How We Drive Success
        </h2>

        {/* <p className="text-gray-800 mb-6 xl:text-20 lg:text-16 md:text-16 sm:text-[14px] xs:text-[14px] max-w-3xl mx-auto">
          {data?.description}
        </p> */}

        <div className="industry-insights-crousal">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            infiniteLoop={true}
            showArrows={false}
            centerMode={true}
            centerSlidePercentage={centerSlidePercentage}
            autoPlay={true}
            interval={5000}
            dynamicHeight={false}
          >
            {data.map((item: any, index: any) => (
              <Link href={`/case-studies/${item.slug}`} key={index}>
                <div key={index} className="industry-insights-container">
                  <img
                    src={item.thumbnailImage[0].publicUrl}
                    alt=""
                    width={"100%"}
                    className="mb-4"
                    loading="lazy"
                  />
                  <div className="flex flex-wrap gap-3 mb-3">
                    <Tag className=" bg-[#D6F1FF] border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      Financial Services
                    </Tag>
                    <Tag className="bg-[#D6F1FF]  border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      AWS
                    </Tag>
                    <Tag className="bg-[#D6F1FF]  border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      CloudMigrate Pro
                    </Tag>
                  </div>

                  <div className="flex flex-col items-start gap-3 justify-between mt-4">
                    <h6 className="text-left text-[#1c1c1c] font-semibold  ">
                      {item.title}
                    </h6>
                    <div>
                      <img
                        src="/assets/icons/upward-arrow.svg"
                        alt="upward-icon"
                        className="h-[30px] mr-0 "
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyList;
