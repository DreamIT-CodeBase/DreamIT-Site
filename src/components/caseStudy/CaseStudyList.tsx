import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SearchAndFilter from "../blogs/SearchAndFilter";

interface CaseStudyItem {
  slug: string;
  thumbnailImage: { publicUrl: string }[];
  tags: string[];
  title: string;
}

interface FilterOption {
  id: string;
  name: string;
}

interface CaseStudyListProps {
  data: CaseStudyItem[];
  showViewButton?: boolean;
  useSwiper?: boolean;
  showSearchAndFilter?: boolean;
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ 
  data, 
  showViewButton = false, 
  showSearchAndFilter = false,
  useSwiper = true 
}) => {
  const swiperRef = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<CaseStudyItem[]>(data);
  const [industryOptions, setIndustryOptions] = useState<FilterOption[]>([]);
  const [serviceOptions, setServiceOptions] = useState<FilterOption[]>([]);

  useEffect(() => {
    const extractUniqueTagsOfType = (
      data: CaseStudyItem[], 
      categoryTerms: string[]
    ): FilterOption[] => {
      const allMatchingTags: string[] = [];
      
      data.forEach(item => {
        item.tags.forEach(tag => {
          const matchesCategory = categoryTerms.some(term => 
            tag.toLowerCase().includes(term.toLowerCase())
          );
          if (matchesCategory && !allMatchingTags.includes(tag)) {
            allMatchingTags.push(tag);
          }
        });
      });
      
      return allMatchingTags.map((tag, index) => ({
        id: (index + 1).toString(),
        name: tag
      }));
    };

    const industryTerms = [
      "Healthcare", "Pharmaceuticals", "Retail", "Distribution", 
      "Energy", "Resources", "Travel", "Hospitality", 
      "Consumer", "Goods", "Technology", "AI", 
      "Automotive", "Real Estate", "Logistics"
    ];

    const serviceTerms = [
      "Cloud", "Data", "Digital", "Transformation", 
      "Enterprise", "Resource", "Marketing", "Business"
    ];

    setIndustryOptions(extractUniqueTagsOfType(data, industryTerms));
    setServiceOptions(extractUniqueTagsOfType(data, serviceTerms));
  }, [data]);

  useEffect(() => {
    const filterData = () => {
      let result = [...data];
      
      if (searchQuery && searchQuery.trim() !== '') {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        result = result.filter(item => 
          item.title.toLowerCase().includes(normalizedQuery)
        );
      }
      
      if (selectedIndustry) {
        const industry = industryOptions.find(ind => ind.id === selectedIndustry);
        if (industry) {
          result = result.filter(item => 
            item.tags.some(tag => tag === industry.name)
          );
        }
      }
      
      if (selectedService) {
        const service = serviceOptions.find(serv => serv.id === selectedService);
        if (service) {
          result = result.filter(item => 
            item.tags.some(tag => tag === service.name)
          );
        }
      }
      
      setFilteredData(result);
    };

    filterData();
  }, [data, searchQuery, selectedIndustry, selectedService, industryOptions, serviceOptions]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type: string, value: string) => {
    if (type === "industry") {
      setSelectedIndustry(value || null);
    } else if (type === "service") {
      setSelectedService(value || null);
    }
  };

  const handleClearAllFilters = () => {
    setSearchQuery("");
    setSelectedIndustry(null);
    setSelectedService(null);
  };

  const renderCaseStudyItem = (item: CaseStudyItem, index: number) => (
    <Link href={`/case-studies/${item?.slug}`} key={index}>
      <div className="industry-insights-container">
        <img
          src={item?.thumbnailImage[0]?.publicUrl}
          alt=""
          width={"100%"}
          className="mb-4"
          loading="lazy"
        />
        <div className="flex flex-wrap gap-3 mb-3">
          {item?.tags.map((tag) => (
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
              className="h-[30px] blogs-upward-icon mr-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-12 ">
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
        
        {showSearchAndFilter && (
        <SearchAndFilter
          industries={industryOptions}
          services={serviceOptions}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onClearAllFilters={handleClearAllFilters}
          searchQuery={searchQuery}
          selectedIndustry={selectedIndustry}
          selectedService={selectedService}
          currentPage="case-studies"
        />
        )}

        {filteredData.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-700 text-lg">No case studies found</p>
          </div>
        ) : useSwiper ? (
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
              loop={filteredData.length > 3}
              autoplay={filteredData.length > 1 ? {
                delay: 3500,
                disableOnInteraction: false,
              } : false}
              modules={[Autoplay]}
              keyboard={{ enabled: true }}
            >
              {filteredData.map((item, index) => (
                <SwiperSlide key={index}>
                  {renderCaseStudyItem(item, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            {filteredData.map((item, index) => renderCaseStudyItem(item, index))}
          </div>
        )}
        
        {showViewButton && (
          <div className="mt-8">
            <Link
              href={"/case-studies"}
              className="bg-[#072032] text-white py-3 px-6 sm:px-8 text-sm sm:text-[12px] md:text-lg lg:text-xl font-bold rounded-lg transition-transform duration-300 hover:scale-105"   
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyList;