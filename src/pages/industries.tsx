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

const industries = () => {
  return ( 
    <Layout>
      <CommonHeroSection data={industriesHeroSectionContent} />
      <IndustriesWeServe  industriesWeServeData={industriesWeServeData}/>
      <IndustryInsights data={successStoriesData}  showBackground={true}/>
    </Layout>
  );
};

export default industries;
