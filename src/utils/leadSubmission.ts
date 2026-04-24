import { LEAD_API, LEAD_SUBMISSION_TIMEOUT_MS } from "@/utils/constant";

export type LeadFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  selectService: string;
  messages: string;
};

const LEAD_SUBMISSION_ENDPOINT = `${LEAD_API.replace(/\/+$/, "")}/lead`;

const getErrorMessageFromPayload = (payload: any) => {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const directMessage =
    payload.message || payload.title || payload.detail || payload.error;

  if (typeof directMessage === "string" && directMessage.trim()) {
    return directMessage.trim();
  }

  if (Array.isArray(payload.errors)) {
    const firstError = payload.errors.find(
      (value: unknown) => typeof value === "string" && value.trim()
    );

    if (firstError) {
      return firstError.trim();
    }
  }

  if (payload.errors && typeof payload.errors === "object") {
    const firstErrorEntry = Object.values(payload.errors).find(
      (value: unknown) => {
        if (Array.isArray(value)) {
          return value.some(
            (entry: unknown) => typeof entry === "string" && entry.trim()
          );
        }

        return typeof value === "string" && value.trim();
      }
    );

    if (Array.isArray(firstErrorEntry)) {
      const firstError = firstErrorEntry.find(
        (value: unknown) => typeof value === "string" && value.trim()
      );

      if (firstError) {
        return firstError.trim();
      }
    }

    if (typeof firstErrorEntry === "string" && firstErrorEntry.trim()) {
      return firstErrorEntry.trim();
    }
  }

  return "";
};

const getLeadSubmissionErrorMessage = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const errorPayload = await response.json().catch(() => null);
    const errorMessage = getErrorMessageFromPayload(errorPayload);

    if (errorMessage) {
      return errorMessage;
    }
  }

  if (response.status >= 500) {
    return "Lead submission failed. Please try again.";
  }

  return "Unable to submit the form. Please review your details and try again.";
};

const normalizeLeadPayload = (data: LeadFormValues) => ({
  firstName: data.firstName.trim(),
  lastName: data.lastName.trim(),
  email: data.email.trim(),
  selectService: data.selectService.trim(),
  messages: data.messages.trim(),
});

export const submitLead = async (data: LeadFormValues) => {
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new Error(
      "You appear to be offline. Please check your internet connection and try again."
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    LEAD_SUBMISSION_TIMEOUT_MS
  );

  try {
    const response = await fetch(LEAD_SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(normalizeLeadPayload(data)),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(await getLeadSubmissionErrorMessage(response));
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Lead submission timed out. Please try again.");
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the lead service. Please try again."
      );
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};
