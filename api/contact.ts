import type { VercelRequest, VercelResponse } from "@vercel/node";

type ConsultationPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
  source?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "mariaaiqball@gmail.com";
  const contactFromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Project 19 <onboarding@resend.dev>";

  if (!resendApiKey) {
    return res.status(503).json({
      error:
        "Form delivery is not configured yet. Add RESEND_API_KEY in your deployment environment.",
    });
  }

  const payload = (req.body ?? {}) as ConsultationPayload;

  if (payload.website) {
    return res.status(200).json({ success: true });
  }

  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const source = payload.source?.trim() || "website";

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
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

  try {
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
      return res.status(502).json({
        error: "We couldn't send your message right now. Please try again shortly.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      error: "Something went wrong while sending your message. Please try again.",
    });
  }
}
