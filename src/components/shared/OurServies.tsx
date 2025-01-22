import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

const OurServies = ({ data, showTag, showTitle, showDescription }: any) => {
  return (
    <>
      <section className="bg-black text-white xl:py-16 lg:py-16 md:py-16 sm:py-8 xs:py-8">
        <div className="mx-auto text-center">
          {showTag && (
            <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
              <span className="text-[#00A9FF] text-center font-bold ">
                {data?.tag}
              </span>
            </div>
          )}

          {showTitle && (
            <h1 className="mb-3 px-2 max-w-[900px] m-auto">{data?.title}</h1>
          )}

          {showDescription && (
            <h6 className=" mx-auto md:max-w-[46rem] px-2">{data?.subtitle}</h6>
          )}
        </div>
        <div className="bg-[url('/assets/images/background-stripes.png')] bg-cover bg-center">
          <div className="services-grid-for-web">
            {data?.ourServiesFeatures.map(
              ({ src, title, link, subtitle }: any, index: any) => (
                <div className="our-services-container" key={index}>
                  <img src={src} alt={title} width={"100%"} loading="lazy" />

                  <div className="flex flex-col justify-between">
                    <h4 className="  mt-5">{title}</h4>
                    <h6 className="overflow-hidden text-ellipsis line-clamp-3">
                      {subtitle}
                    </h6>
                    <a
                      href={link}
                      className="flex items-center  gap-2 justify-center py-3 px-4 font-bold rounded-[10px] border-[1.5px] border-[#eaeaea] explore-more-btn"
                    >
                      Explore More
                      <img
                        className="h-[12px]"
                        src="/assets/icons/right-arrow-icon.svg"
                        alt="icon"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="services-grid-for-mobile">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              keyboard={{ enabled: true }}
            >
              {data?.ourServiesFeatures.map(
                ({ src, title, subtitle }: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div className="our-services-container">
                      <img
                        src={src}
                        alt={title}
                        width={"100%"}
                        loading="lazy"
                      />

                      <div className="flex flex-col justify-between">
                        <h3 className="xl:text-32 md:text-20  mt-5">{title}</h3>
                        <h6 className="overflow-hidden text-ellipsis line-clamp-2">
                          {subtitle}
                        </h6>
                        <button className="flex items-center  gap-2 justify-center py-2 px-4 font-bold rounded-[10px] border-[1.5px] border-[#eaeaea] explore-more-btn">
                          Explore More
                          <img
                            className="h-[12px]"
                            src="/assets/icons/right-arrow-icon.svg"
                            alt="icon"
                            loading="lazy"
                          />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServies;
