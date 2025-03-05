import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FeaturedBlogs({ featureBlogsData }: any) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();

  return ( 
    <div className="rounded-[15px] bg-white py-6 mt-10 min-h-[200px] max-h-[300px] overflow-y-auto featured-blogs-scrollbar">
      <h2 className="mb-3 text-[20px] ml-6 font-semibold">Featured article</h2>

      <div className="space-y-4">
        {featureBlogsData?.map((article: any, index: any) => {
          const isActive = router.asPath === article.slug || activeIndex === index;

          return (
            <div
              key={index}
              className={`relative pl-4 transition-colors duration-200 ${
                isActive
                  ? "border-l-[3.5px] border-[#00A9FF]"
                  : "border-l-2 border-transparent"
              }`}
              onMouseEnter={() => activeIndex === -1 && setActiveIndex(index)}
              onMouseLeave={() => activeIndex === -1 && setActiveIndex(-1)}
            >
              <Link
                href={article.slug}
                className={`block ${
                  isActive
                    ? "text-[#00A9FF]"
                    : "text-[#1B1B1F] hover:text-primary/80"
                } xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[16px] font-medium`}
                onClick={() => setActiveIndex(index)}
              >
                {article.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
