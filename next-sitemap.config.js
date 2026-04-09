const glossaryTopics = require("./src/data/glossaryTopics.json");

const glossaryPaths = [
  "/glossary",
  ...glossaryTopics.map(({ slug }) => `/glossary/${slug}`),
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dreamitcs.com",
  output: "export",
  outDir: "out",
  generateRobotsTxt: true,
  changefreq: "daily",
  exclude: [
    "/blogs",
    "/case-studies/preview",
    "/blogs/preview",
    "/case-studies",
  ],
  additionalPaths: async (config) =>
    Promise.all(
      glossaryPaths.map((path) => config.transform(config, path))
    ),
};
