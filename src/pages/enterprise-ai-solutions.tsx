import CaseStudyList from "@/components/caseStudy/CaseStudyList";
import DataDrivenSolutions from "@/components/home/DataDrivenSolutions";
import Layout from "@/components/layout/Layout";
import FAQ from "@/components/shared/FAQ";
import OrganizationSEO from "@/components/shared/OrganizationSEO";
import OurExpertise from "@/components/serviceDetails/OurExpertise";
import ServiceContent from "@/components/serviceDetails/ServiceContent";
import ServiceDetailsHome from "@/components/serviceDetails/ServiceDetailsHome";
import { AHD_HOST } from "@/utils/constant";
import Marquee from "react-fast-marquee";

const enterpriseHeroData = {
  title: "Enterprise AI Solutions",
  description:
    "Use the comprehensive Microsoft AI stack to deliver dependable, production grade Agentic Enterprise Solutions!",
  heroImage: "/assets/images/aienterprisetitle.png",
  heroImageClassName: "rounded-[28px] object-cover max-w-[560px] mx-auto",
};

const enterpriseExpertiseData = {
  ourExpertise: [
    {
      tag: "OUR EXPERTISE AND CAPABILITIES",
      title: "Our Enterprise AI Solutions",
      expertiseContent: [
        { bgColor: "#E6FBFE", text: "Autonomous Agents" },
        { bgColor: "#E3EBFD", text: "Enterprise Data Grounding" },
        { bgColor: "#DCFDE7", text: "MCP Servers" },
        { bgColor: "#EDDDFB", text: "Agentic Governance" },
        { bgColor: "#F6F4EE", text: "Process Automations" },
      ],
    },
  ],
};

const enterpriseParagraphData = {
  editor: "html",
  sections: [
    {
      layoutType: "LEFT_IMAGE_RIGHT_CONTENT",
      imageUrls: "/assets/images/aienterprisepara.png",
      imageClassName: "rounded-[24px]",
      contentClassName: "enterprise-ai-content",
      title: "The Future of Enterprise AI",
      content: `
        <p><strong>Enterprise AI is moving from assistance to ownership.</strong> The market is shifting beyond prompt-and-response tools toward agentic systems that understand context, reason across steps, and execute work with minimal human oversight.</p>
        <h5>What Is Changing</h5>
        <ul>
          <li>Reactive chatbots are being replaced by AI coworkers that can plan, act, and adapt.</li>
          <li>Reasoning agents can handle complex, multi-step workflows instead of single-turn responses.</li>
          <li>Security, governance, and observability now matter just as much as raw model capability.</li>
        </ul>
        <div class="enterprise-ai-callout">
          <p><strong>Dream IT uses the complete Microsoft AI stack</strong> to build reliable, governed, responsible, and production-grade enterprise AI solutions that are designed for real business outcomes.</p>
        </div>
        <h5>Why Enterprises Are Moving Now</h5>
        <ul>
          <li>Microsoft 365 Copilot and Large Language Models (LLMs) delivered strong early wins in drafting, summarization, and information retrieval.</li>
          <li>Many organizations have now reached a plateau because human coordination is still the main execution bottleneck.</li>
          <li>The next phase of transformation is about autonomous systems that own workflows, not just answer questions.</li>
        </ul>
        <p>This is where Enterprise AI Consulting becomes critical: designing systems that are secure, auditable, future-ready, and capable of operating reliably in production.</p>
      `,
    },
  ],
};

const industries = [
  { name: "Pharmaceuticals", logo: "/assets/icons/healthcare.svg" },
  { name: "MedTech", logo: "/assets/icons/technology.svg" },
  { name: "Automotive", logo: "/assets/icons/technology.svg" },
  { name: "Real Estate", logo: "/assets/icons/retail.svg" },
  { name: "E-commerce", logo: "/assets/icons/e-commerce.svg" },
  { name: "FMCG Retail", logo: "/assets/icons/retail.svg" },
];

const aiTechStack = [
  { name: "Copilot Studio", logo: "/assets/images/copilotstudioinaipage.png" },
  { name: "Microsoft Foundry", logo: "/assets/images/microsoft-foundry.png" },
  { name: "CrewAI", logo: "/assets/images/crewaiinai.png" },
  { name: "LangChain", logo: "/assets/images/langchain.png" },
  { name: "Microsoft Fabric", logo: "/assets/images/msfabricinai.png" },
  { name: "Foundry IQ", logo: "/assets/images/foundryiq.png" },
  { name: "Microsoft Agent 365", logo: "/assets/images/micosft365.png" },
  { name: "n8n", logo: "/assets/images/n8n.png" },
  { name: "Zapier", logo: "/assets/images/zapier.png" },
  { name: "Power Automate", logo: "/assets/images/powerautomateinai.png" },
  { name: "Power Apps", logo: "/assets/images/powerapps.png" },
  { name: "Dataverse", logo: "/assets/images/dataverse.png" },
  { name: "Microsoft Agent Framework SDK", logo: "/assets/images/microsoft%20agent%20framework.png" },
  {
    name: "Docker",
    logo: "/assets/images/docker.png",
    logoWrapClassName: "w-9 h-9",
    logoClassName: "scale-[1.25]",
  },
  {
    name: "Kubernetes",
    logo: "/assets/images/kubernetes.png",
    logoWrapClassName: "w-9 h-9",
    logoClassName: "scale-[1.25]",
  },
];

