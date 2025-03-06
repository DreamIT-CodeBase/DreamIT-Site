import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head/>
       <body>
        <Main />
        <Script
  src="https://smtpjs.com/v3/smtp.js"
  strategy="beforeInteractive"
/>

        <NextScript />

      </body>
    </Html>
  );
}
