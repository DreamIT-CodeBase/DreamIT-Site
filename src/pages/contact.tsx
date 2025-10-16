import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/shared/ContactForm";
import React from "react";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const Contact = ({ pageInfo }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <ContactForm showContactFormLeftSection="true" />
    </Layout>
    </>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const pageSlug = "website-contact";
  let pageInfo = {};

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          includes: [],
        },
      }),
    });
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    const data = await pageRes.json();
    pageInfo = data.page || {};
   } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo } };
};
