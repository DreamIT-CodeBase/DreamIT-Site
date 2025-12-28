import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
// import fs from 'fs';
// import path from 'path';
// import cheerio from 'cheerio';
import { useRouter } from 'next/router';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';


// utils/extractHtmlFragment.js
// export function extractHtmlFragment(html = '') {
//   if (!html || typeof html !== 'string') return '';

//   // Remove <base> tags (they change how relative URLs resolve)
//   html = html.replace(/<base[^>]*>/gi, '');

//   // If there's a <body> tag, return its inner HTML
//   const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
//   if (bodyMatch) return bodyMatch[1];

//   // If there's an <html> wrapper, return its inner HTML
//   const htmlMatch = html.match(/<html[^>]*>([\s\S]*?)<\/html>/i);
//   if (htmlMatch) return htmlMatch[1];

//   // Remove <head> block if present, return remainder
//   html = html.replace(/<head[\s\S]*?<\/head>/i, '');

//   // Fallback: return the cleaned HTML
//   return html;
// }





export async function getServerSideProps(context) {
    const { slug } = context.params;
    const filePath = path.join(process.cwd(), 'public', 'assets', 'files', `${slug}.html`);

    try {
        const raw = fs.readFileSync(filePath, 'utf8');

        // Load with cheerio
        // const $ = cheerio.load(raw);

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

        // Extract inline <script> in head if you need them (be careful with XSS)
        // const headScripts = [];
        // $('head script').each((i, el) => headScripts.push($(el).html()));

        // Extract body inner HTML
        const bodyHtml = $('body').length ? $('body').html() : $.root().html();

        // Optionally remove <base> tags to avoid changing relative URL resolution
        // $('head base').remove();

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




// export async function getServerSideProps(context) {
//     const { slug } = context.params;
//     let htmlContent = '';
//     let error = null;

//     try {
//         if (!slug) {
//             throw new Error('Slug missing from request');
//         }

//         const filePath = path.join(process.cwd(), 'public', 'assets', 'files', `${slug}.html`);
//         if (!fs.existsSync(filePath)) {
//             throw new Error('File not found');
//         }

//         htmlContent = fs.readFileSync(filePath, 'utf-8');
//     } catch (err) {
//         error = err.message;
//     }

//     return {
//         props: {
//             htmlContent,
//             error,
//         },
//     };
// }

// { htmlContent, error }
const GlossaryItem = ({ headLinks = [], headStyles = '', bodyHtml = '', error }) => {
    // const router = useRouter();
    // const { slug } = router.query;

    // const [htmlContent, setHtmlContent] = React.useState('');
    // const [error, setError] = React.useState('');
    // React.useEffect(() => {
    //     if (slug) {
    //         fetch(`/api/glossary-fetch?slug=${slug}`)
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error('Failed to fetch HTML content');
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => setHtmlContent(data.html))
    //             .catch((error) => setError(error.message));
    //     }


    // }, [slug]);

    // const fragment = React.useMemo(() => {
    //     const raw = extractHtmlFragment(htmlContent);
    //     // Optionally sanitize:
    //     // const safe = sanitizeHtml(raw, { allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']) });
    //     // return safe;
    //     return raw;
    // }, [htmlContent]);


    return (
        <div>
            <Head>
                {/* Render link tags extracted from the HTML head */}
                {headLinks.map((attrs, i) => {
                    // Render only safe link types (stylesheet, preconnect, preload, etc.)
                    const rel = attrs.rel || '';
                    const href = attrs.href || '';
                    // Skip any suspicious or inline data URIs if you want
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

            {/* width: 1190px; */}
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