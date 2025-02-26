import { Card } from "antd";
import { FaLinkedin } from "react-icons/fa6";

export default function AuthorDetails() {
  return (
    <Card className="mt-4 rounded-[10px] py-2">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20   flex items-center justify-center">
          <img alt="author" src="/assets/images/author-image.png" />
        </div>
        <div className="w-full flex items-start justify-between ">
          <div>
            <h2 className="text-xl font-semibold text-[#1C1C1C]">
              Prateek S Malhan
            </h2>
            <p className="text-[#596168] text-[16px]">
              Chief Growth & Strategy Officer
            </p>
          </div>
          <div>
            <FaLinkedin className="w-10 h-10 cursor-pointer text-[#0A66C2] " />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="mt-3 text-gray-700 text-[16px] font-[400] max-w-[85%]">
          With 11 years in SaaS, I&apos;ve built MillionVerifier and SAAS First.
          Passionate about SaaS, data, and AI. Let&apos;s connect if you share
          the same drive for success!
        </p>
      </div>
    </Card>
  );
}
