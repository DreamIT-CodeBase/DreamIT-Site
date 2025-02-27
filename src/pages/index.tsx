import HeroSection from "@/components/home/HeroSection";
import Layout from "../components/layout/Layout";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import OurServies from "@/components/shared/OurServies";
import Expertise from "@/components/home/Expertise";
import AboutUsSection from "@/components/home/AboutUsSection";
import Testimonial from "@/components/home/Testimonial";
 import ContactForm from "@/components/shared/ContactForm";
import {
   ourServies,
} from "@/components/shared/DreamItData";
import BlogsList from "@/components/blogs/BlogsList";
import { AHD_HOST, PREVIEW } from "@/utils/constant";
import { useEffect, useState } from "react";

export default function Home({ blogs, pageInfo }: any) {
  const [blogsRecords, setBlogsRecords] = useState(blogs || []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        const data = await response.json();
        setBlogsRecords(data?.rows || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    if (typeof window !== "undefined") {
      const mode = new URL(window.location.href).searchParams.get("mode");
      if (mode === PREVIEW) {
        fetchBlogs();
      }
    }
  }, []);
  return (
    <>
      <Layout pageInfo={pageInfo}>
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
        
        <BlogsList
          data={blogsRecords}
          showBackground={true}
          backgroundImageUrl="/assets/images/background-stripes.png"
        />

        <ContactForm showContactFormLeftSection="true" />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const pageSlug = "website-home";

  let blogs = [];
  let pageInfo = {};

  try {
    const resOfBlogs = await fetch(
      `${AHD_HOST}/page?filter[groups][]=blogs&orderBy=&limit=50&offset=0`
    );
    if (!resOfBlogs.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfBlogs.status}`);
    }
    const blogsData = await resOfBlogs.json();
    blogs = blogsData?.rows || [];
  } catch (error) {
    console.error("Error fetching blogs in getStaticProps:", error);
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

  return { props: { pageInfo, blogs } };
};
