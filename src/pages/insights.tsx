import {
  industryInsightsPageData,
  insightsSectionContent,
  successStoriesData,
  tipsAndGuideData,
} from "@/components/shared/DreamItData";
import IndustryInsights from "@/components/shared/IndustryInsights";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
 import React from "react";

const insights = () => {
  return (
    <>
      <Layout>
        <CommonHeroSection data={insightsSectionContent} />
        <IndustryInsights data={successStoriesData} />
        <IndustryInsights data={industryInsightsPageData} />
        <IndustryInsights data={tipsAndGuideData} />
       </Layout>
    </>
  );
};

export default insights;
