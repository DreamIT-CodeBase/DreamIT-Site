import { Tag } from "antd";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const IndustryInsights = ({ data }: any) => {
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
    <section
      className="container pt-14 pb-28"
      style={{
        backgroundImage: `url(${data?.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: `${data.backgroundPosition}`,
      }}
    >
      <div className="text-center">
        <div className="flex justify-center text-center mb-6">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] text-center font-bold">
              {data?.tag}
            </span>
          </div>
        </div>
        <h1 className=" max-w-[600px] text-center mb-8 mx-auto">
          {data?.title}
        </h1>

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
            interval={3000000}
            dynamicHeight={false}
          >
            {data.features.map((item: any, index: any) => (
              <div key={index} className="industry-insights-container">
                <img
                  src={item.imageSrc}
                  alt=""
                  width={"100%"}
                  className="mb-4"
                  loading="lazy"
                />
                {data.showTags && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Tag className="bg-[#D6F1FF] border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      Financial Services
                    </Tag>
                    <Tag className="bg-[#D6F1FF] border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      AWS
                    </Tag>
                    <Tag className="bg-[#D6F1FF] border-0 py-1 px-3 text-[16px] font-semibold rounded-2xl">
                      CloudMigrate Pro
                    </Tag>
                  </div>
                )}

                {data.showItTrends && (
                  <div className="relative table-cell bg-[#FFFFFF] mt-4 px-5 py-1 rounded-full border-[2px] border-[#eaeaea]">
                    <span className="text-[#072032] ml-2 text-center font-bold">
                      IT Trends
                    </span>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <h6 className="text-left text-[#1c1c1c] font-semibold">
                    {item.quote}
                  </h6>
                  <img
                    src="/assets/icons/upward-arrow.svg"
                    alt="upward-icon"
                    className="h-[30]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;
