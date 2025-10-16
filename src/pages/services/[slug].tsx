import Layout from "@/components/layout/Layout";
import OurCommitment from "@/components/services/OurCommitment";
import { serviceDetails } from "@/components/shared/DreamItData";
import ServiceDetailsHome from "@/components/serviceDetails/ServiceDetailsHome";
import OurExpertise from "@/components/serviceDetails/OurExpertise";
import Technologies from "@/components/serviceDetails/Technologies";
import ServiceContent from "@/components/serviceDetails/ServiceContent";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import { AHD_HOST } from "@/utils/constant";
import OrganizationSEO from "@/components/shared/OrganizationSEO";
import faqData from "@/utils/faqData";
import FAQ from "@/components/shared/FAQ";

const ServiceDetailPage = ({
  slug,
  serviceDetails: service,
  caseStudy,
  pageInfo,
}: any) => {
  if (!service) {
    return <div>Service not found</div>;
  }
  const pageTag = pageInfo.tags[0];
  let displayedCaseStudies;

  if (!pageTag) {
    displayedCaseStudies = caseStudy;
  } else {
    const matchingCaseStudies = caseStudy.filter((cs: any) =>
      cs.tags.includes(pageTag)
    );

    const remainingCaseStudies = caseStudy.filter(
      (cs: any) => !cs.tags.includes(pageTag)
    );

    displayedCaseStudies = [
      ...matchingCaseStudies,
      ...remainingCaseStudies.slice(0, 3 - matchingCaseStudies.length),
    ].slice(0, 3);
  }
  const faqs = faqData.find((f: any) => f.slug === slug)?.faq || [];

  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
        <ServiceDetailsHome servicedata={service} />
        <DataDrivenSolutions />
        <ServiceContent servicedata={pageInfo} />
        <OurExpertise servicedata={service} />
        <Technologies technology={service} />
        <CaseStudyList data={displayedCaseStudies} />
        <OurCommitment />
        {faqs.length > 0 ? <FAQ items={faqs} /> : <></>}
        {/* {faqs.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <div>
              {faqs.map((item: any, idx: number) => (
                <div key={idx} className="mb-6">
                  <p className="font-medium">{item.question}</p>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const pagesRes = await fetch(`${AHD_HOST}/client/page?filter[groups][]=services&includeSections=false&select=slug%20name`);
  const pagePages = await pagesRes?.json();
  console.log(pagePages);
  const paths = pagePages?.rows.map((page: any) => ({
    params: { slug: page?.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const pageSlug = params.slug;

  let pageDeatils: any = null;
  let pageInfo: any = null;
  let caseStudy: any[] = [];

  try {
    pageDeatils =
      serviceDetails.find((service: any) => service?.slug === pageSlug) || null;
  } catch {
    console.log("NO PAGE INFO FOUND FOR " + pageSlug);
  }

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
              key: "relatedCs",
              entity: "pages",
              filter: {
                groups: ["case-studies"],
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
    caseStudy = data.relatedCs || [];
  } catch (error) {
    console.error("Error fetching page info:", error);
  }

  return {
    props: {
      slug: pageSlug,
      serviceDetails: pageDeatils ?? null,
      caseStudy: caseStudy ?? [],
      pageInfo: pageInfo ?? null,
    },
  };
}

export default ServiceDetailPage;
