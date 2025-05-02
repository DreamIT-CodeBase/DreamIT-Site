import { BlogDetails } from "@/components/blogs/BlogsDetails";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import Layout from "@/components/layout/Layout";
import { AHD_HOST } from "@/utils/constant";
import React, { useEffect, useState } from "react";

const CaseStudyArticle = ({ pageInfo, pageSlug, caseStudy }: any) => {
  const [pageData, setPageData] = useState(() => pageInfo);
  const [error, setError] = useState<any>(null);
  console.log(error);
  
  useEffect(() => {
    const fetcher = async () => {
      try {
        const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
        if (!pageRes.ok) {
          throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
        }
        const pageInfo = await pageRes.json();
        setPageData(pageInfo);
      } catch (err: any) {
        console.error("Error fetching page data:", err);
        setError(err.message);
      }
    };

    if (typeof window !== "undefined") {
      fetcher();
    }
  }, [pageSlug]);

  return (
    <Layout pageInfo={pageInfo}>
      <BlogDetails post={pageData} featureBlogsData={caseStudy} />
      <CaseStudyList data={caseStudy} />
    </Layout>
  );
};

export default CaseStudyArticle;

export const getStaticProps = async ({ params }: any) => {
  const pageSlug = params.slug;
  try {
    const faqRes = await fetch(
      `${AHD_HOST}/faq-group-list?filter[slug]=${pageSlug}&filter[status]=published&limit=15&orderBy=order_ASC`
    );
    if (!faqRes.ok) {
      throw new Error(`Failed to fetch FAQs: ${faqRes.statusText}`);
    }
    const contentFaqs = await faqRes.json();

    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
    }
    const pageInfo = await pageRes?.json();

    const resOfCaseStudies = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies`
    );
    const caseStudy = await resOfCaseStudies?.json();

    return {
      props: { contentFaqs, pageInfo, pageSlug, caseStudy: caseStudy?.rows },
    };
  } catch (err) {
    console.error("Error fetching data for static props:", err);
    return {
      props: { contentFaqs: [], pageInfo: null, pageSlug },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies`
    );
    if (!blogRes.ok) {
      throw new Error(`Failed to fetch blog pages: ${blogRes.statusText}`);
    }
    const blogPages = await blogRes.json();
    const paths = blogPages.rows.map((blg: any) => ({
      params: { slug: blg.slug },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error("Error fetching paths:", err);
    return {
      paths: [],
      fallback: false,
    };
  }
};
