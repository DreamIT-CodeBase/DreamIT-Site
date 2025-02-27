import OurServies from "@/components/shared/OurServies";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import {
  ourServies,
  servicesHeroSectionContent,
} from "@/components/shared/DreamItData";
import React from "react";
import OurCommitment from "@/components/services/OurCommitment";
import { AHD_HOST } from "@/utils/constant";

const services = ({pageInfo}:any) => {
  return (
    <Layout pageInfo={pageInfo}>
      <CommonHeroSection data={servicesHeroSectionContent} />
      <OurServies
        data={ourServies}
        showTag={false}
        showTitle={false}
        showDescription={false}
      />
      <OurCommitment />
    </Layout>
  );
};

export default services;

export const getStaticProps = async () => {
  const pageSlug = "website-services";
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
