import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

type CTABannerProps = {
  onConsultationClick: () => void;
};

export function CTABanner({ onConsultationClick }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--color-p19-navy)_0%,var(--color-p19-navy-800)_100%)]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-p19-blue/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-p19-teal/10 blur-3xl" />

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
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
