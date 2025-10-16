import { insightsSectionContent } from "@/components/shared/DreamItData";
import Layout from "@/components/layout/Layout";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { AHD_HOST } from "@/utils/constant";
import BlogsList from "@/components/blogs/BlogsList";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const Insights = ({ blogs, pageInfo, caseStudy }: any) => {
  const blogsRecords = blogs;

  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <CommonHeroSection data={insightsSectionContent} />
      <CaseStudyList
        data={caseStudy}
        showViewButton={true}
        useSwiper={true}
        showSearchAndFilter={false}
      />
      <BlogsList
        data={blogsRecords}
        showBackground={true}
        backgroundImageUrl="/assets/images/success-stories-bg.webp"
        showViewButton={true}
        showSearchAndFilter={false}
      />
    </Layout>
    </>
  );
};

export default Insights;

export const getStaticProps = async () => {
  const pageSlug = "website-insights";

  let blogs = [];
  let caseStudy = [];
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
              key: "relatedCs",
              entity: "pages",
              filter: {
                groups: ["case-studies"],
                status: "live",
              },
              limit: 10,
            },
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
    const data = await pageRes.json();
    pageInfo = data.page || {};
    caseStudy = data.relatedCs || [];
    blogs = data.relatedBlogs || [];
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, caseStudy, blogs   } };
};
