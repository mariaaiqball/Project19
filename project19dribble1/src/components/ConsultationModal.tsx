import { useEffect, type FormEvent } from "react";
import { X, Calendar } from "lucide-react";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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

  if (!isOpen) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onClose();
    window.location.href = "#contact";
  }

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

      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-p19-muted transition-colors hover:bg-p19-cream hover:text-p19-navy"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-p19-blue-50">
          <Calendar size={22} className="text-p19-blue" />
        </div>

        <h2 id="consultation-title" className="font-display text-2xl font-bold text-p19-navy">
          Book a free consultation
        </h2>
        <p className="mt-2 text-sm text-p19-muted">
          30 minutes, no obligation. Tell us a bit about yourself and we'll reach
          out to schedule your call.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="modal-name" className="mb-1 block text-sm font-medium text-p19-navy">
              Full Name
            </label>
            <input
              id="modal-name"
              type="text"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
            />
          </div>
          <div>
            <label htmlFor="modal-email" className="mb-1 block text-sm font-medium text-p19-navy">
              Email
            </label>
            <input
              id="modal-email"
              type="email"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
            />
          </div>
          <div>
            <label htmlFor="modal-company" className="mb-1 block text-sm font-medium text-p19-navy">
              Company
            </label>
            <input
              id="modal-company"
              type="text"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-p19-blue py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light"
          >
            Schedule My Free Call
          </button>
        </form>
      </div>
    </div>
  );
}
