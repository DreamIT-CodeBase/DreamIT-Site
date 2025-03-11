import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <footer className="bg-[#072032] text-white   container  pt-12 pb-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img
              className="w-40 h-auto"
              src="/assets/icons/dream-it-logo.svg"
              alt="Logo"
            />
          </div>
          <h6 className="text-gray-400  xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] max-w-[25rem]">
            At Dream IT, we specialize in helping businesses thrive through
            cutting-edge technology solutions like Cloud Data Management,
            Advanced Analytics & Visualisation, Digital Marketing, and more.
          </h6>
        </div>

        {/* Right Section */}
        <div className="flex justify-between  xl:gap-28 lg:gap-28 md:gap-16 sm:gap-20 xs:gap-8">
          <div className="flex  flex-col md:items-end mt-8 md:mt-0">
            <h3 className="text-lg mr-2 font-semibold mb-4 text-white">
              Discover
            </h3>
            <ul className="space-y-3">
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

          <div className="flex  flex-col   mt-8 md:mt-0">
            <h3 className="text-lg text-left mr-2 font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex p-medium gap-2 items-center">
                <img
                  src="/assets/icons/call-icon.svg"
                  alt="call-icon"
                  className="h-[20px]"
                  loading="lazy"
                />
                +91 94164-84500
              </li>
              <li className="flex p-medium gap-2 items-center">
                <img
                  src="/assets/icons/mail-icon.svg"
                  alt="call-icon"
                  className="h-[20px] mt-[2px]"
                  loading="lazy"
                />
                connect@dreamitcs.com{" "}
              </li>

              <li className="flex p-medium gap-2 items-start">
                <img
                  src="/assets/icons/location-icon.svg"
                  alt="call-icon"
                  className="h-[20px] mt-[2px]"
                  loading="lazy"
                />
                1st Floor, Orchid Business
                <br /> Park, Central Park II, Sector 48,
                <br /> Gurugram, Haryana 122004
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Links and Copyright */}

      <div className="border-t-[2px] border-[#1E3D54] mt-8 pt-6  ">
        <div className="  flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex items-center justify-center space-x-5 mb-4 md:mb-0">
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
          <div className="flex items-center space-x-4 text-[#FFFFFF] text-sm">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[#FFFFFF] text-sm mt-4 md:mt-0">
            Copyright © {year}. All rights reserved.
          </div>
        </div>
      </div>
      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </footer>
  );
};

export default Footer;
