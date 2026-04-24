const https = require("https");
const { URL } = require("url");

const LEAD_UPSTREAM_ENDPOINT =
  "https://dreamitleadapi-dshjfhfegxe0eea3.eastasia-01.azurewebsites.net/lead";
const LEAD_UPSTREAM_URL = new URL(LEAD_UPSTREAM_ENDPOINT);
const REQUEST_TIMEOUT_MS = 30000;

const proxyLeadRequest = (payload) =>
  new Promise((resolve, reject) => {
    const requestBody = JSON.stringify(payload);

    const request = https.request(
      {
        protocol: LEAD_UPSTREAM_URL.protocol,
        hostname: LEAD_UPSTREAM_URL.hostname,
        port: LEAD_UPSTREAM_URL.port || 443,
        path: `${LEAD_UPSTREAM_URL.pathname}${LEAD_UPSTREAM_URL.search}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(requestBody),
        },
      },
      (response) => {
        let responseBody = "";

        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          responseBody += chunk;
        });
        response.on("end", () => {
          resolve({
            body: responseBody,
            headers: response.headers,
            statusCode: response.statusCode || 502,
          });
        });
      }
    );

    request.setTimeout(REQUEST_TIMEOUT_MS, () => {
      request.destroy(new Error("Lead proxy request timed out."));
    });

    request.on("error", reject);
    request.write(requestBody);
    request.end();
  });

module.exports = async function (context, req) {
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Method not allowed.",
      }),
    };
    return;
  }

  if (!req.body || typeof req.body !== "object") {
    context.res = {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "A valid JSON request body is required.",
      }),
    };
    return;
  }

  try {
    const upstreamResponse = await proxyLeadRequest(req.body);

    context.res = {
      status: upstreamResponse.statusCode,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type":
          upstreamResponse.headers["content-type"] || "application/json",
      },
      body: upstreamResponse.body || "",
    };
  } catch (error) {
    context.log.error("Lead proxy request failed.", error);
    context.res = {
      status: 502,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Unable to connect to the lead service. Please try again.",
      }),
    };
  }
};
