import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const OurServies = ({ data, showTag, showTitle, showDescription }: any) => {
  return (
    <section className="text-white pt-60 pb-60">
      <div className="mx-auto text-center">
        {showTag && (
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              {data?.tag}
            </span>
          </div>
        )}

        {showTitle && <h3 className="mb-3 px-2">{data?.title}</h3>}

        {showDescription && (
          <h6 className="mx-auto md:max-w-[53rem] px-2">{data?.subtitle}</h6>
        )}
      </div>
      <div className="bg-[url('/assets/images/background-stripes.webp')] bg-cover bg-center">
        <div className="services-grid-for-web">
          {data?.ourServiesFeatures.map(
            ({ src, title, link, subtitle }: any) => (
              <div
                className="our-services-container xl:min-h-[370px] lg:min-h-[310px] md:min-h-[300px] relative group overflow-hidden cursor-pointer"
                key={title}
              >
                <div className="transition-transform duration-300 group-hover:translate-y-[-10px]">
                  <img
                    src={src}
                    alt={title}
                    className="w-full transition-transform duration-300 group-hover:transform group-hover:translate-y-[-15px]  "
                  />
                </div>
                <div className="absolute text-[#1c1c1c] bg-white bottom-0 w-full  px-4 py-3 border-2 min-h-[90px]   group-hover:h-auto overflow-hidden transition-all duration-300 border-[#EAEAEA] rounded-[18px] content-center">
                  <div className="flex items-center justify-between gap-4">
                    <h5 className="services-card-title">{title}</h5>
                    <div>
                      <Link
                        href={link}
                        className="bg-[#072032] flex text-white py-3 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"
                      >
                        <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                  <div className="group-hover:block hidden">
                    <h6>{subtitle}</h6>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="services-grid-for-mobile">
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            modules={[Autoplay]}
            keyboard={{ enabled: true }}
          >
            {data?.ourServiesFeatures.map(
              ({ src, title, link, subtitle }: any) => (
                <SwiperSlide key={title}>
                  <div
                    className="our-services-container min-h-[320px] relative group overflow-hidden cursor-pointer"
                    key={title}
                  >
                    <div className="transition-transform duration-300 group-hover:translate-y-[-10px]">
                      <img
                        src={src}
                        alt={title}
                        className="w-full transition-transform duration-300 group-hover:transform group-hover:translate-y-[-15px]  "
                      />
                    </div>
                    <div className="absolute text-[#1c1c1c] bg-white bottom-0 w-full  p-5 border-2 min-h-[90px] group-hover:h-auto overflow-hidden transition-all duration-300 border-[#EAEAEA] rounded-[18px]">
                      <div className="flex items-center justify-between gap-6">
                        <h5 className="services-card-title">{title}</h5>
                        <div>
                          <Link
                            href={link}
                            className="bg-[#072032] flex text-white py-3 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"
                          >
                            <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                      <div className="group-hover:block hidden">
                        <h6>{subtitle}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurServies;
