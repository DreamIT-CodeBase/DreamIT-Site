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
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const AboutUs = ({ pageInfo, caseStudies }: any) => {
  return (
    <Layout pageInfo={pageInfo}>
      <OrganizationSEO />
      <CommonHeroSection data={aboutUsHeroSectionContent} />
      <OurStory />
      <MissionAndVission />
      <OurCoreValues />
      <OurTeam />
      <CaseStudyList data={caseStudies} />

      <div className="xl:mt-20 lg:mt-20">
        <ExploreLifeDreamIt />
      </div>
    </Layout>
  );
};

export default AboutUs;

export const getStaticProps = async () => {
  const pageSlug = "website-about-us";
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
