import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props: any) => {
  const router = useRouter();

  const baseUrl = "https://alpha-testing.web.app";

  const canonicalUrl = `${baseUrl}${router.asPath.split("?")[0]}`;
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dream IT – Consulting Services</title>
        <meta name="title" content="Dream IT – Consulting Services" />
        <meta name="description" content="Dream IT – Consulting Services" />
        <meta property="og:title" content="Home 09" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Dream IT" />
        <meta name="twitter:title" content="Dream IT – Consulting Services" />
        <meta
          name="twitter:description"
          content="Dream IT – Consulting Services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
