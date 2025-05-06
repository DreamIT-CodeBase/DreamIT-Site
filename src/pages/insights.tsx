import { insightsSectionContent } from "@/components/shared/DreamItData";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React, { useEffect, useState } from "react";
import { AHD_HOST, PREVIEW } from "@/utils/constant";
import BlogsList from "@/components/blogs/BlogsList";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";

const Insights = ({ blogs, pageInfo, caseStudy }: any) => {
  const [blogsRecords, setBlogsRecords] = useState(blogs || []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        const data = await response.json();
        setBlogsRecords(data?.rows || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    if (typeof window !== "undefined") {
      const mode = new URL(window.location.href).searchParams.get("mode");
      if (mode === PREVIEW) {
        fetchBlogs();
      }
    }
  }, []);

  return (
    <Layout pageInfo={pageInfo}>
      <CommonHeroSection data={insightsSectionContent} />
      <CaseStudyList
        data={caseStudy}
        showViewButton={true}
        useSwiper={true}
        showSearchAndFilter={false}
      />
      <BlogsList
        data={blogsRecords}
        showBackground={true}
        backgroundImageUrl="/assets/images/success-stories-bg.webp"
        showViewButton={true}
        showSearchAndFilter={false}
      />
    </Layout>
  );
};

export default Insights;

export const getStaticProps = async () => {
  const pageSlug = "website-insights";

  let blogs = [];
  let caseStudy = [];
  let pageInfo = {};

  try {
    const resOfBlogs = await fetch(
      `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
    );
    if (!resOfBlogs.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfBlogs.status}`);
    }
    const blogsData = await resOfBlogs?.json();
    blogs = blogsData?.rows || [];
  } catch (error) {
    console.error("Error fetching blogs in getStaticProps:", error);
  }
  try {
    const resOfBlogs = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies&orderBy=&limit=50&offset=0`
    );
    if (!resOfBlogs.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfBlogs.status}`);
    }
    const caseStudyData = await resOfBlogs?.json();
    caseStudy = caseStudyData?.rows || [];
  } catch (error) {
    console.error("Error fetching blogs in getStaticProps:", error);
  }

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes?.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, blogs, caseStudy } };
};
