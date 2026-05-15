import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const NEXT_PUBLIC_GOOGLE_ANALYTICS = "G-MQDCHW14ES";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVHNXS3T');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          rel="stylesheet"
          href="https://pagepilot.fabbuilder.com/ahdStyles.css"
        />
        <meta
          name="msvalidate.01"
          content="8F47B976A455139F0E15B910456F14C2"
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>

        {/* SMTP.js */}
        <Script
          src="https://smtpjs.com/v3/smtp.js"
          strategy="beforeInteractive"
        />
      </Head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVHNXS3T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
