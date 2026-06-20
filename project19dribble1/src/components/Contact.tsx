import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";

type ContactProps = {
  flushTop?: boolean;
  source?: string;
};

export function Contact({ flushTop = false, source = "contact-section" }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {flushTop && (
        <section
          className="relative aspect-[5/2] w-full overflow-hidden"
          aria-label="Contact header"
        >
          <img
            src="/assets/contact-header.png"
            alt="Project 19 consultants discussing technology solutions with a client"
            className="h-full w-full object-cover object-center"
          />
        </section>
      )}

      <section
        id="contact"
        className={
          flushTop
            ? "bg-p19-cream pb-20 pt-12 lg:pb-28 lg:pt-16"
            : "bg-p19-cream py-20 lg:py-28"
        }
      >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Contact
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              How can we help you today?
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Tell us about your challenges and we'll schedule a free consultation
              to explore how Project 19 can help.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <Mail size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Email</p>
                  <a
                    href="mailto:info@theproject19.com"
                    className="font-medium text-p19-navy hover:text-p19-blue"
                  >
                    info@theproject19.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <Phone size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="font-medium text-p19-navy hover:text-p19-blue"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-p19-blue-50">
                  <MapPin size={18} className="text-p19-blue" />
                </div>
                <div>
                  <p className="text-sm text-p19-muted">Location</p>
                  <p className="font-medium text-p19-navy">Serving local businesses nationwide</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-p19-blue-50">
                  <Send size={24} className="text-p19-blue" />
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-p19-navy">
                  Thank you for reaching out!
                </h3>
                <p className="mt-2 max-w-sm text-p19-muted">
                  We'll be in touch within one business day to schedule your free
                  consultation call.
                </p>
              </div>
            ) : (
              <ConsultationForm
                idPrefix="contact"
                source={source}
                onSuccess={() => setSubmitted(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
