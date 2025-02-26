import { Card } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ShareWithCommunity = () => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  const text = encodeURIComponent("Check this out!");

  return (
    <Card className="bg-[#072032] rounded-[10px]">
      <p className="font-bold text-white leading-[16.6px] xl:text-[16px]">
        Share with your community!
      </p>

      <div className="flex space-x-6 mt-4">
        {shareUrl && (
          <>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              aria-label="Facebook"
            >
              <img
                src="/assets/icons/shareWithCommunityFbIcon.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                src="/assets/icons/shareWithCommunityLinkedinIcon.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`}
              target="_blank"
              aria-label="Twitter"
            >
              <img
                src="/assets/icons/twitter.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </Link>
          </>
        )}
      </div>
    </Card>
  );
};

export default ShareWithCommunity;
