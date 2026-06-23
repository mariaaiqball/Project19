import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  onConsultationClick: () => void;
};

export function Hero({ onConsultationClick }: HeroProps) {
  return (
    <section
      id="top"
      className="relative -mt-[env(safe-area-inset-top,0px)] min-h-[min(90vh,52rem)] overflow-x-clip pb-16 pt-[calc(7rem+env(safe-area-inset-top,0px))] lg:pb-24 lg:pt-[calc(9rem+env(safe-area-inset-top,0px))]"
    >
      <div
        className="hero-bg-layer bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-consultation.png')" }}
        role="img"
        aria-label="Project 19 consultants partnering with a client"
      />

      <div className="hero-bg-layer bg-gradient-to-r from-black/55 via-black/35 to-black/20" />

      <div className="relative mx-auto flex min-h-[inherit] site-container items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We tackle what
            <br />
            you can't alone.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
          When budgets are tight, expertise is scarce, and delivery timelines slip, we come in to close the gap.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onConsultationClick}
              className="inline-flex items-center gap-2 rounded-full bg-p19-blue px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-xl hover:shadow-p19-blue/40"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </button>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Client Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
