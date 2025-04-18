import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const CallIcon = () => {
  return (
    <div>
      <a
        href="tel:+919416484500"  
        className="fixed bottom-6 right-5 z-50 bg-[#00A9FF] text-white p-4 rounded-full shadow-lg hover:bg-[#00A9FF] transition duration-300 md:hidden"
        aria-label="Call Now"
      >
        <FiPhoneCall className="w-7 h-7" />
      </a>
    </div>
  );
};

export default CallIcon;
