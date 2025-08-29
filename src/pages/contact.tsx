import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/shared/ContactForm";
import React from "react";
import { AHD_HOST } from "@/utils/constant";

const Contact = ({ pageInfo }: any) => {
  return (
    <Layout pageInfo={pageInfo}>
      <ContactForm showContactFormLeftSection="true" />
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const pageSlug = "website-contact";
  let pageInfo = {};

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes?.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo } };
};
