import React, { useState, useEffect } from "react";
import Link from "next/link";

const SearchAndFilter: React.FC<any> = ({
  industries,
  services,
  onSearch,
  onFilterChange,
  onClearAllFilters,
  searchQuery,
  selectedIndustry,
  selectedService,
  currentPage = "blogs",
}) => {
  const [activeFilters, setActiveFilters] = useState<any[]>([]);

  useEffect(() => {
    const newActiveFilters: any[] = [];

    if (selectedIndustry) {
      const industry = industries.find(
        (ind: any) => ind.id === selectedIndustry
      );
      if (industry) {
        newActiveFilters.push({
          type: "industry",
          value: selectedIndustry,
          label: industry.name,
        });
      }
    }

    if (selectedService) {
      const service = services.find((serv: any) => serv.id === selectedService);
      if (service) {
        newActiveFilters.push({
          type: "service",
          value: selectedService,
          label: service.name,
        });
      }
    }

    setActiveFilters(newActiveFilters);
  }, [selectedIndustry, selectedService, industries, services]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("industry", e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("service", e.target.value);
  };

  const removeFilter = (type: any, value: any) => {
    onFilterChange(type, "");
  };

  const renderConditionalLink = () => {
    if (currentPage === "blogs") {
      return (
        <Link
          href="/case-studies"
          className="ml-auto text-[#00A9FF] hover:none"
        >
          Go to Success Stories
        </Link>
      );
    } else {
      return (
        <Link href="/blogs" className="ml-auto text-[#00A9FF] hover:none">
          Go to Blogs
        </Link>
      );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full py-3 pl-10 pr-4 bg-white text-gray-700 border-b-0 focus:outline-none"
          />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7DC1E9] to-[#854CFF]"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex gap-2">
          <div className="relative xl:w-56 lg:w-56 md:w-56 sm:w-[50%] xs:w-[50%]">
            <select
              value={selectedIndustry || ""}
              onChange={handleIndustryChange}
              className="w-full appearance-none bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:border-gray-700"
            >
              <option value="">Industry</option>
              {industries?.map((industry: any) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="relative xl:w-56 lg:w-56 md:w-56 sm:w-[50%] xs:w-[50%]">
            <select
              value={selectedService || ""}
              onChange={handleServiceChange}
              className="w-full appearance-none bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:border-gray-700"
            >
              <option value="">Service</option>
              {services?.map((service: any) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {activeFilters.length > 0 && (
          <button
            onClick={onClearAllFilters}
            className="flex items-center text-gray-900 hover:text-gray-700 transition duration-200"
          >
            Clear All Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {renderConditionalLink()}
      </div>

      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center bg-gradient-to-r from-[#cbe4f3] to-[#dacff3] text-[#072032] px-4 py-1 rounded-full"
          >
            <button
              onClick={() => removeFilter(filter.type, filter.value)}
              className="mr-2 text-[#072032]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="font-semibold uppercase xl:text-sm lg:text-sm md:text-sm sm:text-[12px] xs:text-[12px]">
              {filter.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
