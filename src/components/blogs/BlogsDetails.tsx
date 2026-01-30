import React, { useEffect, useRef } from "react";
import { SectionContent } from "../content";
import styled from "styled-components";
import { Col, Row, Tag } from "antd";
import ShareWithCommunity from "../shared/ShareWithCommunity";
import FeaturedBlogs from "./FeaturedBlogs";
import ShareWithFriends from "../shared/ShareWithFriends";
import AuthorDetails from "../shared/AuthorDetails";
import Link from "next/link";

export const BlogDetails = ({ post, featureBlogsData, showFeaturedBlogs }: any) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const timeToRead =
    post?.metadata?.["case-studies"]?.timeToRead ||
    post?.metadata?.["blogs"]?.timeToRead ||
    "10 min";

  const formattedDate = new Date(post?.updatedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const isCaseStudy = post?.groups?.includes("case-studies");
  const breadcrumbText = isCaseStudy ? "Success Stories" : "Blogs";
  const breadcrumbLink = isCaseStudy ? "/case-studies" : "/blogs";

  useEffect(() => {
    if (!post) return;
    // Small delay to let SectionContent render its nodes
    const timer = setTimeout(() => {
      const root = bodyRef.current;
      if (!root) return;

      // Remove stray <br> that cause spacing
      root.querySelectorAll("br").forEach((b) => b.remove());

      // Remove empty <p> (common with copy-paste exports)
      root.querySelectorAll("p").forEach((p) => {
        if (!p.textContent || p.textContent.trim() === "") p.remove();
      });

      // Assign semantic classes instead of inline styling
      root.querySelectorAll("p").forEach((p) => {
        const text = (p.textContent || "").trim();
        // FAQ pattern Q1:, Q2:, Q3: (case-insensitive)
        if (/^Q\d+[:.]\s*/i.test(text)) {
          p.classList.add("faq-question");
        } else {
          p.classList.add("blog-paragraph");
        }
      });

      // Headings
      root.querySelectorAll("h1").forEach((h) => h.classList.add("blog-h1"));
      root.querySelectorAll("h2").forEach((h) => h.classList.add("blog-h2"));
      root.querySelectorAll("h3").forEach((h) => h.classList.add("blog-h3"));
      root.querySelectorAll("h4, h5, h6").forEach((h) => h.classList.add("blog-h4"));

      // Lists
      root.querySelectorAll("ul, ol").forEach((list) => list.classList.add("blog-list"));
      root.querySelectorAll("li").forEach((li) => li.classList.add("blog-li"));

      // Blockquotes
      root.querySelectorAll("blockquote").forEach((bq) => bq.classList.add("blog-blockquote"));

      // Images
      root.querySelectorAll("img").forEach((img) => img.classList.add("blog-img"));

      // Tables
      root.querySelectorAll("table").forEach((t) => t.classList.add("blog-table"));

      // Strong tags inside paragraphs: make sure they look right
      root.querySelectorAll("p strong, p b").forEach((s) => s.classList.add("blog-strong"));
    }, 40);

    return () => clearTimeout(timer);
  }, [post]);

  return (
    <>
      <TestPageWrapper>
        <div className="container xl:mt-5 lg:mt-5 md:mt-5 sm:mt-4 xs:mt-4 flex items-center">
          <nav className="text-gray-600 text-sm font-medium">
            <Link href="/insights" className="cursor-pointer">
              <span className="text-gray-800 cursor-pointer">Insights</span>
            </Link>
            <span className="mx-2 text-gray-800">{" > "}</span>
            <Link href={breadcrumbLink} className="cursor-pointer">
              <span className="text-gray-700 hover:text-[#00A9FF] transition-colors duration-300 ease-in-out font-bold cursor-pointer">
                {breadcrumbText}
              </span>
            </Link>
            <span className="mx-2 text-gray-800">{" > "}</span>
            <span className="text-gray-700 font-bold">Detail</span>
          </nav>
        </div>

        <div className="container pt-60 pb-60">
          <Row gutter={[16, 16]} align={"top"} justify={"space-between"}>
            <Col xl={15} lg={15} md={24} sm={24} xs={24}>
              <div>
                {post?.tags?.map((tag: any, index: number) => (
                  <Tag
                    key={index}
                    className="font-semibold bg-gradient-to-r from-[#E5F3FB] to-[#EEE6FF] border-none outline-none leading-[16.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] mb-3 rounded-full px-4 py-2"
                  >
                    {tag.toUpperCase()}
                  </Tag>
                ))}

                <h1 className="font-bold xl:leading-[33.6px] lg:leading-[33.6px] md:leading-[33.6px] sm:leading-[28.6px] xs:leading-[28.6px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[20px] xs:text-[20px] mb-2">
                  {post?.title}
                </h1>

                <div className="flex items-center gap-2">
                  <p className="font-bold leading-[33.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-[#596168]">
                    {formattedDate}
                  </p>
                  <span className="text-[#596168]">•</span>
                  <p className="font-bold leading-[16.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-[#596168]">
                    {timeToRead} read
                  </p>
                </div>

                <div>
                  <img
                    src={post?.heroImage?.[0]?.publicUrl}
                    alt="Test Image"
                    className="w-full mt-4"
                  />
                </div>
              </div>

              {/* ==== Scoped wrapper for content generated by SectionContent ==== */}
              <div className="mt-8 blog-body" ref={bodyRef}>
                <SectionContent editor={post?.editor} sections={post?.sections} />
              </div>

              <div>
                <ShareWithFriends />
                <AuthorDetails post={post} />
              </div>
            </Col>

            <Col
              xl={8}
              lg={8}
              md={24}
              sm={24}
              xs={24}
              style={{ position: "sticky", top: "80px", alignSelf: "start" }}
            >
              <ShareWithCommunity />
              {showFeaturedBlogs && <FeaturedBlogs featureBlogsData={featureBlogsData} />}
            </Col>
          </Row>
        </div>
      </TestPageWrapper>

      {/* Scoped CSS (styled-components + style jsx for immediate overrides) */}
      <style jsx>{`
        /* small mobile tweak */
        @media (max-width: 900px) {
          .blog-body {
            padding-right: 0;
          }
        }
      `}</style>
    </>
  );
};
const TestPageWrapper = styled.div`
  /* base blog body typography (inherits site's font-family) */
  .blog-body {
    max-width: 860px;
    font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial;
    color: #222;
    font-size: 18px;
    line-height: 1.6;
  }

  /* Paragraphs */
  .blog-body .blog-paragraph {
    margin: 0 0 16px 0;
    font-weight: 400;
    color: #333;
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: 0.1px;
    /* slightly narrower measure for large screens */
    max-width: 820px;
  }

  /* FAQ questions — reduced weight & size for better balance */
  .blog-body .faq-question {
    margin: 18px 0 8px 0;
    font-weight: 700;        /* was 800 — softer but still emphatic */
    color: #111;
    font-size: 18px;         /* slightly smaller than body heading */
    line-height: 1.25;
  }

  /* Headings use site's font & consistent sizes */
  .blog-body .blog-h1 {
    font-size: 38px;
    font-weight: 800;
    margin: 28px 0 18px 0;
    line-height: 1.12;
    color: #111;
  }

  .blog-body .blog-h2 {
    font-size: 28px;
    font-weight: 750;
    margin: 34px 0 16px 0;
    line-height: 1.18;
    color: #111;
  }

  .blog-body .blog-h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 24px 0 12px 0;
    line-height: 1.2;
    color: #111;
  }

  .blog-body .blog-h4 {
    font-size: 18px;
    font-weight: 700;
    margin: 18px 0 10px 0;
    color: #111;
  }

  /* Lists — improved readability */
  .blog-body .blog-list {
    margin: 12px 0 18px 0;
    padding-left: 36px;         /* more breathing room for bullets */
    list-style-type: disc;
    list-style-position: outside;
  }
  .blog-body .blog-li {
    margin-bottom: 10px;
    font-size: 17.5px;          /* a touch larger for readability */
    line-height: 1.65;
    color: #2f3336;             /* slightly darker for contrast */
    letter-spacing: 0.2px;
  }

  /* Make bullet markers a little more visible without overpowering */
  .blog-body .blog-list li::marker {
    color: #6b7280;
    font-size: 10px;
  }

  /* Blockquote styling */
  .blog-body .blog-blockquote {
    margin: 18px 0;
    padding: 14px 18px;
    border-left: 4px solid #0b61d6;
    background: #f8fafc;
    border-radius: 8px;
    font-style: italic;
    color: #111;
  }

  /* Images */
  .blog-body .blog-img {
    max-width: 100%;
    display: block;
    margin: 22px auto;
    border-radius: 12px;
  }

  /* Tables */
  .blog-body .blog-table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
  }
  .blog-body .blog-table th,
  .blog-body .blog-table td {
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  /* Strong / bold inline */
  .blog-body .blog-strong,
  .blog-body strong {
    font-weight: 700;
    color: #111;
  }

  /* Responsiveness: scale down and left-align on small screens */
  @media (max-width: 900px) {
    .blog-body {
      font-size: 16px;
      line-height: 1.55;
      padding-right: 0;
    }
    .blog-body .faq-question {
      font-size: 16px;
      margin-top: 14px;
    }
    .blog-body .blog-h1 {
      font-size: 30px;
    }
    .blog-body .blog-h2 {
      font-size: 24px;
    }
    .blog-body .blog-h3 {
      font-size: 20px;
    }

    /* left align for mobile for better readability */
    .blog-body .blog-paragraph,
    .blog-body .faq-question,
    .blog-body .blog-list,
    .blog-body .blog-li {
      text-align: left !important;
    }

    .blog-body .blog-list {
      padding-left: 22px;
    }
  }
`;


export default BlogDetails;
