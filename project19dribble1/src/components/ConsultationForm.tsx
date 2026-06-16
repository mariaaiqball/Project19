import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { submitConsultation } from "../lib/submitConsultation";

type ConsultationFormProps = {
  idPrefix?: string;
  source: string;
  onSuccess?: () => void;
};

const inputClassName =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-p19-blue focus:ring-2 focus:ring-p19-blue/20";

export function ConsultationForm({
  idPrefix = "consultation",
  source,
  onSuccess,
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitConsultation({
        firstName: String(formData.get("firstName") ?? ""),
        lastName: String(formData.get("lastName") ?? ""),
        email: String(formData.get("email") ?? ""),
        company: String(formData.get("company") ?? ""),
        message: String(formData.get("message") ?? ""),
        source,
      });

      if (!result.ok) {
        setError(result.error);
        return;
      }

      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${idPrefix}-firstName`}
            className="mb-1.5 block text-sm font-medium text-p19-navy"
          >
            First Name
          </label>
          <input
            id={`${idPrefix}-firstName`}
            name="firstName"
            type="text"
            required
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-lastName`}
            className="mb-1.5 block text-sm font-medium text-p19-navy"
          >
            Last Name
          </label>
          <input
            id={`${idPrefix}-lastName`}
            name="lastName"
            type="text"
            required
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-email`}
          className="mb-1.5 block text-sm font-medium text-p19-navy"
        >
          Work Email
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          className={inputClassName}
        />
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-company`}
          className="mb-1.5 block text-sm font-medium text-p19-navy"
        >
          Company
        </label>
        <input
          id={`${idPrefix}-company`}
          name="company"
          type="text"
          disabled={isSubmitting}
          className={inputClassName}
        />
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-message`}
          className="mb-1.5 block text-sm font-medium text-p19-navy"
        >
          Tell us about your challenges
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          required
          disabled={isSubmitting}
          className={`${inputClassName} resize-none`}
        />
      </div>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-p19-blue py-3.5 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Request Free Consultation"}
        {!isSubmitting && <Send size={16} />}
      </button>
    </form>
  );
}
