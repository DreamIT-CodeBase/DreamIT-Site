import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CtaButton = ({ title, link }: any) => {
  return (
    <Link
      href={link}
      className="bg-white flex gap-2 max-w-[185px] items-center text-black-700 hover:text-black-700 py-[9px] text-[18px] px-5 font-bold rounded-[10px] border-[2px] border-[#eaeaea] transition-transform duration-300 hover:scale-105"
    >
      {title}
      <FaArrowRightLong />
    </Link>
  );
};

export default CtaButton;
