import React from "react";
import { SectionContent } from "../content";
import styled from "styled-components";
import { Col, Row, Tag } from "antd";
import ShareWithCommunity from "../shared/ShareWithCommunity";
import FeaturedBlogs from "./FeaturedBlogs";
import ShareWithFriends from "../shared/ShareWithFriends";
import AuthorDetails from "../shared/AuthorDetails";
import Link from "next/link";

export const BlogDetails = ({ post, featureBlogsData,showFeaturedBlogs }: any) => {
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

  // console.log(post?.updatedAt)
  // console.log(formattedDate)
  // console.log(post)

  return (
    <>
      <TestPageWrapper>
      <div className="container xl:mt-5 lg:mt-5 md:mt-5 sm:mt-4 xs:mt-4 flex items-center">
          <nav className="text-gray-600 text-sm font-medium">
            <Link href="/insights" className="cursor-pointer">
            <span className="text-gray-800 cursor-pointer">
              Insights
            </span></Link>
            <span className="mx-2 text-gray-800">{" > "}</span>
            <Link href={breadcrumbLink} className="cursor-pointer">
              <span
                className="text-gray-700 hover:text-[#00A9FF] transition-colors duration-300 ease-in-out font-bold cursor-pointer"
              >
                {breadcrumbText}
              </span>
            </Link>
            <span className="mx-2 text-gray-800">{" > "}</span>
            <span className="text-gray-700 font-bold">Detail</span>

          </nav>
        </div>
        <div className="container pt-60 pb-60  ">
          <Row gutter={[16, 16]} align={"top"} justify={"space-between"}>
            <Col xl={15} lg={15} md={24} sm={24} xs={24}>
              {" "}
              <div className="">
                {post?.tags.map((tag: any, index: number) => (
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
                    {/* {new Date(post?.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                    })} */}
                    {formattedDate}
                  </p>
                  <span className="text-[#596168]">•</span>
                   <p className="font-bold leading-[16.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-[#596168]">
                   {timeToRead} read
                  </p>
                </div>
                <div>
                  <img
                    src={post?.heroImage[0]?.publicUrl}
                    alt="Test Image"
                    className="w-full mt-4"
                  />
                </div>
              </div>
              <div>
                <SectionContent
                  editor={post?.editor}
                  sections={post?.sections}
                />
              </div>
              <div>
                <ShareWithFriends />
                <AuthorDetails post={post}/>
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
              {showFeaturedBlogs &&(
              <FeaturedBlogs featureBlogsData={featureBlogsData} />
              )}
            </Col>
          </Row>
        </div>
      </TestPageWrapper>
    </>
  );
};

const TestPageWrapper = styled.div``;
