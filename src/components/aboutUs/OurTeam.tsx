import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const OurTeam = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const teamData = [
    {
      name: "Anu Kamboj",
      title: "CEO & Co-Founder",
      description: [
        "Ex-Sapient | Ex-Boathouse Digital Marketing Head",
        "11+ yrs in IT & Performance",
        "Marketing roles",
      ],
      backgroundImage: "/assets/images/team-member1.png",
    },
    {
      name: "Rajan Kamboj",
      title: "CTO and Co-Founder",
      description: [
        "Ex-PwC | Ex-UHG | Ex-Cognizant",
        "Azure Cloud Architect",
        "POWER BI Architect",
        "13+ yrs in IT Solutioning & Architecting, DBMS, Analytics solutions to various sectors",
      ],
      backgroundImage: "/assets/images/team-member3.png",
    },
    {
      name: "Devender Arora",
      title: "Head- Delivery",
      description: [
        "Ex - KPMG | Ex-UHG| Ex - Cognizant",
        "14 years of experience in IT | Microsoft Cloud Data Architect | Azure, Fabric, Data Bricks, Big Data Analytic",
      ],
      backgroundImage: "/assets/images/team-member4.png",
    },
    {
      name: "Prateek S Malhan",
      title: "Chief Growth & Strategy Officer",
      description: [
        "Ex-IndusInd | MDI-Gurgaon",
        "Regional Manager",
        "11+ yrs in BFSI & IT with a proven track record in Business expansion & Market penetration",
      ],
      backgroundImage: "/assets/images/team-member2.png",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const updateNavigationState = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateNavigationState);
      updateNavigationState();

      return () => {
        swiperInstance.off("slideChange", updateNavigationState);
      };
    }
  }, []);

  return (
    <div>
      <section className="relative bg-black text-white container pt-60 xl:pb-[70px] lg:pb-[100px] md:pb-[120px] sm:pb-[50px] xs:pb-[40px]">
        <div className=" mx-auto text-center">
          <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              OUR TEAM
            </span>
          </div>

          <h2 className=" mb-3">The Team At The Core</h2>

          <p className="text-gray-800 xl:text-20 lg:text-16 md:text-16 sm:text-[13px] xs:text-[13px] max-w-3xl mx-auto">
            A dynamic group of thinkers, doers and innovators. Our team is
            committed to unlocking new opportunities and achieving excellence
          </p>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={20}
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
          navigation={false}
          modules={[Navigation]}
          keyboard={{ enabled: true }}
          className="xl:mt-8 lg:mt-8 md:mt-8 sm:mt-4 xs:mt-4"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-[467px] overflow-hidden rounded-[20px] bg-[#ECEFF1] transition-all duration-300 hover:bg-zinc-900">
                <div className="absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300">
                  <div
                    style={{
                      backgroundImage: `url(${member.backgroundImage})`,
                    }}
                    className="absolute inset-0 bg-cover bg-top transition-all duration-300 
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-[#072032B2] before:opacity-0 
                  group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                  ></div>

                  <div className="absolute flex justify-between items-center bottom-[30px] left-0 right-0   transition-all duration-300 group-hover:translate-y-[800px] px-6">
                    <div>
                      <h3 className="text-[24px] font-semibold text-white">
                        {member.name}
                      </h3>
                      <span className="text-[#7DC1E9]   font-medium text-[16px]">
                        {member.title}
                      </span>
                    </div>

                    <div>
                      <img
                        className="h-[50px]"
                        src="/assets/icons/linkedin-icon.svg"
                        alt="linkedin-icon"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-[30px] pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between">
                      <h3 className="text-[24px] font-semibold text-white">
                        {member.name}
                      </h3>
                      <img
                        className="h-[50px]"
                        src="/assets/icons/linkedin-icon.svg"
                        alt="linkedin-icon"
                        loading="lazy"
                      />
                    </div>

                    <div className="relative px-5 mb-2">
                      <span className="absolute top-1/2 left-1 transform -translate-y-1/2 w-[10px] h-[10px] bg-[#00A9FF] rounded-full"></span>
                      <span className="text-white text-center font-medium text-[22px]">
                        {member.title}
                      </span>
                    </div>

                    <ul className="text-[18px] text-[#D6F1FF] list-disc pl-6">
                      {member.description.map((point, i) => (
                        <li key={i} className="text-[#FFFFFF]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute left-[50%] translate-x-[-50%] xl:bottom-[20px] lg:bottom-[20px] md:bottom-[40px] sm:bottom-[20px] xs:bottom-[20px] z-[1000] flex justify-center">
          <button
            className={`swiper-prev xl:px-4 xl:py-4 lg:px-4 lg:py-4 md:px-4 md:py-4 sm:px-3 sm:py-3 xs:px-3 xs:py-3 mx-2 rounded-full ${
              isBeginning
                ? "bg-white text-[#596168] border-[1px] border-[#EAEAEA]"
                : "bg-[#072032] text-white"
            }`}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            disabled={isBeginning}
          >
            <FaArrowRightLong className="rotate-180 text-[20px]" />
          </button>
          <button
            className={`swiper-next xl:px-4 xl:py-4 lg:px-4 lg:py-4 md:px-4 md:py-4 sm:px-3 sm:py-3 xs:px-3 xs:py-3 mx-2 rounded-full ${
              isEnd
                ? "bg-white text-[#596168] border-[1px] border-[#EAEAEA]"
                : "bg-[#072032] text-white"
            }`}
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            disabled={isEnd}
          >
            <FaArrowRightLong className="text-[20px]" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
