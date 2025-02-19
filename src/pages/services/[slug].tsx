import Layout from "@/components/layout/Layout";
import OurCommitment from "@/components/services/OurCommitment";
import {
  serviceDetails,
  successStoriesData,
} from "@/components/shared/DreamItData";
import ServiceDetailsHome from "@/components/serviceDetails/ServiceDetailsHome";
// import ServiceDetailsInsights from "@/components/serviceDetails/ServiceDetailsInsights";
import OurExpertise from "@/components/serviceDetails/OurExpertise";
import Technologies from "@/components/serviceDetails/Technologies";
import ServiceContent from "@/components/serviceDetails/ServiceContent";
import IndustryInsights from "@/components/shared/IndustryInsights";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";

const ServiceDetailPage = ({ serviceDetails: service }: any) => {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Layout>
      <ServiceDetailsHome servicedata={service} />
      <DataDrivenSolutions />

      <ServiceContent servicedata={service} />
      <OurExpertise servicedata={service} />
      <Technologies technology={service} />
      <IndustryInsights data={successStoriesData} showBackground={false} />

      {/* <ServiceDetailsInsights ourServies={ourServiesDetails}/> */}
      <OurCommitment />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = serviceDetails.map((s: any) => {
    return { params: { slug: s.slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const pageSlug = params.slug;
  let pageInfo: any = {};
  try {
    pageInfo = serviceDetails.find((service: any) => service.slug === pageSlug);
  } catch {
    console.log("NO PAGE INFO FOUND FOR " + pageSlug);
  }
  return {
    props: {
      serviceDetails: pageInfo,
    },
  };
}

export default ServiceDetailPage;
