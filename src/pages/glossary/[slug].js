import { useEffect, useState } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import DataDrivenSolutions from "../../components/home/DataDrivenSolutions";

import { glossaryTopics } from "../../data/glossaryTopics";

export default function GlossarySlug({ slug, initialHtml }) {
  const [html, setHtml] = useState(initialHtml || "");
  const [loading] = useState(false);

  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");

  const topic = glossaryTopics.find((t) => t.slug === slug);
  const pageTitle = topic?.title || "Glossary Topic";
  const pageSubtitle =
    topic?.description ||
    "Discover key terms in cloud, AI, analytics & enterprise IT.";

  useEffect(() => {
    if (!html) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    let headings = [];

    const cleanHeadings = Array.from(tempDiv.querySelectorAll("h2, h3"));
    if (cleanHeadings.length > 0) {
      headings = cleanHeadings;
    } else {
      const googleHeadings = Array.from(
        tempDiv.querySelectorAll("p.title, p span.c8, p span.c3, p span.c12")
      )
        .map((el) => el.closest("p"))
        .filter(Boolean);

      headings = [...new Set(googleHeadings)];
    }

    const tocItems = headings
      .map((el, index) => {
        const text = el.innerText.trim();

        if (!text) return null;
        if (text.length > 80) return null;

        const id = `section-${index}`;
        el.setAttribute("id", id);

        return { id, text };
      })
      .filter(Boolean);

    setToc(tocItems);

    const updated = tempDiv.innerHTML;
    if (updated !== html) {
      setHtml(updated);
    }
  }, [html]);

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
        <div className="home-page-hero-section-background-image pb-[10px]">
          <div className="container ph-50 pd-40">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <div>
                <div>
                  <h1 className="text-black text-2xl md:text-5xl font-semibold mb-7">
                    {pageTitle}
                  </h1>

                  <h6 className="max-w-[34rem] text-black-600 text-lg leading-relaxed">
                    {pageSubtitle}
                  </h6>
                </div>
              </div>

              <div className="flex justify-end">
                <img
                  src="/assets/images/glossarytopics.png"
                  alt="Glossary Banner"
                  className="w-full max-w-[480px] rounded-[28px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-10">
            <DataDrivenSolutions />
          </div>
        </div>

        <section className="max-w-[1350px] mx-auto mt-[36px] md:mt-[60px] px-4 md:px-[25px] grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 md:gap-[45px] items-start">
          <div className="doc-content">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </div>

          <aside className="lg:sticky lg:top-[120px]">
            <div className="rounded-[15px] bg-white shadow-[0px_4px_13.2px_0px_rgba(142,142,142,0.25)] py-6 min-h-[200px] max-h-[380px] overflow-y-auto featured-blogs-scrollbar">
              <h2 className="mb-4 text-[20px] ml-6 font-semibold">Table of Content</h2>

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
  const filePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "files",
    `${params.slug}.html`
  );

  let initialHtml = "";
  try {
    initialHtml = fs.readFileSync(filePath, "utf8");
  } catch {
    return { notFound: true };
  }

  return {
    props: {
      slug: params.slug,
      initialHtml,
    },
  };
}
