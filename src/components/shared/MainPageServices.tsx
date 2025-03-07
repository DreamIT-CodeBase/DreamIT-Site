import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const MainPageServices = ({
  data,
  showTag,
  showTitle,
  showDescription,
}: any) => {
  return (
    <section className=" text-white pt-60 pb-60">
      <div className="mx-auto text-center">
        {showTag && (
          <div className="relative inline-flex justify-center align-middle bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-2 rounded-full xl:mb-[20px] lg:mb-[20px] md:mb-[20px] sm:mb-[12px] xs:mb-[12px]">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] text-center font-bold mb-0">
              {data.tag}
            </span>
          </div>
        )}

        {showTitle && (
          <h3 className="mb-3 px-2 our-services-title">{data?.title}</h3>
        )}

        {showDescription && (
          <h6 className="mx-auto md:max-w-[53rem] px-2 text-[#596168]">
            {data?.subtitle}
          </h6>
        )}
      </div>
      <div className="bg-[url('/assets/images/background-stripes.webp')] bg-cover bg-center">
        <div className="main-services-grid-for-web">
          {data?.ourServiesFeatures.map(
            ({ src, title, link, subtitle }: any) => (
              <div
                className="our-services-container xl:min-h-[370px] lg:min-h-[310px] md:min-h-[300px] sm:min-h-[300px] xs:min-h-[300px] relative group overflow-hidden cursor-pointer"
                key={title}
              >
                <div className="transition-transform duration-1000 ease-out group-hover:translate-y-[-10px]">
                  <img
                    src={src}
                    alt={title}
                    className="w-full transition-transform duration-1000 ease-out group-hover:transform group-hover:translate-y-[-15px]"
                  />
                </div>
                <div className="absolute text-[#1c1c1c] bg-white bottom-0 w-full px-4 py-3 border-2 min-h-[90px] group-hover:h-auto overflow-hidden transition-all duration-1000 ease-out border-[#EAEAEA] rounded-[18px] content-center">
                  <div className="flex items-center justify-between gap-4">
                    <h5 className="services-card-title">{title}</h5>
                    <div>
                      <Link
                        href={link}
                        className="bg-[#072032] flex text-white py-3 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-1000 ease-out hover:scale-110"
                      >
                        <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                  <div className="group-hover:opacity-100 group-hover:max-h-40 opacity-0 max-h-0 overflow-hidden transition-all duration-1000 ease-out">
                    <h6>{subtitle}</h6>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPageServices;
