import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const swiperRef = useRef<any>(null);

  const testimonials = [
    {
      quote:
        "We have relied upon and time-tested Dream IT for their integration, expertise, and delivery of high-quality work since 2022. They recently completed the MS Fabric pilot and will continue supporting the business to achieve our long term business goals.",
      author: "John Son",
      position: "Operations Manager of Tesseli",
    },
    {
      quote:
        "We have relied upon and time-tested Dream IT for their integration, expertise, and delivery of high-quality work since 2022. They recently completed the MS Fabric pilot and will continue supporting the business to achieve our long term business goals.",
      author: "Ken Davies",
      position: "Strategic Insights Manager, Uniphar Group",
    },
    {
      quote:
        "Had a great experience with Dream IT to complete a project for Power BI. They took our current excel process and automated a comprehensive dashboard for us that will save us many hours. Fantastic work from their team! Couldn’t be happier!",
      author: "Rikesh Mistry",
      position: "Director of Operations, Meerby",
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="w-full pt-60 pb-60 bg-[#EFF9FF] testimonial-crousal">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center xl:mb-6 lg:mb-6 md:mb-6 sm:mb-4 xs:mb-4">
          <div className="relative inline-block bg-[#FFFFFF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-1 xs:py-[4px] rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              TESTIMONIAL
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className=" text-center xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4 px-2 about-use-section-title">
          What Clients Say About Us
        </h2>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Prev Button */}
          <button
            className="absolute xl:left-[-200px] lg:left-[-100px] md:left-[-100px] sm:left-[120px] xs:left-[70px] xl:top-[35%] lg:top-[35%] md:top-[35%] sm:top-[92%] xs:top-[93%] z-10 testimonial-navigation-arrow"
            aria-label="Previous slide"
            onClick={handlePrev}
          >
            <img
              src="assets/icons/right-arrow.svg"
              alt="left-arrow"
              className="xl:h-[25px] lg:h-[25px] md:h-[25px] sm:h-[14px] xs:h-[14px] -rotate-180"
            />
          </button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            keyboard={{ enabled: true }}
            slidesPerView={1}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="xl:px-12 lg:px-12 md:px-12 sm:px-6 xs:px-6 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-2 xs:pb-4"
                >
                  <div className="flex justify-center xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                    <img
                      src="assets/icons/quote-icons.svg"
                      alt="quote-icon"
                      loading="lazy"
                      className=" xl:h-[35px] lg:h-[35px] md:h-[35px] sm:h-[20px] xs:h-[20px]"
                    />
                  </div>

                  <blockquote className=" text-center xl:text-26 lg:text-26 md:text-26 sm:text-13 xs:text-13 text-gray-800 xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                    {testimonial.quote}
                  </blockquote>

                  <div className="text-center">
                    <cite className="not-italic xl:text-24 lg:text-24 md:text-24 font-semibold sm:text-14 xs:text-14 text-black-100">
                      {testimonial.author}
                    </cite>
                    <p className="text-[#373D3F] xl:text-16 lg:text-16 md:text-16 mt-1 sm:text-13 xs:text-13">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button
            className="absolute xl:right-[-200px] lg:right-[-100px] md:right-[5px] sm:right-[120px] xs:right-[70px]  xl:top-[35%] lg:top-[35%] md:top-[35%] sm:top-[92%] xs:top-[93%] z-10 testimonial-navigation-arrow "
            aria-label="Next slide"
            onClick={handleNext}
          >
            <img
              src="assets/icons/right-arrow.svg"
              alt="right-arrow"
              className="xl:h-[25px] lg:h-[25px] md:h-[25px] sm:h-[14px] xs:h-[14px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
