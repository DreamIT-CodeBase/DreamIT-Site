import React from 'react';
import { AHD_HOST } from '../utils/constant';
import Layout from "@/components/layout/Layout";
import { SectionContent } from '@/components/content';
import OrganizationSEO from '@/components/shared/OrganizationSEO';

const PrivacyAndPolicy = ({ pageInfo }:any) => {
    return (
        <>
            <OrganizationSEO />
            <Layout pageInfo={pageInfo}>
            <div className="container pt-85 pb-60">
                <h1 className="font-bold text-[28px] mb-6 text-center">{pageInfo?.name}</h1>
                {pageInfo?.sections && (
                    <SectionContent 
                        editor={pageInfo?.editor} 
                        sections={pageInfo?.sections} 
                    />
                )}
            </div>
        </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const pageSlug = 'privacy-policy';
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

export default PrivacyAndPolicy;