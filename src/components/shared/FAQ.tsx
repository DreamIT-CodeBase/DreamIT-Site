import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

// FAQ data structure
export const faqData = [
  {
    question: "What services does Dream IT Consulting Services offer?",
    answer:
      "Dream IT Consulting Services is a trustworthy provider of IT services that offers end-to-end digital transformations that give businesses scalable solutions for expansion, productivity, and competitive advantage. These services include cloud data management, Microsoft Power BI, and D365 CRM implementation.",
  },
  {
    question: "How does cloud data management benefit my business?",
    answer:
      "Our cloud data management services ensure a safe, secure and scalable data ecosystem. Combined with Microsoft Power BI services, we help businesses centralise assets, streamline procedures, and take advantage of insights for lasting digital success.",
  },
  {
    question: "Can you help us migrate our existing data on the cloud?",
    answer:
      "Yes. As an experienced IT service company, we provide easy migration through cloud data management services, minimum downtime, safe data and future data infrastructure, ensuring alignment with enterprise compliance standards.",
  },
  {
    question: "Which tools do you use for data analytics and visualisation?",
    answer:
      "We use Power BI, Tableau and Microsoft Fabric to create real-time reports, develop dashboards and analytics. This process converts raw data into valuable insight that aligns with our organisational goals and enhances decision-making.",
  },
  {
    question: "Do you provide a custom dashboard and report?",
    answer:
      "Yes. We provide Power BI dashboard development services that suit KPI during retail, CPG, manufacturing, automotive, real estate, and technology and AI, which are accompanied by sales, operations, human resources, and finance with actionable insights.",
  },
  {
    question: "How can your digital marketing services help my brand grow?",
    answer:
      "Our digital marketing solutions combine dashboard development services with advanced analytics and Microsoft Power BI services, which create data-operated strategies using SEO, PPC and social media to increase visibility, engagement and average growth.",
  },
  {
    question:
      "Is there any consultation or search phase before starting the project?",
    answer:
      "Yes. Each engagement begins with a wide consultation, where our IT service company experts align your goals with cloud data management services, which ensure scalable and impressive business solutions.",
  },
  {
    question: "Do you offer ongoing support and adaptation?",
    answer:
      "Definitely. Dream IT Consulting Services provides continuous adaptation in cloud data management services and Microsoft Power BI services, which ensure long-term system reliability, developed performance and average results for modern business ecosystems.",
  },
];

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleQuestion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container">
      <section className="xl:py-10 lg:py-12 md:py-12 sm:py-6 xs:py-6">
        <div className="text-center sm:space-y-2 xs:space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              FAQ
            </span>
          </div>
          <h2 className="text-[40px] font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="lg:mt-10 xl:mt-10 md:mt-6 sm:mt-6 xs:mt-6">
          <div className="bg-white rounded-[18px]">
            <div>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="xl:py-8 lg:py-8 md:py-8 sm:py-4 xs:py-4 px-6 mx-6 border-b border-[#000000] last:border-b-0"
                >
                  <button
                    className="w-full text-left relative"
                    onClick={() => toggleQuestion(index)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="mb-0 p-large font-semibold text-black">
                        {faq.question}
                      </span>
                      <span
                        className="mb-0 p-large font-semibold text-[#00A9FF] transition-transform duration-200 ease-in-out"
                        style={{
                          transform: openIndices.includes(index)
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <IoAdd />
                      </span>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden"
                    style={{
                      transition: openIndices.includes(index)
                        ? "max-height 400ms ease-in-out"
                        : "max-height 200ms ease-out",
                      maxHeight: openIndices.includes(index) ? "500px" : "0",
                    }}
                  >
                    <div className="pt-4">
                      <p className="xl:text-16 lg:text-16 md:text-16 sm:text-13 xs:text-13 text-gray-800 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
