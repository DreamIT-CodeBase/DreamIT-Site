import Head from "next/head";

export default function OrganizationSEO() {
  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://dreamitcs.com/#organization",
            "name": "Dream IT Consulting Services",
            "url": "https://dreamitcs.com/",
            "logo": "https://dreamitcs.com/assets/icons/dreamit-new-logo.png",
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
