import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import { glossaryTopics } from "../../data/glossaryTopics";

export default function GlossarySlug() {
  const router = useRouter();
  const { slug } = router.query;

  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);

  const topic = glossaryTopics.find((t) => t.slug === slug);
  const pageTitle = topic?.title || "Glossary Topic";

  useEffect(() => {
    if (!slug) return;

    async function loadTopicFile() {
      setLoading(true);

      try {
        const res = await fetch(`/assets/files/${slug}.html`);
        if (!res.ok) throw new Error("Not Found");

        const data = await res.text();
        setHtml(data);
      } catch {
        setHtml("<h2 style='text-align:center'>File not found ❌</h2>");
      }

      setLoading(false);
    }

    loadTopicFile();
  }, [slug]);

  return (
    <div>
      <Header />

      <Head>
        <title>{pageTitle} | DreamIT Glossary</title>
      </Head>

      <main>
        {/* ✅ HERO EXACT SAME AS INDEX */}
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {/* LEFT */}
              <div>
                <div className="-mt-14">
                  <h1 className="text-black-500 text-xl md:text-5xl font-semibold leading-[1.15] tracking-tight">
                    {pageTitle}
                  </h1>

                  <h3 className="max-w-[34rem] text-black-800 hero-section-subtitle">
                    Discover key terms in cloud, AI, analytics, and enterprise IT.
                  </h3>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-end">
                <img
                  src="/assets/images/glossarytopics.png"
                  alt="Glossary Banner"
                  className="w-[480px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          <h1 className="font-medium text-center xl:mb-6 data-driven-title">
            Empowering Industries with Data-Driven Solutions
          </h1>
        </div>

        {/* ✅ LOAD DOC CSS ONLY HERE */}
        <div className="glossary-doc-page">
          <Head>
            <link rel="stylesheet" href="/assets/files/style.css" />
          </Head>

          <div className="doc-content">
            {loading ? (
              <p style={{ textAlign: "center" }}>Loading…</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </div>
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
