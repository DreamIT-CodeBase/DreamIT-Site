import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

// FAQ data structure
export const faqData = [
  {
    question: "What services does DreamITCS offer?",
    answer:
      "DreamITCS provides end-to-end digital solutions including Cloud Data Management, Advanced Data Analytics & Visualization, and Digital Marketing. We help businesses harness technology to make smarter decisions, scale efficiently, and reach their target audiences.",
  },
  {
    question: "How does Cloud Data Management benefit my business?",
    answer:
      "Our Cloud Data Management services ensure secure, scalable, and cost-effective storage and access to your data. With support for platforms like Microsoft Azure, we help you centralize, migrate, and manage your data while ensuring compliance and high availability. ",
  },
  {
    question: "Can you help us migrate our existing data to the cloud?",
    answer:
      "Yes, we specialize in data migration services, ensuring a smooth and secure transition of your data from legacy systems or on-premise environments to the cloud with minimal downtime.",
  },
  {
    question: "What tools do you use for Data Analytics and Visualization?",
    answer:
      "We use industry-leading tools like Power BI, Tableau, and Microsoft Fabric for real-time reporting, dashboard development, and advanced analytics. Our team transforms raw data into interactive and actionable insights tailored to your business goals.",
  },
  {
    question: "Do you provide custom dashboards and reports?",
    answer:
      "Absolutely. We develop custom dashboards and reports that reflect key performance indicators (KPIs) specific to your industry and operational needs, helping you make data driven decisions faster.",
  },
  {
    question: "How can your Digital Marketing services help my brand grow?",
    answer:
      "Our Digital Marketing experts use a mix of SEO, PPC, social media marketing, and content strategy to drive traffic, boost engagement, and increase conversions. We craft campaigns that are performance-driven and aligned with your business objectives.",
  },
  {
    question:
      "Is there a consultation or discovery phase before starting a project?",
    answer:
      "Yes, every engagement begins with a detailed consultation to understand your goals, challenges, and current infrastructure. This ensures we offer the most effective solution tailored to your needs.",
  },
  {
    question: "Do you offer ongoing support and optimization?",
    answer:
      "Yes, we provide continuous support, monitoring, and optimization for all services including cloud environments, analytics dashboards, and digital marketing campaigns to ensure peak performance.",
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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-[40px] font-bold text-center mb-12 text-black">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-transparent border-b border-gray-700 relative"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="mb-0 p-large font-semibold text-black">
                  {faq.question}
                </span>
                <span
                  className="mb-0 p-large font-semibold text-black transition-transform duration-200 ease-in-out"
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
              <div className="p-4">
                <p className="xl:text-16 lg:text-16 md:text-16 sm:text-13 xs:text-13 text-gray-800 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
