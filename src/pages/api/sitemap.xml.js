// import { AHD_HOST } from "@/utils/constant";

// export default async function handler(req, res) {
//   try {
//     res.setHeader('Content-Type', 'application/xml');

//     const PAGES_URL = `${AHD_HOST}/page`;
//     const baseUrl = "https://dreamitcs.com";
//     const currentTimestamp = new Date().toISOString();

//     const response = await fetch(PAGES_URL);
//     const posts = await response.json();

//     // Static URLs to include in the sitemap
//     const staticUrls = [
//       { loc: `${baseUrl}/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/about-us/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/career/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/industries/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/insights/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/privacy-policy/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/services/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/terms/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 },
//       { loc: `${baseUrl}/thank-you/`, lastmod: currentTimestamp, changefreq: 'daily', priority: 0.7 }
//     ];

//     // Create XML with proper spacing and escaping
//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${staticUrls.map(url => `
//   <url>
//     <loc>${url.loc}</loc>
//     <lastmod>${url.lastmod}</lastmod>
//     <changefreq>${url.changefreq}</changefreq>
//     <priority>${url.priority}</priority>
//   </url>`).join('')}
// ${posts['rows'].map((post) => `
//   <url>
//     <loc>${baseUrl}/blog/${encodeURIComponent(post.slug)}</loc>
//     <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>0.8</priority>
//   </url>`).join('')}
// </urlset>`;

//     res.status(200).send(sitemap);
//   } catch (error) {
//     console.error('Error generating sitemap:', error);
//     res.status(500).send('Error generating sitemap');
//   }
// }