const commitments = [
  {
    title: "Observability and Auditability",
    description:
      "Every AI agent deployed by us is registered within the Microsoft Agent 365 registry, providing IT leaders with a complete inventory and a unified dashboard to govern AI and check connections among users, agents, and resources.",
  },
  {
    title: "Security as a Core Primitive",
    description:
      'We use a "Zero Trust" architecture, following practices for responsible AI, where every agent interaction is governed by Microsoft Entra ID and protected by Microsoft Purview to prevent sensitive data leakage or unauthorized access.',
  },
  {
    title: "Production-Ready",
    description:
      "We ensure that all agentic workflows include automated evaluation and quality control. We grade agent performance using Microsoft’s latest evaluation tools to ensure that autonomous actions are still predictable and correct.",
  },
  {
    title: "Future-Proof Road mapping",
    description:
      "Our solutions are built to evolve. We ensure that every system is compatible with the latest advancements in Microsoft Azure AI Foundry Agent Service and Microsoft Fabric integration, allowing for a seamless transition as new capabilities are released.",
  },
];

const faqs = [
  {
    question:
      "How do you ensure that AI agents don't access data they aren't supposed to?",
    answer:
      "We implement Enterprise Identity through Microsoft Entra ID. This ensures the AI agent only has access to the specific data and systems that the human user, on whose behalf it is acting, has permission to see. Furthermore, we use Microsoft Purview to enforce data sensitivity labelling and prevent the leakage of confidential information. This is part of our broader Enterprise AI Solutions strategy, which emphasizes responsible AI and governed access.",
  },
  {
    question:
      "What is the benefit of the Model Context Protocol (MCP) for my business?",
    answer:
      "MCP Servers allow your AI agents to connect to all your enterprise systems (SAP, Salesforce, Microsoft Fabric, Internal Databases) using a single standardized protocol. This ends the need for expensive, time-consuming custom API development for every new AI tool you want to use, making your AI ecosystem more flexible, scalable, and easier to govern. MCP is a cornerstone of building production-grade AI and reliable agentic enterprise solutions.",
  },
  {
    question:
      "How does DreamIT help us manage \"Shadow Agents\" that employees might create themselves?",
    answer:
      "We use the Microsoft Agent 365 control plane, which provides a Registry of every agent in your organization. This allows IT leaders to detect unregistered or unsanctioned agents, assess their risk, govern and quarantine them if they do not meet security, compliance or responsible AI standards. We also provide Enterprise AI Consulting Services to assess the risk of AI systems and provide mitigations measures and systems.",
  },
  {
    question:
      "Can AI agents really help in highly regulated industries like Pharmaceuticals?",
    answer:
      "Yes. Agentic AI is particularly powerful in pharma for automating medical document generation, regulatory submission tracking, and clinical trial monitoring. By using governed AI agents that leave a clear audit trail, firms can reduce clinical trial monitoring costs and speed up completion timelines while keeping strict compliance. Using Microsoft Copilot Studio Development Services for such agents ensures compliance with strict EU and FDA regulations.",
  },
  {
    question:
      "How do your agents manage complex tasks that require self-correction?",
    answer:
      "We use Reasoning Agents and Reflection capabilities. If an agentic automation solution meets an error or an ambiguous result while executing a workflow (like analysing a complex contract), it can reason through the issue, try a different approach, or check its own work before presenting the result or escalating to a human. This is a key feature of agentic automation and ensures reliable AI solutions.",
  },
  {
    question: "What is the Plateau, and how does Dream IT help us overcome it?",
    answer:
      "The Plateau refers to the point where simple AI assistants (like basic chatbots) stop delivering significant new productivity gains because they still need constant human prompting and oversight. DreamIT moves you beyond this by developing and deploying autonomous agents that take the initiative, perform multi-step planning, and execute workflows independently. These agents on Copilot Studio act as digital coworkers, not just tools, enabling true production AI adoption.",
  },
  {
    question: "How do multi-agent crews improve enterprise workflows?",
    answer:
      "Multi-agent crews are teams of AI agents that collaborate on complex tasks, such as integrating SAP data and Salesforce data together. By using Microsoft Copilot development and Microsoft Fabric AI solutions, these crews can divide tasks, self-correct, and deliver faster and accurate outcomes. This approach transforms enterprises into agentic enterprises with scalable, production-ready automation.",
  },
  {
    question: "Why choose DreamIT as your AI Agent Development Company?",
    answer:
      "DreamIT Consulting Services specializes in building production AI agents using the Microsoft AI stack, including Copilot Studio, Agents 365 solutions, and Microsoft Foundry agents. As an AI Agent Development Company, we design governed, reliable, and compliant AI systems tailored to your industry. Our ability ensures that your organization benefits from enterprise AI solutions that are future-proof, secure, and aligned with responsible AI practices.",
  },
];

