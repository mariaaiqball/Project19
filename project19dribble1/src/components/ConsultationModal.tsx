import { useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import { ConsultationForm } from "./ConsultationForm";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      <div
        className="absolute inset-0 bg-p19-navy/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-p19-muted transition-colors hover:bg-p19-cream hover:text-p19-navy"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-p19-blue-50">
              <Send size={24} className="text-p19-blue" />
            </div>
            <h2 id="consultation-title" className="font-display mt-6 text-xl font-bold text-p19-navy">
              Thank you for reaching out!
            </h2>
            <p className="mt-2 max-w-sm text-p19-muted">
              We'll be in touch within one business day to schedule your free
              consultation call.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="consultation-title" className="font-display pr-8 text-2xl font-bold text-p19-navy">
              Request a free consultation
            </h2>
            <p className="mt-2 text-sm text-p19-muted">
              Tell us about your challenges and we'll schedule a free consultation
              to explore how Project 19 can help.
            </p>
            <div className="mt-6">
              <ConsultationForm
                idPrefix="modal"
                source="consultation-modal"
                onSuccess={() => setSubmitted(true)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
