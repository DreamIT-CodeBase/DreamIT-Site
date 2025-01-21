import Link from "next/link";
import React, { useState } from "react";
import ContactFormModal from "../shared/ContactFormModal";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const services = [
    {
      name: "Cloud Data Management & Migration",
      slug: "cloud-data-management",
    },
    {
      name: "Advanced Data Analytics & Visualization",
      slug: "advanced-analytics",
    },
    { name: "ERP Implementation", slug: "erp-implementation" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    {
      name: "Digital Transformation",
      slug: "digital-transformation",
    },
    { name: "Business Applications", slug: "business-applications" },
  ];

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

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
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav
          className="absolute top-full left-0 w-full bg-white px-4 pb-4 shadow-lg z-50"
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
          }}
        >
          <ul className="text-center space-y-4">
            <li>
              <Link href="/" className="text-black-700 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-black-700 font-bold">
                About Us
              </Link>
            </li>
            <li>
              <p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center justify-center w-full text-black-700 font-bold"
                onClick={() => (window.location.href = "/services")}
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
              </p>
              {showDropdown && (
                <ul className="absolute z-[1000] left-[10] top-[150px] py-4 px-2 mt-2 w-[300px] bg-white border rounded-[18px] shadow-lg">
                  {services.map((service) => (
                    <li
                      key={service.slug}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      <Link href={`/services/${service.slug}`}>
                        <p className="text-16 font-semibold text-black-700">
                          {service.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/industries" className="text-black-700 font-bold">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/insights" className="text-black-700 font-bold">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-black-700 font-bold">
                Life@DreamIt
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navbar */}
      <div className="navbar-for-web   justify-between items-center  container h-16">
        <Link href="/">
          <img
            className="lg:w-36 h-auto md:w-28"
            src="/assets/icons/dreamItLogo.svg"
            alt="Logo"
          />
        </Link>
        <nav className="flex space-x-8">
          <Link href="/" className="text-black-700 lg:font-bold">
            Home
          </Link>
          <Link href="/about-us" className="text-black-700 lg:font-bold">
            About Us
          </Link>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center text-black-700 lg:font-bold"
              aria-expanded={showDropdown}
              onClick={() => (window.location.href = "/services")}
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
            </button>
            {showDropdown && (
              <ul className="absolute z-[1000] left-[-10] top-4 py-4 px-2 mt-2 w-[300px] bg-white border rounded-[18px] shadow-lg">
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    <Link href={`/services/${service.slug}`}>
                      <p className="text-16 font-semibold text-black-700">
                        {service.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/industries" className="text-black-700 lg:font-bold">
            Industries
          </Link>

          <Link href="/insights" className="text-black-700 lg:font-bold">
            Insights
          </Link>
          <Link href="/career" className="text-black-700 font-bold">
            Life@DreamIt
          </Link>
        </nav>
        <button
          onClick={() => setIsModalVisible(true)}
          className="lg:px-4 lg:py-2 md:p-[8px] transition-transform duration-300 hover:scale-105  bg-blue-600 lg:font-bold text-white rounded-[8px]"
        >
          Get Started
        </button>
      </div>
      <ContactFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </header>
  );
};

export default Header;