const EnterpriseCommitment = () => {
  return (
    <div className="container bg-[#F9FDFF]">
      <section className="xl:py-10 lg:py-12 md:py-12 sm:py-6 xs:py-6 bg-[#F9FDFF]">
        <div className="text-center sm:space-y-2 xs:space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              OUR COMMITMENT
            </span>
          </div>
          <h2>Secure, Governed &amp; Reliable AI</h2>
          <p className="mx-auto max-w-[62rem] text-black-300 xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[14px]">
            We deliver governed, secure, and production-ready enterprise AI with full visibility and dependable outcomes.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-10 xl:mt-10 md:mt-6 sm:mt-6 xs:mt-6">
          {commitments.map((item) => (
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
  );
};

const EnterpriseAISolutionsPage = ({ pageInfo, caseStudy }: any) => {
  return (
    <>
      <OrganizationSEO />
      <Layout pageInfo={pageInfo}>
        <ServiceDetailsHome servicedata={enterpriseHeroData} />

        <DataDrivenSolutions showDataDrivenCrousal={false} />
        <div className="mx-auto">
          <h4 className="font-medium text-center xl:mb-6 lg:mb-6 md:mb-6 sm:mb-4 xs:mb-4 data-driven-title">
            Optimising Industries with AI
          </h4>
          <Marquee gradient={false} speed={50}>
            <div className="flex flex-wrap justify-center xl:gap-7 lg:gap-7 md:gap-7 sm:gap-4 xs:gap-3 ml-5 mr-5">
              {[...industries, ...industries, ...industries, ...industries].map(
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

        <ServiceContent servicedata={enterpriseParagraphData} showTwoLayoutColumn={true}/>
        <OurExpertise servicedata={enterpriseExpertiseData} />

        <div className="container pt-60 pb-60 text-center" id="jobOpening">
          <div className="relative inline-block bg-[#ECF9FF] px-5 xl:py-2 lg:py-2 md:py-2 sm:py-2 xs:py-[6px] rounded-full mb-3 ">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              THE ENTERPRISE AI ENGINE
            </span>
          </div>
          <h2 className="xl:mb-12 lg:mb-12 md:mb-4 sm:lg-4 xs:mb-4 max-w-[64rem] m-auto ">
            Our AI-Driven Tech Stack
          </h2>

          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            <div className="flex justify-center gap-4 2xl:gap-6 ml-4 mr-4">
              {[...aiTechStack, ...aiTechStack, ...aiTechStack].map(
                (tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="rounded-full border border-[#CFCFCF80] bg-white px-5 py-3 flex items-center gap-3 min-h-[56px]"
                  >
                    <span
                      className={`w-7 h-7 flex items-center justify-center shrink-0 ${
                        tool.logoWrapClassName || ""
                      }`}
                    >
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className={`max-w-full max-h-full object-contain ${
                          tool.logoClassName || ""
                        }`}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "/assets/icons/technology-logo.svg";
                        }}
                      />
                    </span>
                    <span className="whitespace-nowrap text-[#596168] font-semibold xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[13px]">
                      {tool.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </Marquee>
        </div>

        <CaseStudyList
          data={caseStudy}
          sectionTitle="Agentic AI Drives Results"
        />
        <EnterpriseCommitment />
        <FAQ
          items={faqs}
          title="Frequently Asked Questions"
          subtitle="Not all questions are answered by AI"
        />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const tagPriority = [
    "AI",
    "Pharmaceuticals",
    "MedTech",
    "Automotive",
    "Real Estate",
    "E-commerce",
    "FMCG",
    "Retail",
  ];

  let caseStudy: any[] = [];
  const pageInfo = {
    title: "Scalable Enterprise AI Services | Secure LLM & GenAI Integration",
    metaTitle:
      "Scalable Enterprise AI Services | Secure LLM & GenAI Integration",
    metaDescription:
      "Transform your business with enterprise AI solutions. Automate workflows, improve decision-making, and scale operations with expert AI consulting and implementation services.",
    heroImage: [{ publicUrl: "/assets/images/aienterprisetitle.png" }],
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

export default EnterpriseAISolutionsPage;
