import { useState } from "react";
import { X } from "lucide-react";

const CopilotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999]
        w-14 h-14 flex items-center justify-center
        rounded-full bg-[#062a57]
        shadow-xl hover:scale-105 transition"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <img
            src="/assets/images/copilotimg.png"
            alt="DreamIT Agent"
            className="w-8 h-8"
          />
        )}
      </button>

      {/* Chat Popup */}
      {open && (
        <div
          className="
            fixed bottom-24 right-6 z-[9999]
            w-[360px] h-[520px]
            rounded-2xl overflow-hidden
            shadow-2xl bg-white

            /* ✅ FULL BORDER */
            border-[1.5px] border-[#0F5B6B]
          "
        >
          {/* ✅ ONLY LOGO HEADER */}
         

          {/* ✅ Copilot iframe directly (NO EXTRA BAR) */}
          <iframe
            src="https://copilotstudio.microsoft.com/environments/4265e6eb-7d7c-e253-a406-9340639f86de/bots/auto_agent_mbbvk/webchat?__version__=2"
            title="DreamIT Copilot Assistant"
            style={{
              width: "100%",
              height: "calc(100% - 50px)", // logo header only
              border: "none",
            }}
          />
        </div>
      )}
    </>
  );
};

export default CopilotWidget;


