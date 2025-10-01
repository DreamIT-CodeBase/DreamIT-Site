import React, { useState, type ReactNode } from "react";
import { IoAdd } from "react-icons/io5";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const FAQ = ({ items }: { items?: FAQItem[] }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleQuestion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container">
      <section className="xl:py-10 lg:py-12 md:py-12 sm:py-6 xs:py-6">
        <div className="text-center sm:space-y-2 xs:space-y-2 md:space-y-4 lg:space-y-4 xl:space-y-4">
          <div className="relative inline-block bg-[#ECF9FF] px-5 py-2 rounded-full">
            <span className="text-[#00A9FF] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-center font-bold">
              FAQ
            </span>
          </div>
          <h2 className="text-[40px] font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="lg:mt-10 xl:mt-10 md:mt-6 sm:mt-6 xs:mt-6">
          <div className="bg-white rounded-[18px]">
            <div>
              {(items && items.length ? items : []).map((faq, index) => (
                <div
                  key={index}
                  className="xl:py-8 lg:py-8 md:py-8 sm:py-4 xs:py-4 px-6 mx-6 border-b border-[#000000] last:border-b-0"
                >
                  <button
                    className="w-full text-left relative"
                    onClick={() => toggleQuestion(index)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="mb-0 p-large font-semibold text-black">
                        {faq.question}
                      </span>
                      <span
                        className="mb-0 p-large font-semibold text-[#00A9FF] transition-transform duration-200 ease-in-out"
                        style={{
                          transform: openIndices.includes(index)
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <IoAdd />
                      </span>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden"
                    style={{
                      transition: openIndices.includes(index)
                        ? "max-height 400ms ease-in-out"
                        : "max-height 200ms ease-out",
                      maxHeight: openIndices.includes(index) ? "500px" : "0",
                    }}
                  >
                    <div className="pt-4">
                      <p className="xl:text-16 lg:text-16 md:text-16 sm:text-13 xs:text-13 text-gray-800 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
