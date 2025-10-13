import React, { useState } from "react";
import { AHD_HOST } from "../../utils/constant";

import { Pagination } from "antd";
import Layout from "@/components/layout/Layout";
import BlogsList from "@/components/blogs/BlogsList";
import Link from "next/link";
import OrganizationSEO from "@/components/shared/OrganizationSEO";
const BlogsLi = ({ blogs,pageInfo }: any) => {
  const blogsRecords= blogs
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePaginationChange = (page: any) => {
    setCurrentPage(page);
  };

  const currentPosts = blogsRecords?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <OrganizationSEO />
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
            {currentPosts?.length > 0 ? (
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
  let blogs = [];
  let pageInfo = {};
 
  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          includes: [
            {
              key: "relatedBlogs",
              entity: "pages",
              filter: {
                groups: ["blogs"],
                status: "live",
              },
             },
            
          ],
        },
      }),
    });
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    const data = await pageRes.json();
    pageInfo = data.page || {};
    blogs = data.relatedBlogs || [];
  } catch (error) {
    console.error("Error fetching page info:", error);
  }
  return { props: {  pageInfo, blogs } };
};

export default BlogsLi;
