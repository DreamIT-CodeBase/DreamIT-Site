import HeroSection from "@/components/home/HeroSection";
import Layout from "../components/layout/Layout";
import OurServies from "@/components/shared/OurServies";
import Expertise from "@/components/home/Expertise";
import AboutUsSection from "@/components/home/AboutUsSection";
import Testimonial from "@/components/home/Testimonial";
import RecognitionsSection from "@/components/home/RecognitionsSection";
import ContactForm from "@/components/shared/ContactForm";
import { ourServies } from "@/components/shared/DreamItData";
import BlogsList from "@/components/blogs/BlogsList";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

export default function Home({ pageInfo }: any) {
  const pageMetaData = pageInfo.page || {};
  const relatedBlogs = pageInfo.relatedBlogs || [];

  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageMetaData}>
        <div className="bg-[#F9FDFF]">
          <HeroSection />
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

        <BlogsList
          data={relatedBlogs}
          showBackground={true}
          backgroundImageUrl="/assets/images/background-stripes.png"
        />

        <ContactForm showContactFormLeftSection="true" />
        <RecognitionsSection />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const pageSlug = "website-home";

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
                groups: ["blogs"],
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
    pageInfo = await pageRes.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo } };
};
