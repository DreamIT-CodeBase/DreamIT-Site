import { Card } from "antd";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

export default function AuthorDetails({ post }: any) {
  const authorName = post?.author?.authorInfo?.name;
  const aboutAuthor = post?.author?.authorInfo?.headline;
  const aboutImage = post?.author?.avatars[0]?.publicUrl ||"/assets/images/author-image.png";
  const aboutLinkedinUrl =
    post?.author?.authorInfo?.linkedinUrl ||
    "https://www.linkedin.com/company/dreamitcs";
  const aboutAuthorDesignation = post?.author?.authorInfo?.designation;

  return (
    <Card className="mt-4 rounded-[10px] py-2">
      <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xs:flex-wrap items-center gap-4">
        <div className="w-20 h-20   flex items-center justify-center">
          <img alt="author" src={aboutImage} />
        </div>
        <div className="w-full flex items-start justify-between ">
          <div>
            <h2 className="text-xl font-semibold text-[#1C1C1C]">
              {authorName ? authorName : " Prateek S Malhan"}
            </h2>
            <p className="text-[#596168] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px]">
              {aboutAuthorDesignation
                ? aboutAuthorDesignation
                : "Chief Growth & Strategy Officer"}{" "}
            </p>
          </div>
          <div>
            <Link href={aboutLinkedinUrl} target="_blank">
              <FaLinkedin className="w-10 h-10 cursor-pointer text-[#0A66C2] " />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="mt-3 text-gray-700 xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] font-[400] max-w-[85%]">
          {aboutAuthor
            ? aboutAuthor
            : "With 11 years in SaaS, I&apos;ve built MillionVerifier and SAAS First.Passionate about SaaS, data, and AI. Let&apos;s connect if you share the same drive for success!"}
        </p>
      </div>
    </Card>
  );
}
