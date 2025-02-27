import { useState } from "react";
import Link from "next/link";

export default function FeaturedBlogs({ featureBlogsData }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="  rounded-[15px] bg-white py-6 mt-10">
      <h2 className="mb-3 text-[20px] ml-6 font-semibold">Featured article</h2>

      <div className="space-y-4">
        {featureBlogsData?.map((article: any, index: any) => (
          <div
            key={index}
            className={`relative pl-4 transition-colors duration-200 ${
              activeIndex === index
                ? "border-l-[3.5px] border-[#00A9FF]"
                : "border-l-2 border-transparent "
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <Link
              href={article.slug}
              className={`block ${
                activeIndex === index
                  ? "text-[#00A9FF]"
                  : "text-[#1B1B1F] hover:text-primary/80"
              } xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[16px] font-medium`}
            >
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
