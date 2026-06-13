import { ArrowRight, Phone } from "lucide-react";

type CTABannerProps = {
  onConsultationClick: () => void;
};

export function CTABanner({ onConsultationClick }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-p19-blue via-p19-blue-dark to-p19-navy" />
      <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-p19-sky/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl animate-pulse-glow" />

      <div className="relative site-container-narrow text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to solve what you can't tackle alone?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Book a free 30-minute consultation. No obligation — just an honest
          conversation about your challenges and how we can help.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-p19-blue transition-all hover:bg-p19-cream hover:shadow-xl"
          >
            <Phone size={16} />
            Request a Free Consultation
          </button>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Explore Services
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
