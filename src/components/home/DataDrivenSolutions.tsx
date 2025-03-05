import React from "react";
import Marquee from "react-fast-marquee";

const DataDrivenSolutions = ({ showInsightsIndustries = false }: any) => {
  const industries = [
    { name: "Healthcare", src: "/assets/icons/healthcare.svg" },
    { name: "Finance", src: "/assets/icons/finance.svg" },
    { name: "Retail", src: "/assets/icons/retail.svg" },
    { name: "Manufacturing", src: "/assets/icons/manufacturing.svg" },
    { name: "Technology", src: "/assets/icons/technology.svg" },
    { name: "Education", src: "/assets/icons/education.svg" },
    { name: "E-commerce", src: "/assets/icons/e-commerce.svg" },
  ];
  const industriesLogo = [
    {
      name: "Microsoft Fabric",
      src: "/assets/icons/industriesIcon/microsoft-fabric-logo1.svg",
    },
    {
      name: "Microsoft Azure",
      src: "/assets/icons/industriesIcon/microsoft-azure-logo2.svg",
    },
    {
      name: "Databricks",
      src: "/assets/icons/industriesIcon/databricks-logo.svg",
    },
    {
      name: "Microsoft Purview",
      src: "/assets/icons/industriesIcon/purview-logo4.svg",
    },
    { name: "Power BI", src: "/assets/icons/industriesIcon/powerbi-logo5.svg" },
    { name: "Loker", src: "/assets/icons/industriesIcon/loker-logo6.svg" },
    {
      name: "Amazon QuickSight",
      src: "/assets/icons/industriesIcon/amazon-quicksight-logo7.svg",
    },
    {
      name: "Microsoft Dynamics 365",
      src: "/assets/icons/industriesIcon/dynamic-365-logo8.svg",
    },
    { name: "Semrush", src: "/assets/icons/industriesIcon/semrush-logo9.svg" },
    { name: "Ahrefs", src: "/assets/icons/industriesIcon/ahrefs-logo10.svg" },
    { name: "Moz", src: "/assets/icons/industriesIcon/moz-logo11.svg" },
    {
      name: "Google Search Console",
      src: "/assets/icons/industriesIcon/googleSearchConsole-logo11.svg",
    },
    {
      name: "Microsoft Advertising",
      src: "/assets/icons/industriesIcon/microsoft-advertising-logo12.svg",
    },
    {
      name: "Bing Ads",
      src: "/assets/icons/industriesIcon/binfAds-logo13.svg",
    },
    {
      name: "Facebook Ads",
      src: "/assets/icons/industriesIcon/facebookAds-logo14.svg",
    },
    {
      name: "LinkedIn Ads",
      src: "/assets/icons/industriesIcon/linkedinAds-logo15.svg",
    },
    {
      name: "Hootsuite",
      src: "/assets/icons/industriesIcon/hootsuite-logo16.svg",
    },
    { name: "Buffer", src: "/assets/icons/industriesIcon/buffer-logo17.svg" },
    {
      name: "Sprout Social",
      src: "/assets/icons/industriesIcon/sprout-logo18.svg",
    },
    { name: "Canva", src: "/assets/icons/industriesIcon/canva-logo19.svg" },
    {
      name: "Creative Cloud",
      src: "/assets/icons/industriesIcon/creative-logo20.svg",
    },
    {
      name: "Grammarly",
      src: "/assets/icons/industriesIcon/grammarly-logo21.svg",
    },
    {
      name: "MailChimp",
      src: "/assets/icons/industriesIcon/mailChimp-logo22.svg",
    },
    { name: "HubSpot", src: "/assets/icons/industriesIcon/hubspot-logo23.svg" },
  ];

  const industries1 = [...industries, ...industries];
  const industries2 = [...industriesLogo, ...industriesLogo];
  return (
    <div>
      <div className=" mx-auto  xl:pt-10 lg:pt-10 md:pt-10 sm:pt-2 xs:pt-2 xl:pb-10 lg:pb-10 md:pb-5 sm:pb-5 xs:pb-5">
        <h4 className="font-medium text-center mb-8 data-driven-title">
          Empowering Industries with Data-Driven Solutions
        </h4>
        {!showInsightsIndustries && (
          <Marquee gradient={false} speed={50}>
            <div className="flex flex-wrap justify-center xl:gap-7 lg:gap-7 md:gap-7 sm:gap-4 xs:gap-3 ml-5 mr-5">
              {industries1.map(({ name, src }) => (
                <div
                  key={name}
                  className="flex items-center justify-center bg-white px-6 py-3 border border-[#CFCFCF80] rounded-[11.03px] gap-2 
              xl:px-8 xl:py-4 lg:px-7 lg:py-3 md:px-6 md:py-3 sm:px-4 sm:py-2 xs:px-3 xs:py-2"
                >
                  <img
                    className="w-8 h-7 sm:w-7 sm:h-6 xs:w-6 xs:h-5"
                    alt={name}
                    src={src}
                    loading="lazy"
                  />
                  <span className="text-[#7F7F7F] font-normal xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        )}

        {showInsightsIndustries && (
          <Marquee gradient={false} speed={50}>
            <div className="flex flex-wrap justify-center gap-7 ml-5 mr-5">
              {industries2.map(({ name, src }) => (
                <div key={name}>
                  <img alt={name} src={src} className="industries-logo"/>
                </div>
              ))}
            </div>
          </Marquee>
        )}
      </div>
    </div>
  );
};

export default DataDrivenSolutions;
