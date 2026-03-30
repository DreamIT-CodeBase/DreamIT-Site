import Head from "next/head";
import { SITE_URL } from "@/utils/constant";

export default function OrganizationSEO() {
  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            "name": "Dream IT Consulting Services",
            "url": `${SITE_URL}/`,
            "logo": `${SITE_URL}/assets/icons/dreamit-new-logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-94164-84500",
              "contactType": "Customer Support",
              "email": "connect@dreamitcs.com",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, Orchid Business Park, Central Park II, Sector 48",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "postalCode": "122004",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/dreamitcs/",
              "https://www.instagram.com/dreamitcs/",
              "https://x.com/dreamitcs"
            ]
          })
        }}
      />
    </Head>
  );
}
