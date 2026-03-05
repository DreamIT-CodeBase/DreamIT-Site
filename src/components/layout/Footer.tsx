import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <footer className="w-full pt-0 pb-0 z-[1000] overflow-x-hidden">
      <div className="bg-white text-[#072032] py-6 md:py-8 border-b border-[#F1F5F9]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <h3 className="text-center text-[24px] md:text-[34px] leading-tight font-semibold mb-6 md:mb-8">
            Recognitions & Certifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center gap-x-5 gap-y-6 md:gap-x-24 md:gap-y-10 lg:gap-x-28 xl:gap-x-32">
            <div className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[90px] flex items-center justify-center mx-auto">
              <img
                src="/assets/icons/ISOcertification1.png"
                alt="ISO 9001:2015"
                className="max-h-full max-w-full object-contain"
                style={{ filter: "brightness(0) saturate(100%)" }}
              />
            </div>
            <div className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[90px] flex items-center justify-center mx-auto">
              <img
                src="/assets/icons/ISOcertification2.png"
                alt="ISO 27001:2022"
                className="max-h-full max-w-full object-contain"
                style={{ filter: "brightness(0) saturate(100%)" }}
              />
            </div>
            <a
              href="https://marketplace.microsoft.com/en-us/partners/0d1140e7-b7b2-4f63-9354-31e03923ad5d/overview"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream IT Microsoft Partner Profile"
              className="h-[76px] w-[155px] sm:w-[170px] md:h-[90px] md:w-[195px] p-2 rounded-[14px] border border-[#E5EDF5] bg-[#F8FBFF] flex items-center justify-center mx-auto shadow-[0_6px_18px_rgba(7,32,50,0.08)] hover:shadow-[0_10px_24px_rgba(7,32,50,0.14)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <img
                src="/assets/images/mssolutionpartnerdataandaiazure.png"
                alt="Microsoft Solution Partner Data & AI Azure"
                className="h-full w-full object-contain"
              />
            </a>
            <a
              href="https://marketplace.microsoft.com/en-us/partners/0d1140e7-b7b2-4f63-9354-31e03923ad5d/overview"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream IT Microsoft Digital & App Innovation Profile"
              className="h-[76px] w-[155px] sm:w-[170px] md:h-[90px] md:w-[195px] p-2 rounded-[14px] border border-[#E5EDF5] bg-[#F8FBFF] flex items-center justify-center mx-auto shadow-[0_6px_18px_rgba(7,32,50,0.08)] hover:shadow-[0_10px_24px_rgba(7,32,50,0.14)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <img
                src="/assets/images/microsftsolutionandappinnovation.png"
                alt="Microsoft Solution Partner Digital & App Innovation"
                className="h-full w-full object-contain"
              />
            </a>
            <a
              href="https://clutch.co/profile/dream-it-consulting-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream IT Clutch Profile"
              className="h-[64px] w-[120px] sm:w-[130px] md:h-[74px] md:w-[150px] flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/images/clutch.png"
                alt="Clutch 5.0/5.0"
                className="max-h-full max-w-full object-contain"
              />
            </a>
            <a
              href="https://www.goodfirms.co/company/dream-it-consulting-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dream IT GoodFirms Profile"
              className="h-[64px] w-[150px] sm:w-[170px] md:h-[74px] md:w-[205px] flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/images/goodfirms.png"
                alt="GoodFirms 5.0/5.0"
                className="max-h-full max-w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#072032] text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 pt-10 pb-3">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="flex flex-col max-w-[34rem]">
          <div className="flex items-center mb-4">
            <img
              className="w-44 h-auto"
              src="/assets/images/dream-it-logo-mobile-version.png"
              alt="Logo"
            />
          </div>
          <h6 className="text-gray-400  xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] max-w-[25rem]">
            At Dream IT, we specialize in helping businesses thrive through
            cutting-edge technology solutions like Cloud Data Management,
            Advanced Analytics & Visualization, Digital Marketing, and more.
          </h6>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex md:justify-between md:gap-16 lg:gap-24">
          <div className="flex  flex-col md:items-end mt-0">
            <h3 className="text-lg mr-2 font-semibold mb-4 text-white">
              Discover
            </h3>
            <ul className="space-y-2">

              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>

              {/* NEW Glossary Link inserted after Services */}
              <li>
                <Link href="/glossary" className="text-gray-400 hover:text-white">
                  Glossary
                </Link>
              </li>

              <li>
                <Link href="/career" className="text-gray-400 hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#void"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalVisible(true);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex  flex-col   mt-0">
            <h3 className="text-lg text-left mr-2 font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex p-medium gap-2 items-center">
                <img
                  src="/assets/icons/call-icon.svg"
                  alt=""
                  className="h-[20px]"
                  loading="lazy"
                />
                <Link
                  href="tel:+919416484500"
                  className="text-gray-400 hover:text-white"
                >
                  +91 94164-84500
                </Link>{" "}
              </li>
              <li className="flex p-medium gap-2 items-center">
                <img
                  src="/assets/icons/mail-icon.svg"
                  alt=""
                  className="h-[20px] mt-[2px]"
                  loading="lazy"
                />
                <Link
                  href="mailto:connect@dreamitcs.com"
                  className="text-gray-400 hover:text-white"
                >
                  connect@dreamitcs.com
                </Link>{" "}
              </li>

              <li className="flex p-medium gap-2 items-start">
                <img
                  src="/assets/icons/location-icon.svg"
                  alt=""
                  className="h-[20px] mt-[2px]"
                  loading="lazy"
                />
                <Link
                  href="https://share.google/5zGNE4Ul8ZT527d2J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  1st Floor, Orchid Business <br />
                  Park, Central Park II, Sector 48, <br />
                  Gurugram, Haryana 122004
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Links and Copyright */}

      <div className="border-t-[2px] border-[#1E3D54] mt-7 pt-5 pb-1">
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
