import "react-responsive-carousel/lib/styles/carousel.min.css";
import CtaButton from "../shared/CtaButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const ServiceDetailsInsights = ({ ourServies }: any) => {
  const data = ourServies;
  const swiperRef = useRef<any>(null);

  return (
    <div>
      <section className="container text-white pat-30 pab-30">
        <div className="mx-auto text-center mb-8">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              {data?.tag}
            </span>
          </div>

          <h1 className=" mb-3 m-auto max-w-[40rem]">{data?.title}</h1>
        </div>
        <div
          className="industry-insights-crousal"
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
              1330: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            keyboard={{ enabled: true }}
          >
            {data?.ourServiesFeatures?.map(
              ({ src, title, subtitle, link }: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="relative xl:min-h-[500px] lg:min-h-[460px] md:min-h-[420px] sm:min-h-[430px] xs:min-h-[400px] flex flex-col text-left gap-3 ml-4 mr-4 border-2 border-[#EAEAEA] rounded-[12px] p-4">
                    <img src={src} alt={title} width={"100%"} loading="lazy" />
                    <h3 className="xl:text-32 md:text-20 text-black-700">
                      {title}
                    </h3>
                    <p className="text-gray-700 overflow-hidden text-ellipsis line-clamp-2">
                      {subtitle}
                    </p>
                    <div className="absolute bottom-5">
                      <CtaButton link={link} title="Explore More" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsInsights;
