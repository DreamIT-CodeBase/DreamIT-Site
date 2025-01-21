import Link from "next/link";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-[#072032] text-white  xl:px-[80px]  container  pt-12 pb-6">
      <div className="    flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img
              className="w-40 h-auto"
              src="/assets/icons/dream-it-logo.svg"
              alt="Logo"
            />
          </div>
          <h6 className="text-gray-400  max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </h6>
        </div>

        {/* Right Section */}
        <div className="flex  flex-col md:items-end mt-8 md:mt-0">
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
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-gray-400 hover:text-white">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
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
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </Link>
            <Link href="https://x.com/Dreamitcs" aria-label="Twitter" target="_blank">
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
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Copyright © {year}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
