import Layout from "@/components/layout/Layout";
import Link from "next/link";
import OrganizationSEO from "@/components/shared/OrganizationSEO";

export default function FourOhFour() {
  return (
    <>
      <OrganizationSEO />
      <Layout>
      <div className="pt-60 pb-60">
        <div className="  flex items-center flex-col gap-6 justify-center  ">
          <img
            src="/assets/images/404.png"
            className="h-[400px]"
            alt="not-found"
          />
          <h1 className="text-center">404 - Page Not Found</h1>
          <Link
            className="px-4 py-2 p-[8px] transition-transform duration-300 hover:scale-105  bg-blue-600 lg:font-bold text-white rounded-[8px]"
            href="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </Layout>
    </>
  );
}
