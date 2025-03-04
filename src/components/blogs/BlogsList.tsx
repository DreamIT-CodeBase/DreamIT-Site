import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogsList = ({ data, showBackground, backgroundImageUrl }: any) => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-10"
      style={
        showBackground
          ? {
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "unset",
            }
          : {}
      }
    >
      <div className="text-center">
        <div className="flex justify-center text-center mb-4">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-1 xs:py-[4px] rounded-full">
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

        <div
          className="industry-insights-carousel"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            keyboard={{ enabled: true }}
          >
            {data?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Link href={`/blogs/${item.slug}`}>
                  <div key={index} className="industry-insights-container">
                    <img
                      src={item.thumbnailImage[0].publicUrl}
                      alt=""
                      width={"100%"}
                      className="mb-4"
                      loading="lazy"
                    />

                    <div className="relative table-cell bg-[#FFFFFF] mt-4 px-4 py-1 rounded-full border-[2px] border-[#eaeaea]">
                      <span className="text-[#072032]  text-[13px] text-center font-semibold">
                        IT TRENDS
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-3 justify-between mt-4">
                      <h6
                        className="text-left text-[#1c1c1c] font-semibold line-clamp-2"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </h6>
                      <div>
                        <img
                          src="/assets/icons/upward-arrow.svg"
                          alt="upward-icon"
                          className="h-[30px] mr-0 blogs-upward-icon "
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
