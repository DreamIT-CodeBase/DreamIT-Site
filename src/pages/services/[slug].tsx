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

const ServiceDetailPage = ({
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

  return (
    <Layout pageInfo={pageInfo}>
      <ServiceDetailsHome servicedata={service} />
      <DataDrivenSolutions />

      <ServiceContent servicedata={pageInfo} />
      <OurExpertise servicedata={service} />
      <Technologies technology={service} />
      <CaseStudyList data={displayedCaseStudies} />

      <OurCommitment />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const pagesRes = await fetch(`${AHD_HOST}/page?filter[groups][]=services`);
  const pagePages = await pagesRes.json();
  console.log(pagePages);
  const paths = pagePages.rows.map((page: any) => ({
    params: { slug: page.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const pageSlug = params.slug;

  let pageDeatils: any = {};
  let pageInfo = {};
  let caseStudy = [];

  try {
    pageDeatils = serviceDetails.find(
      (service: any) => service.slug === pageSlug
    );
  } catch {
    console.log("NO PAGE INFO FOUND FOR " + pageSlug);
  }

  try {
    const resOfBlogs = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies&orderBy=&limit=50&offset=0`
    );
    if (!resOfBlogs.ok) {
      throw new Error(`Failed to fetch blogs: ${resOfBlogs.status}`);
    }
    const caseStudyData = await resOfBlogs.json();
    caseStudy = caseStudyData?.rows || [];
  } catch (error) {
    console.error("Error fetching blogs in getStaticProps:", error);
  }

  try {
    const pageRes = await fetch(`${AHD_HOST}/pagebyslug/${pageSlug}`);
    if (!pageRes.ok) {
      throw new Error(`Failed to fetch page info: ${pageRes.status}`);
    }
    pageInfo = await pageRes.json();
  } catch (error) {
    console.error("Error fetching page info:", error);
  }
  return {
    props: {
      serviceDetails: pageDeatils,
      caseStudy,
      pageInfo,
    },
  };
}

export default ServiceDetailPage;
