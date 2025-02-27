import {
  industriesHeroSectionContent,
  industriesWeServeData,
  successStoriesData,
} from "@/components/shared/DreamItData";
import IndustriesWeServe from "@/components/industries/IndustriesWeServe";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React from "react";
import IndustryInsights from "@/components/shared/IndustryInsights";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import { AHD_HOST } from "@/utils/constant";

const industries = ({pageInfo}:any) => {
  return ( 
    <Layout pageInfo={pageInfo}>
      <CommonHeroSection data={industriesHeroSectionContent} />
      <DataDrivenSolutions showInsightsIndustries={true}/>
      <IndustriesWeServe  industriesWeServeData={industriesWeServeData}/>
      <IndustryInsights data={successStoriesData}  showBackground={true}/>
    </Layout>
  );
};

export default industries;

export const getStaticProps = async () => {
  const pageSlug = "website-industries";
  let faqs = [];

  let pageInfo = {};

  try {
    const faqRes = await fetch(
      `${AHD_HOST}/faq-group-list?filter[slug]=${pageSlug}&filter[status]=published&limit=10&orderBy=order_ASC`
    );
    faqs = await faqRes.json();
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    error = "Failed to fetch FAQs.";
  }

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, faqs } };
};
