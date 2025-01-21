import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const caseStudies = [
  {
    img: "/assets/images/caseStudy-image1.png",
    title: "Technologies That Power Our Solutions",
    description:
      "Our team blends deep expertise with cutting-edge technology to bring your data to life.",
  },
  {
    img: "/assets/images/caseStudy-image2.png",
    title: "Innovative Approaches to Challenges",
    description:
      "We employ innovative strategies to overcome the most complex challenges.",
  },
  {
    img: "/assets/images/industryImage1.png",
    title: "Driving Results Through Collaboration",
    description:
      "Collaboration is at the heart of everything we do, leading to remarkable outcomes.",
  },
  {
    img: "/assets/images/industryImage2.png",
    title: "Achieving Milestones with Precision",
    description:
      "Our solutions are designed to help businesses hit their key milestones and achieve precision in every step.",
  },
];

const CaseStudy = () => {
  const [chunkedCaseStudies, setChunkedCaseStudies] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const chunkCaseStudies = () => {
    const chunked: any = [];
    if (isMobile) {
      for (let i = 0; i < caseStudies.length; i += 1) {
        chunked.push(caseStudies.slice(i, i + 1));
      }
    } else {
      for (let i = 0; i < caseStudies.length; i += 2) {
        chunked.push(caseStudies.slice(i, i + 2));
      }
    }
    setChunkedCaseStudies(chunked);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    chunkCaseStudies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <div>
      <section className="bg-[url('/assets/images/case-studt-background.png')] bg-cover bg-center container xl:py-20 lg:py-16 md:py-16 sm:py-8 xs:py-8">
        <div className="mx-auto text-center">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full mb-3">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 w-2 h-2 bg-[#00A9FF] rounded-full"></span>
            <span className="text-[#00A9FF] ml-2 text-center font-bold">
              CASE STUDY
            </span>
          </div>
          <h1 className="text-black-100 md:text-5xl lg:text-46 text-xl font-bold mb-3">
            Your Success is Our Success
          </h1>
          <p className="text-gray-800 lg:text-18 xl:max-w-[1000px] lg:max-w-[800px] mx-auto">
            Every project is a journey, and we love to celebrate the milestones.
            From solving complex problems to achieving groundbreaking results,
            our case studies showcase the transformations we’ve enabled.
          </p>
        </div>

        <div className="case-studies-crousal">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            infiniteLoop={true}
            showArrows={false}
            centerMode={false}
            centerSlidePercentage={50}
            autoPlay={false}
            interval={1500}
            swipeable={true}
            dynamicHeight={false}
          >
            {chunkedCaseStudies.map((chunk: any, index) => (
              <div
                key={index}
                className="flex justify-between space-x-4 px-2 py-4"
              >
                {chunk.map((study: any, i: any) => (
                  <div key={i} className=" flex flex-col lg:p-6 lg:gap-5 xl:gap-5 sm:gap-3 xs:gap-3">
                    <img
                      src={study.img}
                      alt={study.title}
                      className="xl:h-[400px] lg:h-[300px] md:h-[200px]"
                      loading="lazy"
                    />
                    <h5 className="text-black-100 text-left lg:text-34 font-bold max-w-[500px]">
                      {study.title}
                    </h5>
                    <p className="text-gray-800 text-left lg:text-16 max-w-[500px]">
                      {study.description}
                    </p>
                    <button className="flex items-center gap-2 justify-center w-[180px] mt-auto bg-white border-2 border-[#072032] text-[#072032] font-bold px-6 py-2 rounded-[10px]">
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
