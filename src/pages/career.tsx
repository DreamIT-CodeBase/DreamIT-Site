import OurCoreValues from "@/components/aboutUs/OurCoreValues";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { careerHeroSectionContent } from "@/components/shared/DreamItData";
import RoomForGrowth from "@/components/career/RoomForGrowth";
import React from "react";
import PerksAndBenefits from "@/components/career/PerksAndBenefits";
import CareerStats from "@/components/career/CareerStats";
import CurrentOpenings from "@/components/career/CurrentOpenings";

const Career = () => {
  return (
    <Layout>
      <CommonHeroSection data={careerHeroSectionContent} />
      <OurCoreValues/>
      <CareerStats/>
      <RoomForGrowth/>
      <PerksAndBenefits/>
      <CurrentOpenings/>
    </Layout>
  );
};

export default Career;
