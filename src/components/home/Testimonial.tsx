import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "The team at Dream IT helped us transform our data into clear, impactful visuals that have revolutionized our decision-making process. Their expertise and commitment to our success made all the difference.",
      author: "John Son",
      position: "Operations Manager of Tesseli",
    },
    // {
    //   quote:
    //     "The team at [Your Company] helped us transform our data into clear, impactful visuals that have revolutionized our decision-making process. Their expertise and commitment to our success made all the difference.",
    //   author: "Sarah Miller",
    //   position: "CEO of TechCorp",
    // },
    // {
    //   quote:
    //     "The team at [Your Company] helped us transform our data into clear, impactful visuals that have revolutionized our decision-making process. Their expertise and commitment to our success made all the difference.",
    //   author: "Michael Chang",
    //   position: "Director of Analytics at DataFlow",
    // },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <section className="w-full pt-60 pb-60  bg-[#EFF9FF]">
      <div className="conainer mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center xl:mb-6 lg:mb-6 md:mb-6 sm:mb-4 xs:mb-4">
          <div className="relative inline-block bg-[#FFFFFF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[4px] rounded-full ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              TESTIMONIAL
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className=" text-center xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4 px-2 about-use-section-title">
          What clients say about us
        </h2>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <button
            className="absolute xl:left-[-200px] lg:left-[-100px] md:left-[-100px] sm:left-[-10px] xs:left-[-10px] top-[35%] z-10"
            aria-label="Previous slide"
            onClick={handlePrev}
          >
            <img
              src="assets/icons/right-arrow.svg"
              loading="lazy"
              alt="left-arrow"
              className="xl:h-[25px] lg:h-[25px] md:h-[25px] sm:h-[14px] xs:h-[14px] -rotate-180"
            />
          </button>
          <Carousel
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            showArrows={false}
            autoPlay={true}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="xl:px-12 lg:px-12 md:px-12 sm:px-6 xs:px-6 xl:pb-12 lg:pb-12 md:pb-12 sm:pb-2 xs:pb-4"
              >
                <div className="flex justify-center xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
                  <img
                    src="assets/icons/quote-icons.svg"
                    alt="quote-icon"
                    loading="lazy"
                    className=" xl:h-[35px] lg:h-[35px] md:h-[35px] sm:h-[20px] xs:h-[20px]"
                  />
                </div>

                <blockquote className="xl:text-26 lg:text-26 md:text-26 sm:text-13 xs:text-13 text-gray-800 xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4">
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
            ))}
          </Carousel>

          <button
            className="absolute xl:right-[-200px] lg:right-[-100px] md:right-[5px] sm:right-[-5px] xs:right-[-5px] top-[35%] z-10  "
            aria-label="Previous slide"
            onClick={handleNext}
          >
            <img
              src="assets/icons/right-arrow.svg"
              alt="right-arrow"
              loading="lazy"
              className="xl:h-[25px] lg:h-[25px] md:h-[25px] sm:h-[14px] xs:h-[14px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
