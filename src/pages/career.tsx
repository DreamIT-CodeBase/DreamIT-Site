import OurCoreValues from "@/components/aboutUs/OurCoreValues";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { careerHeroSectionContent } from "@/components/shared/DreamItData";
import RoomForGrowth from "@/components/career/RoomForGrowth";
import React from "react";
import PerksAndBenefits from "@/components/career/PerksAndBenefits";
import CareerStats from "@/components/career/CareerStats";
import CurrentOpenings from "@/components/career/CurrentOpenings";
import LifeAtDreamIt from "@/components/career/LifeAtDreamIt";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const Career = ({ pageInfo }: any) => {
   return (
    <Layout pageInfo={pageInfo}>
      <OrganizationSEO/>
      <CommonHeroSection data={careerHeroSectionContent} showDataDrivenCrousal={false}/>
      <LifeAtDreamIt />
      <OurCoreValues />
      <CareerStats />
      <RoomForGrowth />
      <PerksAndBenefits />
      <CurrentOpenings pageInfo={pageInfo}/>
    </Layout>
  );
};

export default Career;

export const getStaticProps = async () => {
  const pageSlug = "website-carrer";
  let faqs = [];

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
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes?.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, faqs } };
};
