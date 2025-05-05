import React, { useState, useEffect } from "react";
import { AHD_HOST, PREVIEW } from "../../utils/constant";

import { Pagination } from "antd";
import Layout from "@/components/layout/Layout";
import BlogsList from "@/components/blogs/BlogsList";
import Link from "next/link";

const BlogsLi = ({ blogs,pageInfo }: any) => {
  const [blogsRecords, setBlogsRecords] = useState(() => blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetcher = async () => {
      try {
        const resOfBlogs = await fetch(
          `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
        );

        if (!resOfBlogs.ok) {
          throw new Error(`Failed to fetch blogs: ${resOfBlogs.statusText}`);
        }

        const blogs = await resOfBlogs.json();
        setBlogsRecords(blogs?.rows || []);
      } catch (error: any) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      }
    };

    const mode = new URL(window.location.href).searchParams.get("mode");
    if (mode === PREVIEW) {
      fetcher();
    }
  }, []);

  const handlePaginationChange = (page: any) => {
    setCurrentPage(page);
  };

  const currentPosts = blogsRecords?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Layout pageInfo={pageInfo}>
        <div className="w-full">
        <div className="container xl:mt-5 lg:mt-5 md:mt-5 sm:mt-4 xs:mt-4 flex items-center">
            <nav className="text-gray-600 text-sm font-medium">
            <Link href="/insights" className="cursor-pointer">
              <span className="text-gray-800 cursor-pointer">
                Insights
              </span>
              </Link>
              <span className="mx-2 text-gray-800">{" > "}</span>
              <span className="text-gray-700 font-bold">Blogs</span>
            </nav>
          </div>
          
          <div>
            {error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : currentPosts?.length > 0 ? (
              <BlogsList
                data={currentPosts}
                showBackground={true}
                showViewButton={false}
                useSwiper={false}
                showSearchAndFilter={true}
              />
            ) : (
              <p>No blog posts found</p>
            )}

            <div className="mt-0 mb-4  flex justify-center">
              <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={blogsRecords?.length}
                onChange={handlePaginationChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const pageSlug = "website-blogs";
  let faqs = [];
  let blogs = [];
  let pageInfo = {};
  let error = null;

  try {
    const resFaqs = await fetch(
      `${AHD_HOST}/faq?filter%5Blanguage%5D=&filter%5Bslugs%5D=${pageSlug}&filter%5Btags%5D=&orderBy=&limit=50&offset=0`
    );

    if (!resFaqs.ok) {
      throw new Error(`Failed to fetch FAQs: ${resFaqs.statusText}`);
    }

    faqs = await resFaqs.json();

    const resOfBlogs = await fetch(
      `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
    );

    if (!resOfBlogs.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfBlogs.statusText}`);
    }

    const blogsData = await resOfBlogs?.json();
    blogs = blogsData?.rows || [];

    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);

    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
    }

    pageInfo = await pageRes?.json();
  } catch (ex: any) {
    console.error("Error in getStaticProps:", ex);
    error = ex.message;
  }

  return { props: { faqs, pageInfo, blogs, error } };
};

export default BlogsLi;
