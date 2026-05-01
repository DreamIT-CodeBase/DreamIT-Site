import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import Layout from "@/components/layout/Layout";
import OrganizationSEO from "@/components/shared/OrganizationSEO";
import OurExpertise from "@/components/serviceDetails/OurExpertise";
import ServiceContent from "@/components/serviceDetails/ServiceContent";
import ServiceDetailsHome from "@/components/serviceDetails/ServiceDetailsHome";
import Technologies from "@/components/serviceDetails/Technologies";
import { AHD_HOST } from "@/utils/constant";
import Marquee from "react-fast-marquee";

const erpHeroData = {
  title: "ERP Implementation for Business Centric IT Ecosystem",
  description:
    "Simplify, Automate, and Scale Your Future with Tomorrow's Business Tools, Today",
  heroImage: "/assets/images/enterprise-image.webp",
  heroImageClassName: "rounded-[28px] object-cover max-w-[560px] mx-auto",
};

const erpIndustries = [
  { name: "Technology", logo: "/assets/icons/technology.svg" },
  { name: "Education", logo: "/assets/icons/education.svg" },
  { name: "E-commerce", logo: "/assets/icons/e-commerce.svg" },
  { name: "Healthcare", logo: "/assets/icons/healthcare.svg" },
  { name: "Finance", logo: "/assets/icons/finance.svg" },
  { name: "Retail", logo: "/assets/icons/retail.svg" },
  { name: "Manufacturing", logo: "/assets/icons/manufacturing.svg" },
];

const erpParagraphData = {
  editor: "html",
  sections: [
    {
      layoutType: "LEFT_IMAGE_RIGHT_CONTENT",
      imageUrls: "/assets/images/buisness-centeric-content-image.webp",
      imageClassName: "rounded-[24px]",
      contentClassName: "text-justify",
      title: "Expert ERP Implementation and IT Ecosystems",
      content: `<p>For businesses aiming to boost productivity and refine process efficiencies, effective ERP implementation is the bridge between operational chaos and seamless integration. Managing data often feels like solving a chaotic puzzle where storage overflows and migration hurdles act as a torn map on a moving treasure hunt, but the right partnership transforms these challenges into a strategic advantage.</p><p>By collaborating with competent consultants who function as an extension of your team, you can transition through planning, system design, and activation with minimal downtime. Our cutting-edge cloud solutions further simplify this journey, allowing you to</p><ul><li><strong>Unify Operations:</strong> Seamlessly incorporate separate departments into a single system to facilitate partnership and collaboration.</li><li><strong>Master Data Governance:</strong> Overcome bottlenecks and storage issues to turn raw data into a mastered asset.</li><li><strong>Drive Informed Growth:</strong> Gain real-time insights into resource utilization, enabling fact-based decision-making that supports long-term sustainability.</li></ul><p>Ultimately, we help you conquer the cloud and customize your ERP system to your exact requirements, ensuring that every phase from user training to follow-up support leads to effortless results and measurable success.</p>`,
    },
  ],
};

const erpExpertiseData = {
  ourExpertise: [
    {
      tag: "OUR ERP & BUSINESS APPLICATION SOLUTIONS",
      title: "Our ERP & Business Application Solutions",
      expertiseContent: [
        { bgColor: "#E6FBFE", text: "Customer Relationship Management (CRM)" },
        { bgColor: "#E3EBFD", text: "Sales And Marketing" },
        { bgColor: "#DCFDE7", text: "Finance & Operations" },
        {
          bgColor: "#EDDDFB",
          text: "Enterprise Architecture & Systems Integration",
        },
        {
          bgColor: "#F6F4EE",
          text: "Digital Marketing Strategy & Analytics",
        },
        { bgColor: "#FFF5E1", text: "Cloud Data Strategy & Migration" },
      ],
    },
  ],
};

const erpTechData = {
  techData: [
    {
      tag: "ONE UNIFIED SOLUTION",
      title: "Our Next-Gen Tech Stack",
      techLogos: [
        { logos: "/assets/icons/microsoft-fabric-logo.svg" },
        { logos: "/assets/icons/microsoft-azure-logo.svg" },
        { logos: "/assets/icons/databricks-logo.svg" },
        { logos: "/assets/icons/purview-logo.svg" },
        { logos: "/assets/icons/dynamics-365-logo.svg" },
        { logos: "/assets/images/bing.png" },
        { logos: "/assets/images/meta-ads.png" },
        { logos: "/assets/images/linkedinAds-logo15.png" },
        { logos: "/assets/images/google-analytics.png" },
        { logos: "/assets/images/semrush-logo9.png" },
        { logos: "/assets/images/ahrefs-logo.png" },
        { logos: "/assets/images/moz-logo.png" },
        { logos: "/assets/images/hootsuite-logo16.png" },
        { logos: "/assets/images/canva-logo19.png" },
        { logos: "/assets/images/mailChimp-logo22.png" },
        { logos: "/assets/images/hubspot-logo23.png" },
        { logos: "/assets/icons/looker-logo.svg" },
        { logos: "/assets/icons/amazon-quick-sight-logo.svg" },
        { logos: "/assets/images/knime.png" },
        { logos: "/assets/icons/power-automate-logo.svg" },
        { logos: "/assets/icons/power-pages-logo.svg" },
        { logos: "/assets/icons/google-ads.png" },
      ],
    },
  ],
};

