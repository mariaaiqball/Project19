export type ConsultationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  source: string;
};

type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitConsultation(
  data: ConsultationFormData,
): Promise<SubmitResult> {
  try {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 20000);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    window.clearTimeout(timeoutId);

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return {
        ok: false,
        error:
          "The form service is unavailable right now. Please email info@theproject19.com directly.",
      };
    }

    let body: { error?: string; success?: boolean } = {};

    try {
      body = (await response.json()) as { error?: string; success?: boolean };
    } catch {
      body = {};
    }

    if (!response.ok) {
      return {
        ok: false,
        error:
          body.error ??
          "Something went wrong while sending your message. Please try again.",
      };
    }

    return { ok: true };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        ok: false,
        error: "The request timed out. Please check your connection and try again.",
      };
    }

    return {
      ok: false,
      error:
        "Unable to reach the form service. Please email info@theproject19.com directly.",
    };
  }
}
