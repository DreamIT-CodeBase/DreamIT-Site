import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import Layout from "@/components/layout/Layout";
import { AHD_HOST, PREVIEW } from "@/utils/constant";
import React, { useEffect, useState } from "react";

const CaseStudyLi = ({ caseStudies,pageInfo }: any) => {
  const [caseStudyRecords, setCaseStudyRecords] = useState(() => caseStudies);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const resOfBlogs = await fetch(
          `${AHD_HOST}/page?filter[groups][]=case-studies&orderBy=&limit=50&offset=0`
        );

        if (!resOfBlogs.ok) {
          throw new Error(`Failed to fetch blogs: ${resOfBlogs.statusText}`);
        }

        const cs = await resOfBlogs.json();
        setCaseStudyRecords(cs?.rows || []);
      } catch (error: any) {
        console.error("Error fetching blogs:", error);
      }
    };

    const mode = new URL(window.location.href).searchParams.get("mode");
    if (mode === PREVIEW) {
      fetcher();
    }
  }, []);

  return (
    <Layout pageInfo={pageInfo}>
      <CaseStudyList data={caseStudyRecords} />
    </Layout>
  );
};

export default CaseStudyLi;

export const getStaticProps = async () => {
  const pageSlug = "website-case-studies";
  let faqs = [];
  let caseStudies = [];
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

    const resOfCaseStudy = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies&orderBy=&limit=50&offset=0`
    );

    if (!resOfCaseStudy.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfCaseStudy.statusText}`);
    }

    const caseStudyData = await resOfCaseStudy.json();
    caseStudies = caseStudyData?.rows || [];

    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);

    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
    }

    pageInfo = await pageRes.json();
  } catch (ex: any) {
    console.error("Error in getStaticProps:", ex);
    error = ex.message;
  }

  return { props: { faqs, pageInfo, caseStudies, error } };
};
