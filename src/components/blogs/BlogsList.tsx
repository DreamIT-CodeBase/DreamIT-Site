import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BlogsList = ({ data, showBackground }: any) => {
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
      className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-24"
      style={
        showBackground
          ? {
              backgroundImage: `url(/assets/images/success-stories-bg.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "unset",
            }
          : {}
      }
    >
      <div className="text-center">
        <div className="flex justify-center text-center mb-4">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              BLOGS{" "}
            </span>
          </div>
        </div>
        <h2 className="text-center mb-6">
          Future-Focused Insights For Your Industry
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
            {data?.map((item: any, index: any) => (
              <Link href={`/blogs/${item.slug}`} key={index}>
                <div key={index} className="industry-insights-container">
                  <img
                    src={item.thumbnailImage[0].publicUrl}
                    alt=""
                    width={"100%"}
                    className="mb-4"
                    loading="lazy"
                  />

                  <div className="relative table-cell bg-[#FFFFFF] mt-4 px-4 py-1 rounded-full border-[2px] border-[#eaeaea]">
                    <span className="text-[#072032]  text-center font-semibold">
                      IT TRENDS
                    </span>
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

export default BlogsList;
