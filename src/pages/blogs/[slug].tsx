import React, { useEffect, useState } from "react";
import { AHD_HOST } from "../../utils/constant";
import Layout from "@/components/layout/Layout";
import { BlogDetails } from "@/components/blogs/BlogsDetails";
import BlogsList from "@/components/blogs/BlogsList";
// import { SectionContent } from "@/components/content";
// import ShareWithFriends from "@/components/shared/ShareWithFriends";
// import AuthorDetails from "@/components/shared/AuthorDetails";
// import { Col, Row } from "antd";

const BlogArticle = ({ pageInfo, pageSlug, blogs }: any) => {
  const [pageData, setPageData] = useState(() => pageInfo);
  const [error, setError] = useState<any>(null);
  console.log(error);
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
      <BlogDetails post={pageData} featureBlogsData={blogs} />
      {/* <Row className="container flex-col">
        <Col xl={15} lg={15} md={24} sm={24} xs={24}>
          <SectionContent
            editor={pageData?.editor}
            sections={pageData?.sections}
          />
          <ShareWithFriends />
          <AuthorDetails />
        </Col>{" "}
      </Row> */}

      <BlogsList
        data={blogs}
        showBackground={true}
        backgroundImageUrl="/assets/images/background-stripes.png"
      />
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

    const resOfCaseStudies = await fetch(
      `${AHD_HOST}/page?filter[groups][]=blogs`
    );
    const blogs = await resOfCaseStudies?.json();

    return { props: { contentFaqs, pageInfo, pageSlug, blogs: blogs?.rows } };
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