const erpCommitments = [
  {
    title: "Continuous Innovation",
    description:
      "We embrace cutting-edge solutions that evolve with your business needs.",
  },
  {
    title: "Dedicated Support",
    description:
      "With round the clock support, we ensure your success is our top priority",
  },
  {
    title: "Transparent Communication",
    description:
      "We believe in honesty and clarity, keeping you informed every step of the way.",
  },
  {
    title: "Measurable Results",
    description:
      "We believe in honesty and clarity, keeping you informed every step of the way.",
  },
];

const ERPResourcePlanningPage = ({ pageInfo, caseStudy }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
        <ServiceDetailsHome servicedata={erpHeroData} />

        <DataDrivenSolutions showDataDrivenCrousal={false} />
        <div className="mx-auto">
          <h4 className="font-medium text-center xl:mb-6 lg:mb-6 md:mb-6 sm:mb-4 xs:mb-4 data-driven-title">
            Empowering Industries with Data-Driven Solutions
          </h4>
          <Marquee gradient={false} speed={50}>
            <div className="flex flex-wrap justify-center xl:gap-7 lg:gap-7 md:gap-7 sm:gap-4 xs:gap-3 ml-5 mr-5">
              {[...erpIndustries, ...erpIndustries, ...erpIndustries, ...erpIndustries].map(
                (industry, idx) => (
                  <div
                    key={`${industry.name}-${idx}`}
                    className="flex items-center justify-center bg-white px-6 py-3 border border-[#CFCFCF80] rounded-[11.03px] gap-2 xl:px-8 xl:py-4 lg:px-7 lg:py-3 md:px-6 md:py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-2"
                  >
                    <img
                      src={industry.logo}
                      alt={`${industry.name} logo`}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                    <span className="text-[#7F7F7F] font-normal xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]">
                      {industry.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </Marquee>
        </div>

        <ServiceContent servicedata={erpParagraphData} showTwoLayoutColumn={true}/>
        <OurExpertise servicedata={erpExpertiseData} />
        <Technologies technology={erpTechData} />

        <CaseStudyList
          data={caseStudy}
          sectionTitle="Real Results, Real Impact: This Is How We Drive Success"
        />
        <div className="container bg-[#F9FDFF]">
          <section className="xl:py-10 lg:py-12 md:py-12 sm:py-6 xs:py-6 bg-[#F9FDFF]">
            <div className="text-center sm:space-y-2 xs:space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4">
              <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
                <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
                  Data-Driven Success: From Information to Execution
                </span>
              </div>
              <h2>Data-Driven Success: From Information to Execution</h2>
              <p className="mx-auto max-w-[62rem] text-black-300 xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[14px]">
                However, we are not static and limit ourselves to a specific field. We are dedicated to data visualization along with customized digital marketing services.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-10 xl:mt-10 md:mt-6 sm:mt-6 xs:mt-6">
              {erpCommitments.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[18px] bg-white px-6 py-6 shadow-[0px_4px_16.5px_0px_rgba(49,112,144,0.11)] transition-all duration-300 hover:shadow-[0px_12px_30px_0px_rgba(49,112,144,0.20)]"
                >
                  <p className="mb-2 p-large font-semibold text-left text-black-100">
                    {item.title}
                  </p>
                  <p className="text-left xl:text-16 lg:text-16 md:text-16 sm:text-13 xs:text-13 text-gray-800 text-muted-foreground max-h-[24px] overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 group-hover:max-h-[140px] group-hover:whitespace-normal group-hover:overflow-y-auto featured-blogs-scrollbar pr-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const tagPriority = [
    "Technology",
    "Education",
    "E-commerce",
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
  ];

  let caseStudy: any[] = [];
  const pageInfo = {
    title: "ERP Implementation for Business Centric IT Ecosystem",
    metaTitle: "ERP Implementation for Business Centric IT Ecosystem",
    metaDescription:
      "Simplify, Automate, and Scale Your Future with Tomorrow's Business Tools, Today",
    heroImage: [{ publicUrl: "/assets/images/enterprise-image.webp" }],
  };

  try {
    const caseStudyRes = await fetch(
      `${AHD_HOST}/page?filter[groups][]=case-studies&orderBy=&limit=80&offset=0`
    );
    if (!caseStudyRes.ok) {
      throw new Error(`Failed to fetch case studies: ${caseStudyRes.status}`);
    }
    const caseStudyData = await caseStudyRes.json();
    const allCaseStudies = caseStudyData?.rows || [];

    const scored = allCaseStudies.map((item: any) => {
      const tags = (item?.tags || []).map((tag: string) => tag.toLowerCase());
      const score = tagPriority.reduce((acc, term) => {
        return tags.some((tag: string) => tag.includes(term.toLowerCase()))
          ? acc + 1
          : acc;
      }, 0);
      return { item, score };
    });

    const matched = scored
      .filter((entry: any) => entry.score > 0)
      .sort((a: any, b: any) => b.score - a.score)
      .map((entry: any) => entry.item);

    const remaining = allCaseStudies.filter(
      (item: any) => !matched.some((m: any) => m?.slug === item?.slug)
    );

    caseStudy = [...matched, ...remaining].slice(0, 3);
  } catch (error) {
    console.error("Error fetching case studies:", error);
    caseStudy = [];
  }

  return {
    props: {
      pageInfo,
      caseStudy,
    },
  };
};

export default ERPResourcePlanningPage;
