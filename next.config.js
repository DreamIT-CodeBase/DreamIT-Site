module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },

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
