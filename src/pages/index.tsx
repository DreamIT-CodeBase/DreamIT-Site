import HeroSection from "@/components/home/HeroSection";
import Layout from "../components/layout/Layout";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import OurServies from "@/components/shared/OurServies";
import Expertise from "@/components/home/Expertise";
import AboutUsSection from "@/components/home/AboutUsSection";
import Testimonial from "@/components/home/Testimonial";
import IndustryInsights from "@/components/shared/IndustryInsights";
import ContactForm from "@/components/shared/ContactForm";
import {
  industryInsightsHomePageData,
  ourServies,
} from "@/components/shared/DreamItData";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-[#F9FDFF]">
          <HeroSection />
          <DataDrivenSolutions />
        </div>
        <OurServies
          data={ourServies}
          showTag={true}
          showTitle={true}
          showDescription={true}
        />
        <Expertise />
        <AboutUsSection />
        <Testimonial />
        <IndustryInsights
          data={industryInsightsHomePageData}
          showBackground={true}
        />
        <ContactForm showContactFormLeftSection="true" />
      </Layout>
    </>
  );
}
