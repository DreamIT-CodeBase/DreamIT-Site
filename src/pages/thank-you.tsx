import Layout from "@/components/layout/Layout";
import React from "react";
import Link from "next/link";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

const ThankYouPage = ({ pageInfo }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
      <div
        className="xl:pt-[50px] lg:pt-[50px] md:pt-[50px] sm:pt-[10px] xs:pt-[10px] xl:pb-[230px] lg:pb-[200px] md:pb-[150px] sm:pb-[50px] xs:pb-[50px] w-full flex items-center justify-center bg-no-repeat bg-contain bg-bottom"
        style={{ backgroundImage: "url(/assets/images/thankyoupagebg.png)" }}
      >
        <div className="text-center p-8 w-full  mx-auto ">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/icons/checkMark.svg"
              alt="Success"
              className="mx-auto xl:h-[100px] lg:h-[100px] md:h-[80px] sm:h-[60px] xs:h-[50px]"
            />
          </div>

          <h1 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-[18px] xs:text-[18px]  font-bold text-[#1C1C1C] xl:mb-4 lg:mb-4 md:mb-4 sm:mb-3 xs:mb-3">
            Thank You for Your Submission! 🎉
          </h1>

          <p className="text-[#596168] xl:text-lg lg:text-lg md:text-lg sm:text-[14px] xs:text-[14px] xl:mb-8 lg:mb-8 md:mb-8 sm:mb-4 xs:mb-4 xl:ml-[-35px] lg:ml-[-35px] md:ml-[-35px] sm:ml-[0px] xs:ml-[0px]">
            We&apos;ve received your details and will get back to you soon.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#0a2540] hover:bg-[#0a3060] text-white xl:text-lg lg:text-lg md:text-lg sm:text-[14px] xs:text-[14px] xl:py-3 lg:py-3 md:py-3 sm:py-1 xs:py-1 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 rounded-md transition-colors"
          >
            Go back to Home Page
          </Link>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default ThankYouPage;

export const getStaticProps = async () => {
  const pageSlug = "thank-you";

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
