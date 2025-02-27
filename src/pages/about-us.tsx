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
import { AHD_HOST } from "@/utils/constant";

const AboutUs = ({ pageInfo }: any) => {
  return (
    <Layout pageInfo={pageInfo}>
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

export const getStaticProps = async () => {
  const pageSlug = "website-about-us";
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
