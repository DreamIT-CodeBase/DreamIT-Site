import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import CallIcon from "./CallIcon";

const Layout = (props: any) => {
  const router = useRouter();
  const metaData = props.pageInfo;
  const baseUrl = "https://dreamitcs.com";

  const canonicalUrl = `${baseUrl}${router.asPath.split("?")[0]}`;
  const ogImageUrl =
    metaData?.heroImage?.[0]?.publicUrl ||
    metaData?.metaImageUrl ||
    "/assets/icons/dreamItLogo.png";
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {Parser(metaData?.head || "")}

        <title>{metaData?.title}</title>
        <meta name="title" content={metaData?.metaTitle} />
        <meta name="description" content={metaData?.metaDescription} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="sIeCps1_7B-FTbdFVM1PCa7jzKJRTjWURLpB1lcMUxc"
        />

        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData?.metaTitle} />
        <meta property="og:description" content={metaData?.metaDescription} />
        <meta property="og:image" content={ogImageUrl} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Dream It" />
        <meta name="twitter:creator" content="Dream It" />
        <meta name="twitter:title" content={metaData?.metaTitle} />
        <meta name="twitter:description" content={metaData?.metaDescription} />
        <meta name="twitter:domain" content={canonicalUrl} />
        <meta name="twitter:image" content={ogImageUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />

        {/* <link
          href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
          rel="stylesheet"
        /> */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dream IT Consulting Services",
            url: "https://dreamitcs.com/",
            logo: "https://dreamitcs.com/assets/icons/dreamit-new-logo.png",
            description:
              "Dream IT Consulting Services offers data-driven solutions including Microsoft Fabric, Power BI, AI consulting, and digital marketing services.",
            email: "connect@dreamitcs.com",
            telephone: "+91-94164-84500",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1st Floor, Orchid Business Park, Central Park II, Sector 48",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122004",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-94164-84500",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
              {
                "@type": "ContactPoint",
                email: "connect@dreamitcs.com",
                contactType: "sales",
                availableLanguage: ["en", "hi"],
              },
            ],
            sameAs: [
              "https://www.instagram.com/dreamitcs/",
              "https://www.linkedin.com/company/dreamitcs",
              "https://www.facebook.com/DreamITweb",
              "https://x.com/Dreamitcs",
            ],
          })}
        </script>
      </Head>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <CallIcon />
      <Footer />
      <div>{Parser(metaData?.bodyBottom || "")}</div>
    </div>
  );
};

export default Layout;
