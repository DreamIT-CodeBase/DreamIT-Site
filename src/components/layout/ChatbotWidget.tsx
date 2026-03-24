import React, { useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const CHATBOT_URL =
  "https://copilotstudio.microsoft.com/environments/4265e6eb-7d7c-e253-a406-9340639f86de/bots/auto_agent_mbbvk/webchat?__version__=2";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[5400] flex flex-col items-end gap-3 sm:bottom-5 sm:right-5 xs:bottom-20 xs:right-4">
      {isOpen ? (
        <div className="relative h-[520px] w-[340px] max-h-[calc(100vh-100px)] overflow-hidden rounded-[12px] bg-white shadow-lg sm:h-[520px] sm:w-[340px] xs:h-[min(70vh,520px)] xs:w-[calc(100vw-32px)]">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
            className="absolute right-2 top-2 z-[5401] flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#072032] shadow"
          >
            <IoClose className="h-5 w-5" />
          </button>
          <iframe
            src={CHATBOT_URL}
            title="Dream IT AI Assistant"
            frameBorder="0"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#072032] text-white shadow-lg sm:h-14 sm:w-14 xs:h-12 xs:w-12"
      >
        <RiRobot2Line className="h-7 w-7 xs:h-6 xs:w-6" />
      </button>
    </div>
  );
};

export default ChatbotWidget;
