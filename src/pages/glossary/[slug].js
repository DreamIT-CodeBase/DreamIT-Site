import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import { glossaryTopics } from "../../data/glossaryTopics";

export default function GlossarySlug({ slug }) {

  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Table of Content Items
  const [toc, setToc] = useState([]);

  // ✅ Active Highlight
  const [activeId, setActiveId] = useState("");

  // ✅ Page Title
  const topic = glossaryTopics.find((t) => t.slug === slug);
  const pageTitle = topic?.title || "Glossary Topic";

  /* ============================================
     ✅ Load HTML File
  ============================================ */
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

  /* ============================================
     ✅ Permanent TOC Extractor (Universal)
  ============================================ */
  useEffect(() => {
    if (!html) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    let headings = [];

    /* ✅ Case 1: Clean HTML */
    const cleanHeadings = Array.from(tempDiv.querySelectorAll("h2, h3"));
    if (cleanHeadings.length > 0) {
      headings = cleanHeadings;
    }

    /* ✅ Case 2: Google Docs Export */
    else {
      const googleHeadings = Array.from(
        tempDiv.querySelectorAll(
          "p.title, p span.c8, p span.c3, p span.c12"
        )
      )
        .map((el) => el.closest("p"))
        .filter(Boolean);

      headings = [...new Set(googleHeadings)];
    }

    /* ✅ Build TOC Items */
    const tocItems = headings
      .map((el, index) => {
        const text = el.innerText.trim();

        // Skip junk
        if (!text) return null;
        if (text.length > 80) return null;

        // Assign stable ID
        const id = `section-${index}`;
        el.setAttribute("id", id);

        return { id, text };
      })
      .filter(Boolean);

    setToc(tocItems);

    /* ✅ Inject IDs ONCE (no infinite loop) */
    const updated = tempDiv.innerHTML;
    if (updated !== html) {
      setHtml(updated);
    }
  }, [html]);

  /* ============================================
     ✅ Scroll Spy Highlight
  ============================================ */
  useEffect(() => {
    if (!toc.length) return;

    const spy = () => {
      let current = "";

      toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        if (el.getBoundingClientRect().top < 180) {
          current = item.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", spy);
    return () => window.removeEventListener("scroll", spy);
  }, [toc]);

  /* ============================================
     ✅ Smooth Scroll With Offset
  ============================================ */
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = -110;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />

      <Head>
        <title>{pageTitle} | DreamIT Glossary</title>
        <link rel="stylesheet" href="/assets/files/style.css" />
      </Head>

      <main>
        {/* ✅ HERO */}
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <div>
                <div>
  <h1 className="text-black text-2xl md:text-5xl font-semibold mb-7">
    {pageTitle}
  </h1>

  <h6 className="max-w-[34rem] text-black-600 text-lg leading-relaxed">
    Discover key terms in cloud, AI, analytics & enterprise IT.
  </h6>
</div>
              </div>

              <div className="flex justify-end">
                <img
                  src="/assets/images/glossarytopics.png"
                  alt="Glossary Banner"
                  className="w-[480px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          <h4 className="text-center mt-16 text-2xl md:text-3xl font-medium text-black">
            Empowering Industries with Data-Driven Solutions
          </h4>
        </div>

        {/* ✅ CONTENT + SIDEBAR */}
        <section className="max-w-[1350px] mx-auto mt-[60px] px-[25px] grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[45px] items-start">
          {/* LEFT CONTENT */}
          <div className="doc-content">
            {loading ? (
              <p className="text-center">Loading…</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </div>

          {/* ✅ SIDEBAR */}
          <aside className="sticky top-[120px]">
            <div className="rounded-[15px] bg-white shadow-[0px_4px_13.2px_0px_rgba(142,142,142,0.25)] py-6 min-h-[200px] max-h-[380px] overflow-y-auto featured-blogs-scrollbar">
              <h2 className="mb-4 text-[20px] ml-6 font-semibold">
                Table of Content
              </h2>

              <div className="space-y-4">
                {toc.map((item) => {
                  const active = activeId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`relative pl-4 transition-all duration-200 ${
                        active
                          ? "border-l-[3.5px] border-[#00A9FF]"
                          : "border-l-2 border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => handleScroll(item.id)}
                        className={`block w-full text-left text-[16px] font-medium ${
                          active
                            ? "text-[#00A9FF]"
                            : "text-[#1B1B1F] hover:text-[#00A9FF]"
                        }`}
                      >
                        {item.text}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = glossaryTopics.map((topic) => ({
    params: { slug: topic.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
