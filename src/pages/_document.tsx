import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const NEXT_PUBLIC_GOOGLE_ANALYTICS = "G-MQDCHW14ES";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />

      <body>
        <Script
          strategy="beforeInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="google-analytics">
          {`
             window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MQDCHW14ES');
          `}
        </Script>

        <Script
          src="https://smtpjs.com/v3/smtp.js"
          strategy="beforeInteractive"
        />
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
