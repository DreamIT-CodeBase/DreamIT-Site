import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const whatsappNumber = "919416484500";
  const welcomeMessage =
    "Welcome to Dream IT. How may I help you?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    welcomeMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition duration-300 hover:scale-105 bottom-24 md:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppIcon;
