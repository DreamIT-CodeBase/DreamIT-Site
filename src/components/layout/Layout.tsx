import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import ChatbotWidget from "./ChatbotWidget";
import { SITE_URL } from "@/utils/constant";

function sanitizeJsonLdScripts(markup: string) {
  return markup.replace(
    /<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi,
    (_match, jsonText: string) => {
      try {
        const parsedJson = JSON.parse(jsonText.trim());
        const safeJson = JSON.stringify(parsedJson).replace(/</g, "\\u003c");
        return `<script type="application/ld+json">${safeJson}</script>`;
      } catch {
        return "";
      }
    }
  );
}

const Layout = (props: any) => {
  const router = useRouter();
  const metaData = props.pageInfo;

  const normalizedPath = (() => {
    const path = router.asPath.split("?")[0].split("#")[0] || "/";
    if (path === "/") return "/";
    return path.endsWith("/") ? path.slice(0, -1) : path;
  })();
  const canonicalUrl = new URL(normalizedPath, SITE_URL).toString();
  const normalizedHeadMarkup = sanitizeJsonLdScripts(
    (metaData?.head || "")
      .replace(
        /https:\/\/(?:www\.)?dreamitcs\.com(?=[/?#"'<\s]|$)/gi,
        SITE_URL
      )
      .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
  );
  const normalizedBodyBottomMarkup = sanitizeJsonLdScripts(
    (metaData?.bodyBottom || "").replace(
      /https:\/\/(?:www\.)?dreamitcs\.com(?=[/?#"'<\s]|$)/gi,
      SITE_URL
    )
  );
  const ogImageUrl =
    metaData?.heroImage?.[0]?.publicUrl ||
    metaData?.metaImageUrl ||
    "/assets/icons/dreamItLogo.png";
  const siteDomain = SITE_URL.replace(/^https?:\/\//, "");
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {Parser(normalizedHeadMarkup)}

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
        <meta name="twitter:domain" content={siteDomain} />
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
                  "@id": "https://www.dreamitcs.com/#organization",
                  name: "Dream IT Consulting Services",
                  url: "https://www.dreamitcs.com",
                  logo: "https://www.dreamitcs.com/assets/icons/dreamit-new-logo.png",
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
                  "@id": "https://www.dreamitcs.com/#breadcrumbs",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "About Us",
                      item: "https://www.dreamitcs.com/about-us/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Life at Dream IT",
                      item: "https://www.dreamitcs.com/career/",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Advanced Data Analytics & Visualization",
                      item: "https://www.dreamitcs.com/services/advanced-analytics/",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Cloud Data Management",
                      item: "https://www.dreamitcs.com/services/cloud-data-management/",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Digital Marketing",
                      item: "https://www.dreamitcs.com/services/digital-marketing/",
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
      <ChatbotWidget />
      <Footer />

      <div>{Parser(normalizedBodyBottomMarkup)}</div>
    </div>
  );
};

export default Layout;
