import Head from "next/head";
import Link from "next/link";

type StaticRedirectPageProps = {
  destination: string;
  title: string;
};

const StaticRedirectPage = ({
  destination,
  title,
}: StaticRedirectPageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="refresh" content={`0;url=${destination}`} />
        <link rel="canonical" href={destination} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(destination)});`,
          }}
        />
      </Head>
      <main className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-lg text-[#072032] mb-3">
            Redirecting to the updated service page...
          </p>
          <Link
            href={destination}
            className="text-[#0D99FF] font-semibold hover:underline"
          >
            Continue to the ERP Implementation page
          </Link>
        </div>
      </main>
    </>
  );
};

export default StaticRedirectPage;
