// pages/glossary/index.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import DataDrivenSolutions from "../../components/home/DataDrivenSolutions";

import { glossaryTopics } from "../../data/glossaryTopics";
import { SITE_URL } from "../../utils/constant";

const ITEMS_PER_PAGE = 3;

/* ✅ Auto Group Topics by First Letter */
const groupTopicsByLetter = (topics) => {
  const grouped = {};

  topics.forEach((topic) => {
    const letter = topic.title.charAt(0).toUpperCase();

    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(topic);
  });

  return Object.keys(grouped)
    .sort()
    .map((letter) => ({
      letter,
      items: grouped[letter],
    }));
};

export default function Glossary() {
  const router = useRouter();
  const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const canonicalUrl = new URL("/glossary", SITE_URL).toString();

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [pendingLetter, setPendingLetter] = useState(null);

  const HEADER_OFFSET = 88;

  const sortedTopics = [...glossaryTopics].sort((firstTopic, secondTopic) =>
    firstTopic.title.localeCompare(secondTopic.title)
  );
  const totalPages = Math.max(
    1,
    Math.ceil(sortedTopics.length / ITEMS_PER_PAGE)
  );
  const queryPage = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const parsedPage = Number.parseInt(queryPage || "1", 10);
  const currentPage =
    Number.isNaN(parsedPage) || parsedPage < 1
      ? 1
      : Math.min(parsedPage, totalPages);
  const pageStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageTopics = sortedTopics.slice(
    pageStartIndex,
    pageStartIndex + ITEMS_PER_PAGE
  );
  const groupedTopics = groupTopicsByLetter(currentPageTopics);
  const visibleTopicStart = sortedTopics.length === 0 ? 0 : pageStartIndex + 1;
  const visibleTopicEnd = Math.min(
    pageStartIndex + ITEMS_PER_PAGE,
    sortedTopics.length
  );
  const letterPageMap = sortedTopics.reduce((pagesByLetter, topic, index) => {
    const letter = topic.title.charAt(0).toUpperCase();

    if (!pagesByLetter[letter]) {
      pagesByLetter[letter] = Math.floor(index / ITEMS_PER_PAGE) + 1;
    }

    return pagesByLetter;
  }, {});

  /* Scroll Button Logic */
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 240);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Letter Exists Check */
  const hasLetter = (letter) => Boolean(letterPageMap[letter]);

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

  const updatePage = async (nextPage) => {
    const safePage = Math.min(Math.max(nextPage, 1), totalPages);

    if (safePage === currentPage) return;

    const nextQuery = safePage === 1 ? {} : { page: String(safePage) };

    await router.push(
      {
        pathname: router.pathname,
        query: nextQuery,
      },
      undefined,
      { shallow: true, scroll: false }
    );

    scrollToElementWithOffset(document.getElementById("glossary-top"));
  };

  /* Alphabet Click */
  const handleScrollToSection = async (letter) => {
    const targetPage = letterPageMap[letter];

    if (!targetPage) return;

    if (targetPage !== currentPage) {
      setPendingLetter(letter);
      await updatePage(targetPage);
      return;
    }

    const el = document.getElementById(`section-${letter}`);
    if (el) scrollToElementWithOffset(el);
  };

  /* Scroll Top */
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    if (!pendingLetter) return;

    const section = document.getElementById(`section-${pendingLetter}`);
    if (!section) return;

    scrollToElementWithOffset(section);
    setPendingLetter(null);
  }, [currentPage, pendingLetter]);

  return (
    <div>
      <Head>
        <title>Glossary of Terms | Dream IT – Tech & Business Definitions</title>
        <meta
          name="title"
          content="Glossary of Terms | Dream IT – Tech & Business Definitions"
        />
        <meta
          name="description"
          content="Explore the DreamIT glossary covering Microsoft Fabric, Power BI, data visualization, digital marketing, and AI terms. Clear, practical definitions for analysts, marketers, and tech professionals."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>

      <Header />

      <main>
        {/* ✅ HERO SECTION */}
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {/* LEFT */}
              <div>
                <div className="-mt-14">
                  <h1 className="text-black text-2xl md:text-5xl font-semibold mb-7">
                    Glossary
                  </h1>

                  <h6 className="max-w-[34rem] text-black-600 text-lg leading-relaxed">
                    Discover key terms in cloud, AI, analytics, and enterprise IT.
                  </h6>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-end">
                <img
                  src="/assets/images/glossaryimg.png"
                  alt="Glossary Banner"
                  className="w-full max-w-[520px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-10">
            <DataDrivenSolutions />
          </div>
        </div>

        {/* ✅ CONTENT */}
        <div className="glossary-container" id="glossary-top">
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

          {/* ✅ Glossary Items */}
          <div className="glossary-content">
            {groupedTopics.map((group) => (
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

          {totalPages > 1 && (
            <div className="pagination-wrap">
              <p className="pagination-summary">
                Showing {visibleTopicStart}-{visibleTopicEnd} of{" "}
                {sortedTopics.length} terms
              </p>

              <div className="pagination-controls" aria-label="Glossary pages">
                <button
                  className="page-btn page-btn-nav"
                  aria-label="Previous page"
                  disabled={currentPage === 1}
                  onClick={() => {
                    setPendingLetter(null);
                    void updatePage(currentPage - 1);
                  }}
                >
                  <span aria-hidden="true">←</span>
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={page}
                      className={`page-btn ${
                        page === currentPage ? "page-btn-active" : ""
                      }`}
                      aria-current={page === currentPage ? "page" : undefined}
                      onClick={() => {
                        setPendingLetter(null);
                        void updatePage(page);
                      }}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  className="page-btn page-btn-nav"
                  aria-label="Next page"
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setPendingLetter(null);
                    void updatePage(currentPage + 1);
                  }}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Scroll Top Button */}
      {showTopBtn && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Glossary page styles */}
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

        .pagination-wrap {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .pagination-summary {
          margin: 0;
          font-size: 15px;
          color: rgba(0, 0, 0, 0.7);
        }

        .pagination-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .page-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 46px;
          height: 46px;
          padding: 0 18px;
          border-radius: 10px;
          border: 1px solid rgba(11, 97, 214, 0.2);
          background: #fff;
          color: #0b61d6;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .page-btn:hover:not(:disabled) {
          background: #eef5ff;
        }

        .page-btn-active {
          background: #0b61d6;
          border-color: #0b61d6;
          color: #fff;
        }

        .page-btn:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .page-btn-nav {
          min-width: 46px;
          padding: 0;
          font-size: 20px;
          line-height: 1;
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

        @media (max-width: 768px) {
          .glossary-container {
            margin: 0 auto 60px;
            padding: 0 14px;
          }

          .alphabet-row {
            justify-content: flex-start;
            gap: 8px;
            overflow-x: auto;
            padding: 6px 0 10px;
          }

          .alpha-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
            flex: 0 0 auto;
          }

          .entry {
            gap: 16px;
            padding: 22px 0;
          }

          .pagination-wrap {
            margin-top: 26px;
            gap: 14px;
          }

          .pagination-summary {
            font-size: 14px;
            text-align: center;
          }

          .pagination-controls {
            gap: 8px;
          }

          .page-btn {
            min-width: 40px;
            height: 40px;
            padding: 0 14px;
            font-size: 14px;
          }

          .page-btn-nav {
            min-width: 40px;
            font-size: 18px;
          }

          .entry-title {
            font-size: 26px;
            line-height: 1.25;
          }

          .entry-desc {
            font-size: 16px;
            line-height: 1.65;
          }

          .scroll-top-btn {
            right: 14px;
            bottom: 18px;
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
