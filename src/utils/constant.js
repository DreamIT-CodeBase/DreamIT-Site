export const PREVIEW = "preview";
export const SITE_URL = "https://www.dreamitcs.com";

export const AHD_HOST = `https://pagepilot.fabbuilder.com/api/tenant/67beb76503c96859162a68f7`;
export const LEAD_API = `/api`;
export const LEAD_SUBMISSION_TIMEOUT_MS =
  Number.parseInt(process.env.NEXT_PUBLIC_LEAD_SUBMISSION_TIMEOUT_MS || "", 10) ||
  30000;
