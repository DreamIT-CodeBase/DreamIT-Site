// pages/glossary/index.js

import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Glossary() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const HEADER_OFFSET = 88;

  /* ============================================
     Scroll Button + Initial Load
  ============================================ */
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 240);

    window.addEventListener("scroll", onScroll, { passive: true });

    loadGlossary();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ============================================
     Scroll to Hash Section After Load
  ============================================ */
  useEffect(() => {
    if (!loading && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => scrollToElementWithOffset(el, HEADER_OFFSET), 50);
      }
    }
  }, [loading]);

  /* ============================================
     Fetch Slug List from glossary.json
  ============================================ */
  async function fetchSlugsList() {
    try {
      const res = await fetch("/assets/files/glossary.json", {
        cache: "no-store",
      });

      if (!res.ok) return [];

      const arr = await res.json();
      return arr.map((s) => s.replace(/\.html$/i, ""));
    } catch {
      return [];
    }
  }

  /* ============================================
     Extract Title + First Line Description
  ============================================ */
  function parseHtmlForMeta(htmlText, slug) {
    try {
      const doc = new DOMParser().parseFromString(htmlText, "text/html");

      // Title Extraction
      let titleEl = doc.querySelector("h1, h2, .c24, .title, [role='heading']");
      if (!titleEl) {
        titleEl =
          doc.querySelector("[id^='h.'], .c24, .c34") ||
          doc.querySelector("body > *");
      }

      let title = titleEl ? titleEl.textContent.trim() : slug;

      // Description Extraction (Only 1 Line)
      let desc = "";
      const paragraphs = Array.from(doc.querySelectorAll("p"));

      for (const p of paragraphs) {
        const text = p.textContent.trim();

        if (text.length > 30) {
          desc = text.split(".")[0] + ".";

          if (desc.length > 140) {
            desc = desc.substring(0, 140) + "...";
          }
          break;
        }
      }

      // Meta fallback
      if (!desc) {
        const meta = doc.querySelector("meta[name='description']");
        if (meta?.getAttribute("content")) {
          desc = meta.getAttribute("content").trim();
        }
      }

      return {
        title: title.replace(/\s+/g, " "),
        description: desc.replace(/\s+/g, " "),
      };
    } catch {
      return { title: slug, description: "" };
    }
  }

  /* ============================================
     Group Topics Alphabetically
  ============================================ */
  function buildGroups(items) {
    const map = {};

    items.forEach((it) => {
      const letter = it.title?.[0]?.toUpperCase() || "#";

      if (!map[letter]) map[letter] = [];
      map[letter].push(it);
    });

    return Object.keys(map)
      .sort()
      .map((letter) => ({
        letter,
        items: map[letter],
      }));
  }

  /* ============================================
     Load Glossary Items
  ============================================ */
  async function loadGlossary() {
    setLoading(true);

    const slugs = await fetchSlugsList();

    if (!slugs.length) {
      setTopics([]);
      setLoading(false);
      return;
    }

    const collected = [];

    for (const slug of slugs) {
      try {
        const res = await fetch(`/assets/files/${slug}.html`);

        if (!res.ok) continue;

        const htmlText = await res.text();
        const meta = parseHtmlForMeta(htmlText, slug);

        collected.push({
          slug,
          title: meta.title,
          description: meta.description,
        });
      } catch {
        continue;
      }
    }

    collected.sort((a, b) => a.title.localeCompare(b.title));

    setTopics(buildGroups(collected));
    setLoading(false);
  }

  /* ============================================
     Smooth Scroll Helper
  ============================================ */
  function scrollToElementWithOffset(el, offset = 0) {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;

    window.scrollTo({
      top: absoluteTop - offset,
      behavior: "smooth",
    });
  }

  /* ============================================
     Alphabet Navigation
  ============================================ */
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  const hasLetter = (letter) =>
    topics.some((group) => group.letter === letter);

  const handleScrollToSection = (letter) => {
    const el = document.getElementById(`section-${letter}`);
    if (el) scrollToElementWithOffset(el, HEADER_OFFSET);
  };

  /* ============================================
     Scroll Top Button
  ============================================ */
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  /* ============================================
     CamelCase Slug Helper
  ============================================ */
  const toCamelCase = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  /* ============================================
     UI Render
  ============================================ */
  return (
    <div>
      <Header />

      <main>
        {/* HERO */}
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <div>
                <div className="-mt-24">
                  <h1 className="text-black hero-section-title leading-tight">
                    Glossary
                  </h1>

                  <h6 className="max-w-[34rem] text-black-800 hero-section-subtitle">
                    Discover key terms in cloud, AI, analytics, and enterprise IT.
                    A glossary designed to support your digital transformation.
                  </h6>
                </div>
              </div>

              <div className="flex justify-end">
                <img
                  src="/assets/images/glossaryimg.png"
                  alt="Glossary Banner"
                  className="w-[520px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="glossary-container">
          {/* Alphabet */}
          <div className="alphabet-row">
            {alphabet.map((letter) => {
              const enabled = hasLetter(letter);

              return (
                <button
                  key={letter}
                  className={`alpha-btn ${
                    enabled ? "enabled" : "disabled"
                  }`}
                  disabled={!enabled}
                  onClick={() => enabled && handleScrollToSection(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Loading */}
          {loading && (
            <p style={{ textAlign: "center", margin: "18px 0" }}>
              Loading glossary…
            </p>
          )}

          {/* Items */}
          <div className="glossary-content">
            {topics.map((group) => (
              <section
                key={group.letter}
                id={`section-${group.letter}`}
              >
                {group.items.map((item) => (
                  <article key={item.slug} className="entry">
                    <div className="entry-left">
                      <h2 className="entry-title">
                        {item.title || toCamelCase(item.slug)}
                      </h2>
                    </div>

                    <div className="entry-right">
                      <p className="entry-desc">{item.description}</p>

                      <a
                        href={`/glossary/${item.slug}`}
                        className="read-more"
                      >
                        Read More ▸
                      </a>
                    </div>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Scroll Top */}
      {showTopBtn && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* ✅ SAME CSS (UNCHANGED) */}
      <style jsx>{`
        .glossary-container {
          max-width: 1280px;
          margin: 10px auto 80px;
          padding: 0 20px;
        }

        .alphabet-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          padding: 8px 0;
        }

        .alpha-btn {
          width: 52px;
          height: 52px;
          border-radius: 6px;
          border: 1.5px solid #000;
          background: #fff;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.6);
        }

        .alpha-btn.enabled {
          cursor: pointer;
          background: #fffaf0;
          color: #000;
        }

        .alpha-btn.disabled {
          opacity: 0.35;
        }

        .glossary-content {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .entry {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          padding: 40px 0;
          border-bottom: 2px solid rgba(0, 0, 0, 0.14);
        }

        .entry-title {
          font-size: 34px;
          font-weight: 500;
          color: #000;
          margin: 0;
        }

        .entry-desc {
          font-size: 18px;
          line-height: 1.8;
          color: #111;
          margin-bottom: 14px;
        }

        .read-more {
          font-weight: 700;
          color: #0b61d6;
          text-decoration: none;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        .scroll-top-btn {
          position: fixed;
          right: 22px;
          bottom: 28px;
          width: 46px;
          height: 46px;
          border-radius: 10px;
          border: none;
          background: rgba(11, 97, 214, 0.95);
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          .entry {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
