import { AHD_HOST } from "../../utils/constant";
import Layout from "@/components/layout/Layout";
import { BlogDetails } from "@/components/blogs/BlogsDetails";
import BlogsList from "@/components/blogs/BlogsList";
import OrganizationSEO from "@/components/shared/OrganizationSEO";
// import { SectionContent } from "@/components/content";
// import ShareWithFriends from "@/components/shared/ShareWithFriends";
// import AuthorDetails from "@/components/shared/AuthorDetails";
// import { Col, Row } from "antd";

const BlogArticle = ({ pageInfo, blogs }: any) => {
  const pageData = pageInfo
 
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <BlogDetails post={pageData} featureBlogsData={blogs} showFeaturedBlogs={true}/>
      <BlogsList
        data={blogs}
        showBackground={true}
        backgroundImageUrl="/assets/images/background-stripes.png"
      />
    </Layout>
    </>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const pageSlug = params.slug;
  let pageInfo: any = null;
  let blogs: any[] = [];

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
    const data = await pageRes.json();
    pageInfo = data.page || {};
    blogs = data.relatedBlogs || [];
   } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, blogs   } };
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await fetch(`${AHD_HOST}/page?filter[groups][]=blogs&includeSections=false&select=slug%20name`);
    if (!blogRes.ok) {
      throw new Error(`Failed to fetch blog pages: ${blogRes.statusText}`);
    }
    const blogPages = await blogRes?.json();
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

export default BlogArticle;
