import OurServies from "@/components/shared/OurServies";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import {
  ourServies,
  servicesHeroSectionContent,
} from "@/components/shared/DreamItData";
import React from "react";
import OurCommitment from "@/components/services/OurCommitment";

const services = () => {
  return (
    <Layout>
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
