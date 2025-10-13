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
 
  let pageInfo = {};
  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          includes: [],
        },
      }),
    });
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    const data = await pageRes.json();
    pageInfo = data.page || {};
   } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo } };
};
