import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import OurCommitment from "@/components/services/OurCommitment";
import FAQ from "@/components/shared/FAQ";

// FAQ data structure
const faqData = [
  {
    question: "What services does Dream IT Consulting Services offer?",
    answer: (
      <>
        Dream IT Consulting Services is a trustworthy provider of IT services
        that offers end-to-end digital transformations that give businesses
        scalable solutions for expansion, productivity, and competitive
        advantage. These services include{" "}
        <a
          href="https://www.dreamitcs.com/services/cloud-data-management/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          cloud data management
        </a>
        , Microsoft Power BI, and D365 CRM implementation.
      </>
    ),
  },
  {
    question: "How does cloud data management benefit my business?",
    answer: (
      <>
        Our cloud data management services ensure a safe, secure and scalable
        data ecosystem. Combined with{" "}
        <a
          href="https://www.dreamitcs.com/services/advanced-analytics/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft Power BI services
        </a>
        , we help businesses centralise assets, streamline procedures, and take
        advantage of insights for lasting digital success.
      </>
    ),
  },
  {
    question: "Can you help us migrate our existing data on the cloud?",
    answer: (
      <>
        Yes. As an{" "}
        <a
          href="https://www.dreamitcs.com/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          experienced IT service company
        </a>
        , we provide easy migration through cloud data management services,
        minimum downtime, safe data and future data infrastructure, ensuring
        alignment with enterprise compliance standards.
      </>
    ),
  },
  {
    question: "Which tools do you use for data analytics and visualisation?",
    answer:
      "We use Power BI, Tableau and Microsoft Fabric to create real-time reports, develop dashboards and analytics. This process converts raw data into valuable insight that aligns with our organisational goals and enhances decision-making.",
  },
  {
    question: "Do you provide a custom dashboard and report?",
    answer: (
      <>
        Yes. We provide{" "}
        <a
          href="https://www.dreamitcs.com/services/advanced-analytics/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Power BI dashboard development services
        </a>{" "}
        that suit KPI during retail, CPG, manufacturing, automotive, real
        estate, and technology and AI, which are accompanied by sales,
        operations, human resources, and finance with actionable insights.
      </>
    ),
  },
  {
    question: "How can your digital marketing services help my brand grow?",
    answer: (
      <>
        Our digital marketing solutions combine dashboard development services
        with advanced analytics and Microsoft Power BI services, which create
        data-operated strategies using{" "}
        <a
          href="https://www.dreamitcs.com/services/digital-marketing/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEO, PPC and social media
        </a>{" "}
        to increase visibility, engagement and average growth.
      </>
    ),
  },
  {
    question:
      "Is there any consultation or search phase before starting the project?",
    answer:
      "Yes. Each engagement begins with a wide consultation, where our IT service company experts align your goals with cloud data management services, which ensure scalable and impressive business solutions.",
  },
  {
    question: "Do you offer ongoing support and adaptation?",
    answer: (
      <>
        Definitely. Dream IT Consulting Services provides continuous adaptation
        in cloud data management services and Microsoft Power BI services, which
        ensure long-term system reliability, developed performance and average
        results for{" "}
        <a
          href="https://www.dreamitcs.com/services/erp-implementation-for-business-centric-it-ecosystem/"
          className="text-[#00A9FF] underline hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          modern business ecosystems
        </a>
        .
      </>
    ),
  },
];

const MainPageServices = ({
  data,
  showTag,
  showTitle,
  showDescription,
}: any) => {
  return (
    <section className=" text-white pt-60 pb-60">
      <div className="mx-auto text-center">
        {showTag && (
          <div className="relative inline-flex justify-center align-middle bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-2 rounded-full xl:mb-[20px] lg:mb-[20px] md:mb-[20px] sm:mb-[12px] xs:mb-[12px]">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] text-center font-bold mb-0">
              {data.tag}
            </span>
          </div>
        )}

        {showTitle && (
          <h3 className="mb-3 px-2 our-services-title">{data?.title}</h3>
        )}

        {showDescription && (
          <h6 className="mx-auto md:max-w-[53rem] px-2 text-[#596168]">
            {data?.subtitle}
          </h6>
        )}
      </div>
      <div className="bg-[url('/assets/images/background-stripes.webp')] bg-cover bg-center">
        <div className="main-services-grid-for-web">
          {data?.ourServiesFeatures.map(
            ({ src, title, link, subtitle }: any) => (
              <div
                className="our-services-container xl:min-h-[370px] lg:min-h-[310px] md:min-h-[300px] sm:min-h-[300px] xs:min-h-[300px] relative group overflow-hidden cursor-pointer"
                key={title}
              >
                <Link href={link}>
                  <div className="transition-transform duration-1000 ease-out group-hover:translate-y-[-10px]">
                    <img
                      src={src}
                      alt={title}
                      className="w-full transition-transform duration-1000 ease-out group-hover:transform group-hover:translate-y-[-15px]"
                    />
                  </div>
                  <div className="absolute text-[#1c1c1c] bg-white bottom-0 w-full px-4 py-3 border-2 min-h-[90px] group-hover:h-auto overflow-hidden transition-all duration-1000 ease-out border-[#EAEAEA] rounded-[18px] content-center">
                    <div className="flex items-center justify-between gap-4">
                      <h5 className="services-card-title">{title}</h5>
                      <div>
                        <div className="bg-[#072032] flex text-white py-3 px-3 text-lg sm:text-base xs:text-base md:text-lg lg:text-xl xl:text-xl font-bold rounded-lg transition-transform duration-1000 ease-out hover:scale-110">
                          <FaArrowRightLong />
                        </div>
                      </div>
                    </div>
                    <div className="group-hover:opacity-100 group-hover:max-h-40 opacity-0 max-h-0 overflow-hidden transition-all duration-1000 ease-out">
                      <h6>{subtitle}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
        <OurCommitment />
        <FAQ items={faqData} />
      </div>
    </section>
  );
};

export default MainPageServices;
