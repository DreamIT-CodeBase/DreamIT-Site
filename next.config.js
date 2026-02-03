module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },

  // ✅ Force no trailing slash
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};
