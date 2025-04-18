import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const CallIcon = () => {
  return (
    <div>
      <a
        href="tel:+919416484500"  
        className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 md:hidden"
        aria-label="Call Now"
      >
        <FiPhoneCall className="w-5 h-5" />
      </a>
    </div>
  );
};

export default CallIcon;
