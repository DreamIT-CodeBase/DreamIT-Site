import { useState } from "react";
import Link from "next/link";

export default function FeaturedBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = [
    {
      title: "Time Travel in Microsoft Fabric",
      href: "#time-travel",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      href: "#lorem-1",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      href: "#lorem-2",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      href: "#lorem-3",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      href: "#lorem-4",
    },
  ];

  return (
    <div className="  rounded-[15px] bg-white py-6 mt-10">
      <h2 className="mb-3 text-[20px] ml-6 font-semibold">In this article</h2>

      <div className="space-y-4">
        {articles.map((article, index) => (
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
              href={article.href}
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
