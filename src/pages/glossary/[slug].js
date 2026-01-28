// pages/glossary/[slug].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function GlossarySlug() {
  const router = useRouter();
  const { slug } = router.query;

  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function loadFile() {
      setLoading(true);

      try {
        const res = await fetch(`/assets/files/${slug}.html`);

        if (!res.ok) throw new Error("Not found");

        const data = await res.text();
        setHtml(data);
      } catch {
        setHtml("<h2 style='text-align:center'>File not found ❌</h2>");
      }

      setLoading(false);
    }

    loadFile();
  }, [slug]);

  return (
    <div>
      <Header />

      {/* ✅ Correct way to apply public CSS */}
      <Head>
        <link rel="stylesheet" href="/assets/files/style.css" />
      </Head>

      <main className="glossary-doc-page">
        <div className="doc-content">
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading…</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .glossary-doc-page {
          padding: 80px 20px;
          background: #f9fafb;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
