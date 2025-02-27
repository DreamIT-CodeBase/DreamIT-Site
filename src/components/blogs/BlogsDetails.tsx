import React from "react";
import { SectionContent } from "../content";
import styled from "styled-components";
import { Col, Row, Tag } from "antd";
import ShareWithCommunity from "../shared/ShareWithCommunity";
import FeaturedBlogs from "./FeaturedBlogs";
import ShareWithFriends from "../shared/ShareWithFriends";
import AuthorDetails from "../shared/AuthorDetails";

export const BlogDetails = ({ post, featureBlogsData }: any) => {
  return (
    <>
      <TestPageWrapper>
        <div className="container pt-60 pb-60 bg-gradient-to-bl from-[rgba(125,193,233,0.2)] via-[rgba(133,76,255,0.142)] to-[rgba(255,255,255,0.2)]">
          <Row gutter={[16, 16]} align={"top"} justify={"space-between"}>
            <Col xl={15} lg={15} md={24} sm={24} xs={24}>
              {" "}
              {post.tags.map((tag: any, index: number) => (
                <Tag
                  key={index}
                  className="font-semibold bg-white border-none outline-none leading-[16.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] mb-3 rounded-full px-4 py-2"
                >
                  {tag.toUpperCase()}
                </Tag>
              ))}
              <h1 className="font-bold leading-[33.6px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] xs:text-[28px] mb-2">
                {post.title}
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-bold leading-[33.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-[#596168]">
                  {new Date(post?.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
                <span className="text-[#596168]">•</span>
                <p className="font-bold leading-[16.6px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-[#596168]">
                  10 min read
                </p>
              </div>
              <div>
                <img
                  src={post?.heroImage[0].publicUrl}
                  alt="Test Image"
                  className="w-full mt-4"
                />
              </div>
              <div>
                <SectionContent
                  editor={post?.editor}
                  sections={post?.sections}
                />
              </div>
              <div>
                <ShareWithFriends />
                <AuthorDetails />
              </div>
            </Col>

            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
              <ShareWithCommunity />
              <FeaturedBlogs featureBlogsData={featureBlogsData} />
            </Col>
          </Row>
        </div>
      </TestPageWrapper>
    </>
  );
};

const TestPageWrapper = styled.div``;
