import { BlogDetails } from "@/components/blogs/BlogsDetails";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import Layout from "@/components/layout/Layout";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const CaseStudyArticle = ({ pageInfo, caseStudy }: any) => {
  const pageData = pageInfo
   
 

  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <BlogDetails post={pageData} featureBlogsData={caseStudy} showFeaturedBlogs={true}/>
      <CaseStudyList data={caseStudy} />
    </Layout>
    </>
  );
};

export default CaseStudyArticle;

export const getStaticProps = async ({ params }: any) => {
  const pageSlug = params.slug;
    let pageInfo: any = null;
  let caseStudy: any[] = [];
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
   } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, caseStudy   } };
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies&includeSections=false&select=slug%20name`
    );
    if (!blogRes.ok) {
      throw new Error(`Failed to fetch blog pages: ${blogRes.statusText}`);
    }
    const blogPages = await blogRes.json();
    const paths = blogPages.rows.map((blg: any) => ({
      params: { slug: blg.slug },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error("Error fetching paths:", err);
    return {
      paths: [],
      fallback: false,
    };
  }
};
