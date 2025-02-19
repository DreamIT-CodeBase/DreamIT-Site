import {
  insightsSectionContent,
  successStoriesData,
  industryInsightsBlogsData,
} from "@/components/shared/DreamItData";
import IndustryInsights from "@/components/shared/IndustryInsights";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React from "react";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";

const insights = () => {
  return (
    <>
      <Layout>
        <CommonHeroSection data={insightsSectionContent} />
        <DataDrivenSolutions />

        <IndustryInsights data={successStoriesData} showBackground={false}/>
        <IndustryInsights data={industryInsightsBlogsData} showBackground={true}/>
      </Layout>
    </>
  );
};

export default insights;
