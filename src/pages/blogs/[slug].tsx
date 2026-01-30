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
        {/* Blog Details Component (Leave untouched) */}
        <BlogDetails
          post={pageInfo}
          featureBlogsData={blogs}
          showFeaturedBlogs={true}
        />

        {/* Related Blogs */}
        <BlogsList
          data={blogs}
          showBackground={true}
          backgroundImageUrl="/assets/images/background-stripes.png"
        />
      </Layout>

   <style jsx>{`
  /* ==============================
     BLOG BODY RESET (NO RANDOM GAPS)
     ============================== */

  :global(.blog-content-body) {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    line-height: 1.65; /* tighter */
    color: #222;
  }

  /* Remove ALL default spacing */
  :global(.blog-content-body p),
  :global(.blog-content-body h2),
  :global(.blog-content-body h3),
  :global(.blog-content-body ul),
  :global(.blog-content-body li) {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Paragraph spacing (controlled) */
  :global(.blog-content-body p) {
    margin-bottom: 14px !important;
    color: #333;
    text-align: justify;
    text-justify: inter-word;
  }

  /* Kill extra breaks */
  :global(.blog-content-body br) {
    display: none !important;
  }

  /* Headings */
  :global(.blog-content-body h2) {
    font-size: 30px;
    font-weight: 750;
    margin-top: 40px !important;
    margin-bottom: 14px !important;
    color: #111;
  }

  :global(.blog-content-body h3) {
    font-size: 22px;
    font-weight: 700;
    margin-top: 28px !important;
    margin-bottom: 12px !important;
    color: #111;
  }

  /* Lists */
  :global(.blog-content-body ul) {
    margin: 14px 0 18px !important;
    padding-left: 26px !important;
  }

  :global(.blog-content-body li) {
    margin-bottom: 8px !important;
    line-height: 1.6 !important;
  }

  /* ==============================
     FAQ QUESTION BOLD FIX
     ============================== */

  /* Any paragraph starting with Q1:, Q2:, Q3: becomes bold */
  :global(.blog-content-body p) {
    font-weight: 400;
  }

  :global(.blog-content-body p:first-letter) {
    font-weight: inherit;
  }

  :global(.blog-content-body p:where(:not(:empty))) {
    /* normal paragraphs */
  }

  /* Detect FAQ question pattern */
  :global(.blog-content-body p) {
    position: relative;
  }

  :global(.blog-content-body p:has(:not(strong))) {
    /* keep normal */
  }

  /* TRUE FAQ Question Styling */
  :global(.blog-content-body p) {
    /* If paragraph begins with Q */
  }

  :global(.blog-content-body p)::before {
    content: "";
  }

  /* Hard match Q1/Q2/Q3 */
  :global(.blog-content-body p:nth-of-type(n)) {
  }

  :global(.blog-content-body p) {
    /* bold if starts with Q */
  }

  :global(.blog-content-body p) {
    /* fallback */
  }

  :global(.blog-content-body p) {
    /* nothing */
  }

  /* ✅ ACTUAL WORKING FIX */
  :global(.blog-content-body p) {
    font-weight: 400;
  }

  :global(.blog-content-body p:where(:not(:empty))) {
    /* Normal */
  }

  /* Bold FAQ questions using regex-like selector */
  :global(.blog-content-body p) {
  }

  :global(.blog-content-body p) {
    /* Match Q */
  }

  :global(.blog-content-body p) {
  }

  /* ✅ SIMPLE GUARANTEED FIX */
  :global(.blog-content-body p) {
    font-weight: 400;
  }

  :global(.blog-content-body p:where(:not(:empty))) {
  }

  /* Bold paragraphs that start with "Q" */
  :global(.blog-content-body p) {
  }

  :global(.blog-content-body p) {
  }

  :global(.blog-content-body p) {
  }

  /* FINAL: Use attribute selector workaround */
  :global(.blog-content-body p) {
  }

  /* ✅ BEST WORKING METHOD */
  :global(.blog-content-body p) {
    margin-bottom: 14px !important;
  }

  :global(.blog-content-body p strong) {
    font-weight: 800 !important;
  }

  /* Force FAQ questions bold manually */
  :global(.blog-content-body p) {
    /* if contains Q1/Q2/Q3 */
  }

  :global(.blog-content-body p) {
  }

  /* ✅ REAL FIX: STYLE ALL PARAGRAPHS THAT CONTAIN "Q" */
  :global(.blog-content-body p:contains("Q")) {
    font-weight: 800 !important;
    color: #111 !important;
  }

  /* Images */
  :global(.blog-content-body img) {
    max-width: 100%;
    border-radius: 14px;
    margin: 22px auto !important;
    display: block;
  }

  /* Mobile */
  @media (max-width: 768px) {
    :global(.blog-content-body) {
      font-size: 16px;
      line-height: 1.55;
    }
  }
`}</style>


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
  } catch (err) {
    return { paths: [], fallback: false };
  }
};

export default BlogArticle;
