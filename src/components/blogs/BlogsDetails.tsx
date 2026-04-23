import React, { useEffect, useRef } from "react";
import { SectionContent } from "../content";
import styled from "styled-components";
import { Col, Row, Tag } from "antd";

import ShareWithCommunity from "../shared/ShareWithCommunity";
import FeaturedBlogs from "./FeaturedBlogs";
import ShareWithFriends from "../shared/ShareWithFriends";
import AuthorDetails from "../shared/AuthorDetails";
import Link from "next/link";

export const BlogDetails = ({
  post,
  featureBlogsData,
  showFeaturedBlogs,
}: any) => {
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

  /* ✅ FIX BLOG BODY STRUCTURE */
  useEffect(() => {
    if (!post) return;

    const timer = setTimeout(() => {
      const root = bodyRef.current;
      if (!root) return;

      /* ✅ MOST IMPORTANT FIX:
         Convert all H1 inside blog body → H2 */
      root.querySelectorAll("h1").forEach((h1) => {
        const h2 = document.createElement("h2");
        h2.innerHTML = h1.innerHTML;
        h1.replaceWith(h2);
      });

      /* ✅ Remove ONLY truly empty paragraphs */
      root.querySelectorAll("p").forEach((p) => {
        const hasImage = p.querySelector("img");
        const hasText = p.textContent?.trim();

        if (!hasText && !hasImage) {
          p.remove();
        }
      });

      /* ✅ Paragraph + FAQ styling */
      root.querySelectorAll("p").forEach((p) => {
        const text = (p.textContent || "").trim();

        if (/^Q\d+[:.]\s*/i.test(text)) {
          p.classList.add("faq-question");
        } else {
          p.classList.add("blog-paragraph");
        }
      });

      /* Headings */
      root.querySelectorAll("h2").forEach((h) => h.classList.add("blog-h2"));
      root.querySelectorAll("h3").forEach((h) => h.classList.add("blog-h3"));

      /* Lists */
      root.querySelectorAll("ul, ol").forEach((list) =>
        list.classList.add("blog-list")
      );

      root.querySelectorAll("li").forEach((li) =>
        li.classList.add("blog-li")
      );

      /* Images */
      root.querySelectorAll("img").forEach((img) => {
        img.classList.add("blog-img");

        /* Ensure wrapper stays visible */
        const parent = img.closest("p");
        if (parent) parent.style.display = "block";
      });

      /* Tables */
      root.querySelectorAll("table").forEach((t) =>
        t.classList.add("blog-table")
      );

      /* Bold text */
      root.querySelectorAll("strong, b").forEach((s) =>
        s.classList.add("blog-strong")
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [post]);

  return (
    <Wrapper>
      {/* Breadcrumb */}
      <div className="container flex items-center mt-5">
        <nav className="text-gray-600 text-sm font-medium">
          <Link href="/insights">
            <span className="text-gray-800 cursor-pointer">Insights</span>
          </Link>

          <span className="mx-2">{">"}</span>

          <Link href={breadcrumbLink}>
            <span className="font-bold cursor-pointer hover:text-[#00A9FF]">
              {breadcrumbText}
            </span>
          </Link>

          <span className="mx-2">{">"}</span>
          <span className="font-bold text-gray-700">Detail</span>
        </nav>
      </div>

      {/* Main Blog Layout */}
      <div className="container pt-14 pb-14">
        <Row gutter={[20, 20]} justify="space-between">
          {/* LEFT CONTENT */}
          <Col xl={15} lg={15} md={24} sm={24} xs={24}>
            {/* Tags */}
            <div>
              {post?.tags?.map((tag: any, index: number) => (
                <Tag key={index} className="tag-pill">
                  {tag.toUpperCase()}
                </Tag>
              ))}

              {/* Title */}
              <h1 className="main-title">{post?.title}</h1>

              {/* Meta */}
              <div className="meta-row">
                <p>{formattedDate}</p>
                <span>•</span>
                <p>{timeToRead} read</p>
              </div>

              {/* Hero Image */}
              {post?.heroImage?.[0]?.publicUrl && (
                <img
                  src={post.heroImage[0].publicUrl}
                  alt="Blog Hero"
                  className="hero-img"
                />
              )}
            </div>

            {/* Blog Body */}
            <div ref={bodyRef} className="blog-body mt-10">
              <SectionContent
                editor={post?.editor}
                sections={post?.sections}
              />
            </div>

            {/* Footer */}
            <ShareWithFriends />
            <AuthorDetails post={post} />
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col
            xl={8}
            lg={8}
            md={24}
            sm={24}
            xs={24}
            style={{ position: "sticky", top: "90px", alignSelf: "start" }}
          >
            <ShareWithCommunity />
            {showFeaturedBlogs && (
              <FeaturedBlogs featureBlogsData={featureBlogsData} />
            )}
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

/* ==============================
   STYLING (Professional Typography)
   ============================== */

const Wrapper = styled.div`
  .tag-pill {
    font-weight: 600;
    border-radius: 999px;
    padding: 6px 14px;
    background: linear-gradient(to right, #e5f3fb, #eee6ff);
    border: none;
    margin-bottom: 14px;
  }

  .main-title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.25;
  }

  .meta-row {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #596168;
    margin-bottom: 18px;
  }

  .hero-img {
    width: 100%;
    border-radius: 14px;
    margin-top: 18px;
  }

  /* BLOG BODY */
  .blog-body {
    font-size: 18px;
    line-height: 1.65;
    color: #222;
  }

  .blog-paragraph {
    margin-bottom: 16px;
    text-align: justify;
    color: #333;
  }

  /* FAQ Question */
  .faq-question {
    font-weight: 650;
    margin-top: 22px;
    margin-bottom: 8px;
    color: #111;
  }

  /* Headings */
  .blog-h2 {
    font-size: 28px;
    font-weight: 750;
    margin: 34px 0 14px;
  }

  .blog-h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 26px 0 12px;
  }

  /* Lists */
  .blog-list {
    padding-left: 32px;
    margin: 16px 0;
  }

  .blog-body ul.blog-list,
  .blog-body .ql-editor ul {
    list-style: disc !important;
    list-style-position: outside;
  }

  .blog-body ol.blog-list {
    list-style: decimal !important;
    list-style-position: outside;
  }

  .blog-body .ql-editor ol {
    list-style: none !important;
    list-style-position: outside;
  }

  .blog-body ul.blog-list ul,
  .blog-body .ql-editor ul ul {
    list-style-type: circle !important;
  }

  .blog-body ul.blog-list ul ul,
  .blog-body .ql-editor ul ul ul {
    list-style-type: square !important;
  }

  .blog-li {
    display: list-item !important;
    padding-left: 0 !important;
    margin-bottom: 10px;
    line-height: 1.6;
    color: #2f3336;
    list-style-position: outside;
  }

  .blog-body .blog-li::before {
    content: none !important;
    display: none !important;
    width: 0 !important;
    margin: 0 !important;
  }

  .blog-body .ql-editor li[data-list="bullet"] {
    display: block !important;
    list-style: none !important;
    color: #2f3336;
    position: relative;
    padding-left: 1.4em !important;
  }

  .blog-body .ql-editor li[data-list="bullet"]::before {
    content: "•" !important;
    display: inline-block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 1em !important;
    margin: 0 !important;
    color: #000 !important;
    font-size: 1.1em;
    line-height: 1.6;
    text-align: left;
  }

  .blog-body .ql-editor li[data-list="ordered"] {
    display: list-item !important;
    list-style-type: decimal !important;
  }

  .blog-body .ql-editor li[data-list="ordered"]::before {
    content: none !important;
    display: none !important;
  }

  /* Images */
  .blog-img {
    display: block;
    max-width: 100%;
    margin: 26px auto;
    border-radius: 12px;
  }

  /* Tables */
  .blog-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  .blog-table td,
  .blog-table th {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 10px 12px;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .blog-body {
      font-size: 16px;
      line-height: 1.55;
    }

    .blog-paragraph {
      text-align: left;
    }

    .main-title {
      font-size: 20px;
      line-height: 1.25;
    }
  }
`;

export default BlogDetails;
