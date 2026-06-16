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
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

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
}
