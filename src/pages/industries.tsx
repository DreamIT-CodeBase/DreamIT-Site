import {
  industriesHeroSectionContent,
  industriesWeServeData,
} from "@/components/shared/DreamItData";
import IndustriesWeServe from "@/components/industries/IndustriesWeServe";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React from "react";
import { AHD_HOST } from "@/utils/constant";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const industries = ({ pageInfo, caseStudies }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <CommonHeroSection
        data={industriesHeroSectionContent}
        showInsightsIndustries={true}
      />
      <IndustriesWeServe industriesWeServeData={industriesWeServeData} />
      <CaseStudyList data={caseStudies} />
    </Layout>
    </>
  );
};

export default industries;

export const getStaticProps = async () => {
  const pageSlug = "website-industries";
  let caseStudies = [];

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
                groups: ["case-studies"],
                status: "live",
              },
              limit: 10,
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
    caseStudies = data.relatedBlogs || [];
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, caseStudies } };
};
