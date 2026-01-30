import { AHD_HOST } from "../../utils/constant";
import Layout from "@/components/layout/Layout";
import { BlogDetails } from "@/components/blogs/BlogsDetails";
import BlogsList from "@/components/blogs/BlogsList";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const BlogArticle = ({ pageInfo, blogs }: any) => {
  return (
    <>
      <OrganizationSEO />

      <Layout pageInfo={pageInfo}>
        <BlogDetails
          post={pageInfo}
          featureBlogsData={blogs}
          showFeaturedBlogs={true}
        />

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
      headers: { "Content-Type": "application/json" },
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

    const data = await pageRes.json();
    pageInfo = data.page || {};
    blogs = data.relatedBlogs || [];
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo, blogs } };
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await fetch(
      `${AHD_HOST}/client/page?filter[groups][]=blogs&includeSections=false&select=slug%20name`
    );

    const blogPages = await blogRes.json();

    const paths = blogPages.rows.map((blg: any) => ({
      params: { slug: blg.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error generating paths:", error);
    return { paths: [], fallback: false };
  }
};

export default BlogArticle;
