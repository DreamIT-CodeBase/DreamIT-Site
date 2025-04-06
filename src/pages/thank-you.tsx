import Layout from "@/components/layout/Layout";
import React from "react";
import Link from "next/link";
import { AHD_HOST } from "@/utils/constant";

const ThankYouPage = ({ pageInfo }: any) => {
  return (
    <Layout pageInfo={pageInfo}>
      {" "}
      <div
        className="pt-[50px] pb-[200px] w-full flex items-center justify-center bg-no-repeat bg-contain bg-bottom"
        style={{ backgroundImage: "url(/assets/images/thankyoupagebg.png)" }}
      >
        <div className="text-center p-8 w-full  mx-auto ">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/icons/checkMark.svg"
              alt="Success"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Thank You for Your Submission! 🎉
          </h1>

          <p className="text-[#596168] text-lg mb-8">
            We've received your details and will get back to you soon.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#0a2540] hover:bg-[#0a3060] text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Go back to Home Page
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;

export const getStaticProps = async () => {
  const pageSlug = "thank-you";

  let pageInfo = {};

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return { props: { pageInfo } };
};
