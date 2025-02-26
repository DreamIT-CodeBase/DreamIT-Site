import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ContactFormModal from "../shared/ContactFormModal";
import { Drawer } from "antd";

const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const toggleDrawer = () => setIsDrawerVisible((prev) => !prev);

  const services = [
    { name: "Cloud Data Management", slug: "cloud-data-management" },

    {
      name: "Advanced Data Analytics & Visualization",
      slug: "advanced-analytics",
    },
    {
      name: "Digital Transformation & Process Automation",
      slug: "digital-transformation",
    },
    {
      name: "Enterprise Resource Planning Implementation",
      slug: "erp-implementation",
    },

    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Business-Centric IT Ecosystem", slug: "business-applications" },
  ];

  const isActive = (path: any) => router.pathname === path;

  return (
    <header className="bg-white shadow-lg header_content">
      {/* Mobile Navbar */}
      <div className="navbar-for-tab flex justify-between items-center p-4">
        <Link href="/">
          <img
            className="w-24 h-auto"
            src="/assets/icons/dreamItLogo.svg"
            alt="Logo"
          />
        </Link>
        <button onClick={toggleDrawer} aria-label="Toggle menu">
          <svg
            className={`w-6 h-6 text-gray-500 hover:text-gray-700 transition-transform duration-300 ${
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
              className={`text-black-700 font-bold ${
                isActive("/") ? "nav-link-active" : " "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={`text-black-700 font-bold ${
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
                className="text-black-700 font-bold flex items-center"
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
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="flex items-start px-4 py-2 hover:bg-gray-100"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 md:mt-2 sm:mt-1 xs:mt-2"></span>
                    <Link
                      onClick={toggleDrawer}
                      href={`/services/${service.slug}`}
                    >
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
              className={`text-black-700 font-bold ${
                isActive("/industries") ? "nav-link-active" : ""
              }`}
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              href="/insights"
              className={`text-black-700 font-bold ${
                isActive("/insights") ? "nav-link-active" : ""
              }`}
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className={`text-black-700 font-bold ${
                isActive("/career") ? "nav-link-active" : ""
              }`}
            >
              Life @DreamIT
            </Link>
          </li>
        </ul>
      </Drawer>

      {/* Desktop Navbar */}
      <div className="navbar-for-web justify-between items-center container h-16">
        <Link href="/">
          <img
            className="lg:w-36 h-auto md:w-28"
            src="/assets/icons/dreamit-new-logo.png"
            alt="Logo"
          />
        </Link>
        <nav className="flex space-x-8">
          <Link
            href="/"
            className={`${
              isActive("/") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${
              isActive("/about-us") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            About Us
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className={`flex items-center ${
                isActive("/services") ? "nav-link-active" : "nav-link-unactive"
              }`}
            >
              <Link className="flex items-center" href="/services">
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
            </button>
            {showDropdown && (
              <ul className="absolute z-[1000] left-[-10] top-4 py-4 px-2 mt-2 w-[300px] bg-white border rounded-[18px] shadow-lg">
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    <Link
                      onClick={() => setShowDropdown(false)}
                      href={`/services/${service.slug}`}
                    >
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
            className={`${
              isActive("/industries") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Industries
          </Link>
          <Link
            href="/insights"
            className={`${
              isActive("/insights") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Insights
          </Link>
          <Link
            href="/career"
            className={`${
              isActive("/career") ? "nav-link-active" : "nav-link-unactive"
            }`}
          >
            Life @DreamIT
          </Link>
        </nav>
        <button
          onClick={() => setIsModalVisible(true)}
          className="lg:px-4 lg:py-2.5 md:p-[8px] transition-transform duration-300 hover:scale-105 bg-blue-600 lg:font-bold text-white rounded-[8px]"
        >
          Get Started
        </button>
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
