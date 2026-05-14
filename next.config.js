const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const LEAD_DEV_PROXY_DESTINATION =
  "https://dreamitleadapi-dshjfhfegxe0eea3.eastasia-01.azurewebsites.net/lead";

module.exports = (phase) => {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: { unoptimized: true },
    trailingSlash: false,
    ...(isDevelopmentServer ? {} : { output: "export" }),
    ...(isDevelopmentServer
      ? {
          async rewrites() {
            return [
              {
                source: "/api/lead",
                destination: LEAD_DEV_PROXY_DESTINATION,
              },
            ];
          },
        }
      : {}),
  };
};
