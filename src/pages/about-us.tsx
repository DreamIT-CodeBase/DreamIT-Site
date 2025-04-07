import MissionAndVission from "@/components/aboutUs/MissionAndVission";
import OurCoreValues from "@/components/aboutUs/OurCoreValues";
import OurStory from "@/components/aboutUs/OurStory";
import OurTeam from "@/components/aboutUs/OurTeam";
import { aboutUsHeroSectionContent } from "@/components/shared/DreamItData";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import React from "react";
import ExploreLifeDreamIt from "../components/aboutUs/ExploreLifeDreamIt";
import { AHD_HOST } from "@/utils/constant";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";

const AboutUs = ({ pageInfo, caseStudy }: any) => {
  return (
    <Layout pageInfo={pageInfo}>
      <CommonHeroSection data={aboutUsHeroSectionContent} />
      <OurStory />
      <MissionAndVission />
      <OurCoreValues />
      <OurTeam />
      <CaseStudyList data={caseStudy} />

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
  let caseStudy = [];
  let pageInfo = {};

  try {
    const faqRes = await fetch(
      `${AHD_HOST}/faq-group-list?filter[slug]=${pageSlug}&filter[status]=published&limit=10&orderBy=order_ASC`
    );
    faqs = await faqRes?.json();
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    error = "Failed to fetch FAQs.";
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

  return { props: { pageInfo, faqs, caseStudy } };
};
