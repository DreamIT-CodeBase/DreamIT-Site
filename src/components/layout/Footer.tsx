import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const discoverLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Glossary", href: "/glossary" },
    { label: "Career", href: "/career" },
  ];
  const footerServiceLinks = [
    {
      label: "Digital Transformation",
      href: "/services/digital-transformation",
    },
    { label: "Cloud Data", href: "/services/cloud-data-management" },
    { label: "Enterprise AI", href: "/services/enterprise-ai-solutions" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    {
      label: "Advanced Analytics",
      href: "/services/advanced-analytics",
    },
    {
      label: "ERP Implementation",
      href: "/services/erp-implementation-for-business-centric-it-ecosystem",
    },
  ];

  return (
    <footer className="w-full pt-0 pb-0 z-[1000] overflow-x-hidden">
      <div className="bg-[#072032] text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 pt-14 lg:pt-16 pb-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1.45fr)_minmax(180px,0.92fr)_minmax(160px,0.78fr)_minmax(290px,1.12fr)] items-start gap-y-10 md:gap-x-12 xl:gap-x-16">
        <div className="flex flex-col max-w-[31rem] xl:pr-6">
          <div className="flex items-center mb-6">
            <img
              className="w-44 h-auto"
              src="/assets/images/dream-it-logo-mobile-version.png"
              alt="Logo"
            />
          </div>
          <h6 className="text-[#D7E2F0] xl:text-[18px] lg:text-[17px] md:text-[15px] sm:text-[14px] xs:text-[14px] leading-[1.55]">
            At Dream IT, we specialize in helping businesses thrive through
            cutting-edge technology solutions like Cloud Data Management,
            Advanced Analytics & Visualization, Digital Marketing, and more.
          </h6>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[20px] leading-none font-semibold mb-5 text-white">
            Our Services
          </h3>
          <ul className="flex flex-col gap-[3px]">
            {footerServiceLinks.map((solution) => (
              <li key={solution.href}>
                <Link
                  href={solution.href}
                  className="inline-block text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
                >
                  {solution.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[20px] leading-none font-semibold mb-5 text-white">
            Discover
          </h3>
          <ul className="flex flex-col gap-[3px]">
            {discoverLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#void"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalVisible(true);
                }}
                className="inline-block text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col max-w-[22rem]">
          <h3 className="text-[20px] leading-none font-semibold mb-5 text-white">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex p-medium gap-3.5 items-start">
              <img
                src="/assets/icons/call-icon.svg"
                alt=""
                className="h-[20px] mt-[4px] shrink-0"
                loading="lazy"
              />
              <Link
                href="tel:+919416484500"
                className="text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
              >
                +91 94164-84500
              </Link>
            </li>
            <li className="flex p-medium gap-3.5 items-start">
              <img
                src="/assets/icons/mail-icon.svg"
                alt=""
                className="h-[20px] mt-[4px] shrink-0"
                loading="lazy"
              />
              <Link
                href="mailto:connect@dreamitcs.com"
                className="text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
              >
                connect@dreamitcs.com
              </Link>
            </li>

            <li className="flex p-medium gap-3.5 items-start">
              <img
                src="/assets/icons/location-icon.svg"
                alt=""
                className="h-[20px] mt-[4px] shrink-0"
                loading="lazy"
              />
              <Link
                href="https://share.google/5zGNE4Ul8ZT527d2J"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2F0] hover:text-white text-[17px] leading-[1.55] transition-colors"
              >
                1st Floor, Orchid Business Park, Central Park II, Sector 48,
                Gurugram, Haryana 122004
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links and Copyright */}

      <div className="border-t border-[#2E5168] mt-10 pt-6 pb-1">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Media */}
          <div className="flex items-center justify-center gap-6 mb-3 md:mb-0">
            <Link
              href="https://in.linkedin.com/company/dreamitcs"
              aria-label="LinkedIn"
              target="_blank"
            >
              <img
                src="/assets/icons/linkedIn.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </Link>
            <Link
              href="https://x.com/Dreamitcs"
              aria-label="Twitter"
              target="_blank"
            >
              <img
                src="/assets/icons/twitter.svg"
                alt="Twitter"
                className="w-5 h-5"
              />
            </Link>
            <Link
              href="https://www.instagram.com/dreamitcs/"
              aria-label="Instagram"
              target="_blank"
            >
              <img
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </Link>
            <Link
              href="https://www.facebook.com/DreamITweb"
              aria-label="Facebook"
              target="_blank"
            >
              <img
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </Link>
            <Link
              target="_blank"
              href="https://medium.com/@dreamit.social"
              aria-label="Medium"
            >
              <img
                src="/assets/icons/medium.svg"
                alt="Medium"
                className="w-5 h-5"
              />
            </Link>
          </div>

          {/* Privacy Links */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-1 text-[#FFFFFF] text-sm">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[#FFFFFF] text-sm mt-2 md:mt-0">
            Copyright &copy; {year}. All rights reserved.
          </div>
        </div>
      </div>
      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
