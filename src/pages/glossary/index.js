// pages/glossary/index.js

import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";

/* ✅ Static Topics List (Best for Production Stability) */
const topics = [
  {
    letter: "M",
    items: [
      {
        title: "Model Context Protocol",
        slug: "model-context-protocol",
        description:
          "Model Context Protocol (MCP) defines conventions for communicating context, metadata, and instructions to language models to improve reliability, safety, and interoperability across systems.",
      },
    ],
  },
  {
    letter: "P",
    items: [
      {
        title: "Power BI Desktop Projects",
        slug: "power-bi-desktop-projects",
        description:
          "Power BI Desktop Projects enable structured development, version control, and collaborative management of Power BI reports by storing metadata and report assets in a source-friendly project format.",
      },
    ],
  },
];

export default function Glossary() {
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  const [showTopBtn, setShowTopBtn] = useState(false);

  const HEADER_OFFSET = 88;

  /* Scroll Button Logic */
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 240);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Letter Exists Check */
  const hasLetter = (letter) => topics.some((g) => g.letter === letter);

  /* Smooth Scroll */
  const scrollToElementWithOffset = (el) => {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;

    window.scrollTo({
      top: absoluteTop - HEADER_OFFSET,
      behavior: "smooth",
    });
  };

  /* Alphabet Click */
  const handleScrollToSection = (letter) => {
    const el = document.getElementById(`section-${letter}`);
    if (el) scrollToElementWithOffset(el);
  };

  /* Scroll Top */
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <Header />

      <main>
        {/* HERO */}
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {/* LEFT */}
              <div>
                <div className="-mt-14">
                  <h1 className="text-black hero-section-title leading-tight">
                    Glossary
                  </h1>

                  <h6 className="max-w-[34rem] text-black-800 hero-section-subtitle">
                    Discover key terms in cloud, AI, analytics, and enterprise IT.
                  </h6>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-end">
                <img
                  src="/assets/images/glossaryimg.png"
                  alt="Glossary Banner"
                  className="w-[520px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          <h4 className="font-medium text-center xl:mb-6 data-driven-title">
            Empowering Industries with Data-Driven Solutions
          </h4>
        </div>

        {/* CONTENT */}
        <div className="glossary-container">
          {/* Alphabet Row */}
          <div className="alphabet-row">
            {alphabet.map((letter) => {
              const enabled = hasLetter(letter);

              return (
                <button
                  key={letter}
                  className={`alpha-btn ${enabled ? "enabled" : "disabled"}`}
                  disabled={!enabled}
                  onClick={() => enabled && handleScrollToSection(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Glossary Items */}
          <div className="glossary-content">
            {topics.map((group) => (
              <section key={group.letter} id={`section-${group.letter}`}>
                {group.items.map((item) => (
                  <article key={item.slug} className="entry">
                    {/* Left */}
                    <div className="entry-left">
                      <h2 className="entry-title">{item.title}</h2>
                    </div>

                    {/* Right */}
                    <div className="entry-right">
                      <p className="entry-desc">{item.description}</p>

                      <Link
                        href={`/glossary/${item.slug}`}
                        className="read-more"
                      >
                        Read More ▸
                      </Link>
                    </div>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Scroll Top Button */}
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
