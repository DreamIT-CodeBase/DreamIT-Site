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

        <meta
          name="linkedin-site-verification"
          content="b2c6fdfe-4331-43a1-a475-931d2b52c007"
        />

        <link rel="icon" href="/favicon.jpg" />

        {/* <link
          href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
          rel="stylesheet"
        /> */}

        {/* <script type="application/ld+json">
          {JSON.stringify(
            // <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://dreamitcs.com/#organization",
                  name: "Dream IT Consulting Services",
                  url: "https://dreamitcs.com",
                  logo: "https://dreamitcs.com/assets/icons/dreamit-new-logo.png",
                  email: "connect@dreamitcs.com",
                  telephone: "+91 94164-84500",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "1st Floor, Orchid Business Park, Central Park II, Sector 48",
                    addressLocality: "Gurugram",
                    addressRegion: "Haryana",
                    postalCode: "122004",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/dreamitcs/",
                    "https://www.instagram.com/dreamitcs/",
                    "https://www.facebook.com/DreamITweb",
                    "https://x.com/Dreamitcs",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://dreamitcs.com/#breadcrumbs",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "About Us",
                      item: "https://dreamitcs.com/about-us/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Life at Dream IT",
                      item: "https://dreamitcs.com/career/",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Advanced Data Analytics & Visualization",
                      item: "https://dreamitcs.com/services/advanced-analytics/",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Cloud Data Management",
                      item: "https://dreamitcs.com/services/cloud-data-management/",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Digital Marketing",
                      item: "https://dreamitcs.com/services/digital-marketing/",
                    },
                  ],
                },
              ],
            }
            // </script>
          )}
        </script> */}
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
