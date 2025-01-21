import MissionAndVission from "@/components/aboutUs/MissionAndVission";
// import OurClient from "@/components/aboutUs/OurClient";
import OurCoreValues from "@/components/aboutUs/OurCoreValues";
import OurStory from "@/components/aboutUs/OurStory";
import OurTeam from "@/components/aboutUs/OurTeam";
import {
  aboutUsHeroSectionContent,
  successStoriesData,
} from "@/components/shared/DreamItData";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React from "react";
import ExploreLifeDreamIt from "../components/aboutUs/ExploreLifeDreamIt";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import IndustryInsights from "@/components/shared/IndustryInsights";

const AboutUs = () => {
  return (
    <Layout>
      <CommonHeroSection data={aboutUsHeroSectionContent} />
      <DataDrivenSolutions />
      <OurStory />
      <MissionAndVission />
      <OurCoreValues />
      <OurTeam />
      <IndustryInsights data={successStoriesData} />

      <div className="xl:mt-20 lg:mt-20">
        <ExploreLifeDreamIt />
      </div>
    </Layout>
  );
};

export default AboutUs;
