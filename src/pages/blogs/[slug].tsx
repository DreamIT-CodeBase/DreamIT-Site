import React, { useEffect, useState } from "react";
import { AHD_HOST } from "../../utils/constant";
import Layout from "@/components/layout/Layout";
import { BlogDetails } from "@/components/blogs/BlogsDetails";

const BlogArticle = ({  pageInfo, pageSlug }: any) => {
  const [pageData, setPageData] = useState(() => pageInfo);
  const [error, setError] = useState<any>(null);
  console.log(error)
  useEffect(() => {
    const fetcher = async () => {
      try {
        const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
        if (!pageRes.ok) {
          throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
        }
        const pageInfo = await pageRes.json();
        setPageData(pageInfo);
      } catch (err: any) {
        console.error("Error fetching page data:", err);
        setError(err.message);
      }
    };

    if (typeof window !== "undefined") {
      fetcher();
    }
  }, [pageSlug]);

  return (
    <Layout>
      <BlogDetails post={pageData} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const pageSlug = params.slug;
  try {
    const faqRes = await fetch(
      `${AHD_HOST}/faq-group-list?filter[slug]=${pageSlug}&filter[status]=published&limit=15&orderBy=order_ASC`
    );
    if (!faqRes.ok) {
      throw new Error(`Failed to fetch FAQs: ${faqRes.statusText}`);
    }
    const contentFaqs = await faqRes.json();

    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.statusText}`);
    }
    const pageInfo = await pageRes.json();

    return { props: { contentFaqs, pageInfo, pageSlug } };
  } catch (err) {
    console.error("Error fetching data for static props:", err);
    return {
      props: { contentFaqs: [], pageInfo: null, pageSlug },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const blogRes = await fetch(`${AHD_HOST}/page?filter[groups][]=blogs`);
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

export default BlogArticle;
