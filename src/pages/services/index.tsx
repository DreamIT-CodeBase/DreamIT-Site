import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import {
  ourServies,
  servicesHeroSectionContent,
} from "@/components/shared/DreamItData";
import React from "react";
// import OurCommitment from "@/components/services/OurCommitment";
import { AHD_HOST } from "@/utils/constant";
import MainPageServices from "@/components/shared/MainPageServices";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const services = ({ pageInfo }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
        <CommonHeroSection data={servicesHeroSectionContent} />
        <MainPageServices
          data={ourServies}
          showTag={true}
          showTitle={true}
          showDescription={true}
          showCrousalForMobile={false}
        />
        {/* <OurCommitment /> */}
      </Layout>
    </>
  );
};

export default services;

export const getStaticProps = async () => {
  const pageSlug = "website-services";

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
