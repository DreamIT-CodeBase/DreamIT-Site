import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CaseStudyList = ({ data }: any) => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-12 bg-[#F9FDFF]">
      <div className="text-center">
        <div className="flex justify-center text-center mb-4">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              SUCCESS STORIES
            </span>
          </div>
        </div>
        <h2 className="text-center mb-6">
          Real Results, Real Impact: This Is How We Drive Success{" "}
        </h2>

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
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            keyboard={{ enabled: true }}
          >
            {data.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Link href={`/case-studies/${item?.slug}`}>
                  <div className="industry-insights-container">
                    <img
                      src={item?.thumbnailImage[0]?.publicUrl}
                      alt=""
                      width={"100%"}
                      className="mb-4"
                      loading="lazy"
                    />
                    <div className="flex flex-wrap gap-3 mb-3">
                      {item?.tags.map((tag: any) => (
                        <span
                          key={tag}
                          className="bg-gradient-to-r from-[#E5F3FB] to-[#EEE6FF] py-1 px-3 xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] xs:text-[12px] font-semibold rounded-2xl text-left"
                        >
                          {tag?.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-3 justify-between mt-4 ">
                      <h6
                        className="text-left text-[#1c1c1c] font-semibold line-clamp-2"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          maxWidth:"400px"

                        }}
                      >
                        {item?.title}
                      </h6>

                      <div>
                        <img
                          src="/assets/icons/upward-arrow.svg"
                          alt="upward-icon"
                          className="h-[30px] blogs-upward-icon mr-0  "
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

export default CaseStudyList;
