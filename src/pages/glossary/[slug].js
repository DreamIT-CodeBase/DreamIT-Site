import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export async function getStaticProps(context) {
    const { slug } = context.params;
    const filePath = path.join(process.cwd(), 'public', 'assets', 'files', `${slug}.html`);

    try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const { load } = await import('cheerio');
        const $ = load(raw);

        // Extract <link> tags from head (stylesheets, fonts)
        const headLinks = [];
        $('head link').each((i, el) => {
            const attribs = el.attribs || {};
            headLinks.push(attribs);
        });

        // Extract <style> blocks from head (concatenate)
        let headStyles = '';
        $('head style').each((i, el) => {
            headStyles += $(el).html() || '';
        });

        // Extract body inner HTML
        const bodyHtml = $('body').length ? $('body').html() : $.root().html();

        return {
            props: {
                headLinks,
                headStyles,
                bodyHtml,
            },
        };
    } catch (err) {
        return { props: { error: err.message, headLinks: [], headStyles: '', bodyHtml: '' } };
    }
}

export async function getStaticPaths() {
    const filesDir = path.join(process.cwd(), 'public', 'assets', 'files');
    const filenames = fs.readdirSync(filesDir).filter((file) => file.endsWith('.html'));
    const paths = filenames.map((name) => ({
        params: { slug: name.replace('.html', '') },
    }));

    return {
        paths,
        fallback: false,
    };
}

const GlossaryItem = ({ headLinks = [], headStyles = '', bodyHtml = '', error }) => {
    return (
        <div>
            <Head>
                {/* Render link tags extracted from the HTML head */}
                {headLinks.map((attrs, i) => {
                    // Render only safe link types (stylesheet, preconnect, preload, etc.)
                    const rel = attrs.rel || '';
                    const href = attrs.href || '';
                    return (
                        <link
                            key={i}
                            rel={rel}
                            href={href}
                            as={attrs.as}
                            crossOrigin={attrs.crossorigin}
                            type={attrs.type}
                            media={attrs.media}
                        />
                    );
                })}

                {/* Inject style blocks from the HTML head */}
                {headStyles ? <style dangerouslySetInnerHTML={{ __html: headStyles }} /> : null}
            </Head>

            <Header />
            <main>
                <div className="container">
                    <div className="slug-content">
                        {error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                        )}
                    </div>
                </div>
            </main>
            <Footer />

            <style jsx>{`
                .container {
                    width: 1190px;
                    margin: 0 auto;
                }
                .slug-content {
                    padding: 60px;
                    text-align: center;
                }
                h1 {
                    font-size: 36px;
                    color: #333;
                }
                p {
                    font-size: 18px;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default GlossaryItem;