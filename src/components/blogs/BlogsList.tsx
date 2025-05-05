import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SearchAndFilter from "./SearchAndFilter";

interface BlogItem {
  slug: string;
  thumbnailImage: { publicUrl: string }[];
  tags?: string[];
  title: string;
}

interface FilterOption {
  id: string;
  name: string;
}

interface BlogsListProps {
  data: BlogItem[];
  showBackground?: boolean;
  backgroundImageUrl?: string;
  showViewButton?: boolean;
  useSwiper?: boolean;
  showSearchAndFilter?: boolean;
}

const BlogsList: React.FC<BlogsListProps> = ({
  data,
  showBackground = false,
  backgroundImageUrl = "",
  showViewButton = false,
  useSwiper = true,
  showSearchAndFilter = false,
}) => {
  const swiperRef = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<BlogItem[]>(data);
  const [industryOptions, setIndustryOptions] = useState<FilterOption[]>([]);
  const [serviceOptions, setServiceOptions] = useState<FilterOption[]>([]);

  useEffect(() => {
    const extractUniqueTagsOfType = (
      data: BlogItem[], 
      categoryTerms: string[]
    ): FilterOption[] => {
      const allMatchingTags: string[] = [];
      
      data.forEach(item => {
        if (item.tags) {
          item.tags.forEach(tag => {
            const matchesCategory = categoryTerms.some(term => 
              tag.toLowerCase().includes(term.toLowerCase())
            );
            if (matchesCategory && !allMatchingTags.includes(tag)) {
              allMatchingTags.push(tag);
            }
          });
        }
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
      
      if (selectedIndustry && industryOptions.length > 0) {
        const industry = industryOptions.find(ind => ind.id === selectedIndustry);
        if (industry && result[0]?.tags) {
          result = result.filter(item => 
            item.tags?.some(tag => tag === industry.name)
          );
        }
      }
      
      if (selectedService && serviceOptions.length > 0) {
        const service = serviceOptions.find(serv => serv.id === selectedService);
        if (service && result[0]?.tags) {
          result = result.filter(item => 
            item.tags?.some(tag => tag === service.name)
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

  const renderBlogItem = (item: BlogItem, index: number) => (
    <Link href={`/blogs/${item?.slug}`} key={index}>
      <div className="industry-insights-container">
        <img
          src={item?.thumbnailImage[0]?.publicUrl}
          alt=""
          width={"100%"}
          className="mb-4 rounded-[18px]"
          loading="lazy"
        />

        <div className="relative table-cell bg-[#FFFFFF] mt-4 px-4 py-1 rounded-full border-[2px] border-[#eaeaea]">
          <span className="text-[#072032] text-[13px] text-center font-semibold">
            IT TRENDS
          </span>
        </div>

        <div className="flex flex-col items-start gap-3 justify-between mt-4">
          <h6
            className="text-left text-[#1c1c1c] font-semibold line-clamp-2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              maxWidth: "400px",
            }}
          >
            {item?.title}
          </h6>
          <div>
            <img
              src="/assets/icons/upward-arrow.svg"
              alt="upward-icon"
              className="h-[30px] mr-0 blogs-upward-icon"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section
      className="container xl:pt-14 lg:pt-14 md:pt-0 sm:pt-5 xs:pt-5 pb-10"
      style={
        showBackground
          ? {
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "unset",
            }
          : {}
      }
    >
      <div className="text-center">
        <div className="flex justify-center text-center  mb-4">
          <div className="relative inline-block text-center bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-1 xs:py-[4px] rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              BLOGS{" "}
            </span>
          </div>
        </div>
        <h2 className="text-center mb-6">
          Future-Focused Insights For Your Industry{" "}
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
            currentPage="blogs"
          />
        )}

        {filteredData.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-700 text-lg">No blogs found</p>
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
                delay: 3000,
                disableOnInteraction: false,
              } : false}
              modules={[Autoplay]}
              keyboard={{ enabled: true }}
            >
              {filteredData.map((item, index) => (
                <SwiperSlide key={index}>
                  {renderBlogItem(item, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            {filteredData.map((item, index) => renderBlogItem(item, index))}
          </div>
        )}

        {showViewButton && (
          <div className="mt-8">
            <Link
              href={"/blogs"}
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

export default BlogsList;