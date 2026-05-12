import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ContactFormModal from "../shared/ContactFormModal";
import { Drawer } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import { visibleServiceLinks } from "@/data/visibleServices";

const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const isActive = (path: any) => router.pathname === path;
  const whatsappNumber = "919416484500";
  const welcomeMessage =
    "Hello Dream IT Team,\nI visited your website and would like to know more about your IT services. Please assist me with the details.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    welcomeMessage
  )}`;

  return (
    <header className="bg-white header_content overflow-visible">
      {/* Mobile Navbar */}
      <div className="navbar-for-tab flex justify-between items-center xl:p-4 lg:p-4 md:p-4 sm:p-3 xs:p-2">
        <Link href="/">
          <img
            className="w-48 h-auto"
            // src="/assets/icons/Combined LOGO DreamIT X Microsoft2.png"
            src="/assets/icons/Frame 5.png"
            alt="Logo"
          />
        </Link>

        <div className="flex justify-between items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="bg-[#25D366] text-white rounded-[7px] sm:px-3 xs:px-3 xl:px-4 lg:px-4 md:px-4 sm:py-1 xs:py-1 xl:py-2 lg:py-2 md:py-2 transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp className="xl:w-5 xl:h-5 lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-4 xs:h-4" />
          </a>
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-[#072032] max-w-[150px] items-center text-[#FFFFFF] sm:px-3 xs:px-3 xl:px-5 lg:px-5 md:px-5 sm:py-1 xs:py-1 xl:py-2 lg:py-2 md:py-2 font-bold rounded-[7px] transition-transform duration-300 hover:scale-105 cursor-pointer xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[10px] xs:text-[10px] text-[clamp(10px, 1.2vw, 16px)] whitespace-nowrap"
          >
            Get Started
          </button>
          {/* className=" bg-[#072032] max-w-[186px] items-center text-[#FFFFFF]   sm:px-4 xs:px-4   xl:px-6 lg:px-6 md:px-6  sm:py-2 xs:py-2   xl:py-3 lg:py-3 md:py-3 font-bold rounded-[7px]   transition-transform duration-300 hover:scale-105   cursor-pointer xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[12px] xs:text-[12px] " */}

          <button onClick={toggleDrawer} aria-label="Toggle menu">
            <svg
              className={`w-6 h-6 text-black-100 hover:text-gray-700 transition-transform duration-300 ${
                isDrawerVisible ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isDrawerVisible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={toggleDrawer}
        open={isDrawerVisible}
        width={"80%"}
      >
        <ul className="text-left space-y-4">
          <li>
            <Link
              href="/"
              className={`text-black-700 font-bold hover:text-[#00a9ff] ${
                isActive("/") ? "nav-link-active" : " "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={`text-black-700 font-bold hover:text-[#00a9ff] ${
                isActive("/about-us") ? "nav-link-active" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <div className="flex flex-col">
              <Link
                href="/services"
                className="text-black-700 font-bold flex items-center hover:text-[#00a9ff]"
              >
                Services
                <svg
                  className="ml-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 8 6"
                  fill="none"
                >
                  <path
                    d="M1.14286 0.714233L4 3.57138L6.85714 0.714233L8 1.28566L4 5.28566L0 1.28566L1.14286 0.714233Z"
                    fill="#212529"
                  />
                </svg>
              </Link>
              <ul className="mt-2 md:pl-4 sm:pl-2">
                {visibleServiceLinks.map((service) => (
                  <li
                    key={service.href}
                    className="flex items-start px-4 py-2 hover:bg-gray-100"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 md:mt-2 sm:mt-1 xs:mt-2"></span>
                    <Link onClick={toggleDrawer} href={service.href}>
                      <p className="md:text-16 sm:text-[14px] font-semibold text-black-700 leading-tight">
                        {service.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/industries"
              className={`text-black-700 font-bold hover:text-[#00a9ff] ${
                isActive("/industries") ? "nav-link-active" : ""
              }`}
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              href="/insights"
              className={`text-black-700 font-bold hover:text-[#00a9ff] ${
                isActive("/insights") ? "nav-link-active" : ""
              }`}
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className={`text-black-700 font-bold hover:text-[#00a9ff] ${
                isActive("/career") ? "nav-link-active" : ""
              }`}
            >
              Life @DreamIT
            </Link>
          </li>
        </ul>
      </Drawer>

      {/* Desktop Navbar */}
      <div className="navbar-for-web relative z-[5100] justify-between items-center container h-16 overflow-visible">
        <Link href="/" className="flex items-center space-x-4">
          <img
            className="lg:w-36 h-auto md:w-28"
            src="/assets/icons/dreamit-new-logo.png"
            alt="Logo"
          />
          <img
            className="lg:w-36 h-auto md:w-28"
            src="/assets/icons/microsoft-solution-partner-logo.png"
            alt="Logo"
          />
        </Link>
        <nav className="flex items-center space-x-8 overflow-visible">
          <Link
            href="/"
            className={`hover:text-[#00a9ff] ${
              isActive("/") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-[#00a9ff] ${
              isActive("/about-us") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            About Us
          </Link>
          <div
            className="relative group"
            // onMouseEnter={() => setShowDropdown(true)}
            // onMouseLeave={() => setShowDropdown(false)}
          >
            <div
              className={`flex items-center hover:text-[#00a9ff] ${
                isActive("/services") ? "nav-link-active" : "nav-link-unactive"
              }`}
            >
              <div className="flex items-center">
                <Link
                  href="/services"
                  className="text-inherit hover:text-[#00a9ff]"
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  aria-expanded={showDropdown}
                  aria-label="Toggle services menu"
                >
                  <svg
                    className="ml-2 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 8 6"
                    fill="none"
                  >
                    <path
                      d="M1.14286 0.714233L4 3.57138L6.85714 0.714233L8 1.28566L4 5.28566L0 1.28566L1.14286 0.714233Z"
                      fill="#212529"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {showDropdown && (
              <ul className="absolute z-[5200] left-0 top-full mt-3 py-4 px-2 w-[300px] bg-white border rounded-[18px] shadow-lg">
                {visibleServiceLinks.map((service) => (
                  <li
                    key={service.href}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    <Link onClick={() => setShowDropdown(false)} href={service.href}>
                      <p className="text-16 font-semibold text-black-700">
                        {service.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            href="/industries"
            className={`hover:text-[#00a9ff] ${
              isActive("/industries") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Industries
          </Link>
          <Link
            href="/insights"
            className={`hover:text-[#00a9ff] ${
              isActive("/insights") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Insights
          </Link>
          <Link
            href="/career"
            className={`hover:text-[#00a9ff] ${
              isActive("/career") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Life @DreamIT
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="lg:px-3 lg:py-2.5 md:p-[8px] transition-transform duration-300 hover:scale-105 bg-[#25D366] text-white rounded-[8px]"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsModalVisible(true)}
            className="lg:px-4 lg:py-2.5 md:p-[8px] transition-transform duration-300 hover:scale-105 bg-blue-600 lg:font-bold text-white rounded-[8px]"
          >
            Get Started
          </button>
        </div>
      </div>
      {isModalVisible && (
        <ContactFormModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </header>
  );
};

export default Header;
