type ConsultationPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
  source?: string;
  website?: string;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "info@theproject19.com";
  const contactFromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Project 19 <onboarding@resend.dev>";

  if (!resendApiKey) {
    return jsonResponse(
      {
        error:
          "Form delivery is not configured yet. Add RESEND_API_KEY in your deployment environment.",
      },
      503,
    );
  }

  let payload: ConsultationPayload;

  try {
    payload = (await request.json()) as ConsultationPayload;
  } catch {
    return jsonResponse({ error: "Invalid request body" }, 400);
  }

  if (payload.website) {
    return jsonResponse({ success: true });
  }

  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const source = payload.source?.trim() || "website";

  if (!firstName || !lastName || !email || !message) {
    return jsonResponse({ error: "Please fill in all required fields." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: "Please enter a valid email address." }, 400);
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `New consultation request from ${fullName}`;
  const html = `
    <h2>New consultation request</h2>
    <p><strong>Source:</strong> ${escapeHtml(source)}</p>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend error:", errorBody);
    return jsonResponse(
      { error: "We couldn't send your message right now. Please try again shortly." },
      502,
    );
  }

  return jsonResponse({ success: true });
}
