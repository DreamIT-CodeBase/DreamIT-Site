"use client";

import { Card } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ShareWithFriends = () => {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const facebookMessageUrl = `https://m.me/?link=${encodeURIComponent(
    pageUrl
  )}`;
  const linkedinMessageUrl = `https://www.linkedin.com/messaging/compose/?body=${encodeURIComponent(
    pageUrl
  )}`;
  const emailShareUrl = `mailto:?subject=Check this out!&body=${encodeURIComponent(
    pageUrl
  )}`;

  return (
    <Card className="bg-[#D6F1FF] rounded-[10px] mt-4">
      <div className="flex justify-between xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xs:flex-wrap gap-2 items-center">
        <p className="font-bold leading-[16.6px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] xs:text-[14px] text-[#1c1c1c] mb-0">
          Like what you see? Share with a friend.
        </p>

        <div className="flex space-x-6">
          <Link
            href={facebookMessageUrl}
            aria-label="Facebook Messenger"
            target="_blank"
          >
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link
            href={linkedinMessageUrl}
            aria-label="LinkedIn Message"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href={emailShareUrl} aria-label="Email" target="_blank">
            <FaXTwitter className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ShareWithFriends;
