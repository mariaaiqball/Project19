import { ArrowRight, Star, TrendingUp, BarChart3 } from "lucide-react";

type HeroProps = {
  onConsultationClick: () => void;
};

export function Hero({ onConsultationClick }: HeroProps) {
  return (
    <section
      id="top"
      className="relative -mt-[env(safe-area-inset-top,0px)] overflow-x-hidden pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-16 lg:pt-[calc(9rem+env(safe-area-inset-top,0px))] lg:pb-24"
    >
      <div className="hero-bg-layer pointer-events-none">
        <div className="absolute inset-0 animate-gradient bg-[linear-gradient(160deg,var(--color-p19-navy)_0%,var(--color-p19-blue-darker)_55%,var(--color-p19-blue-dark)_100%)]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(27, 110, 243, 0.3) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-p19-blue/20 blur-3xl animate-pulse-glow" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-p19-teal/10 blur-3xl animate-pulse-glow" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid site-container items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
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
              Request a Free Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Client Stories
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            <img
              src="/assets/hero-consultation.png"
              alt="Project 19 consultants partnering with a client"
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-p19-navy/40 to-transparent" />
          </div>

          <div className="glass-card animate-float absolute -top-4 -left-4 rounded-2xl p-4 shadow-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-p19-blue-50">
                <TrendingUp size={20} className="text-p19-blue" />
              </div>
              <div>
                <p className="text-xs text-p19-muted">Client Growth</p>
                <p className="text-lg font-bold text-p19-navy">+66%</p>
              </div>
            </div>
          </div>

          <div className="glass-card animate-float-delayed absolute -right-4 -bottom-4 rounded-2xl p-4 shadow-xl sm:-right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-p19-blue-50">
                <BarChart3 size={20} className="text-p19-blue" />
              </div>
              <div>
                <p className="text-xs text-p19-muted">Projects Delivered</p>
                <p className="text-lg font-bold text-p19-navy">On time</p>
              </div>
            </div>
          </div>

          <div className="glass-card animate-float absolute top-1/2 -right-2 hidden rounded-2xl p-3 shadow-xl sm:block lg:-right-12">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-p19-amber text-p19-amber" />
              ))}
            </div>
            <p className="mt-1 text-xs font-medium text-p19-navy">5-star partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
