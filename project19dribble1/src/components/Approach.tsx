import { approachSteps } from "../data/content";

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--color-p19-navy)_0%,var(--color-p19-navy-800)_100%)]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-p19-blue/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-p19-teal/10 blur-3xl" />

      <div className="relative site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-p19-blue-accent">
            How We Work
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our approach
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A proven process designed for businesses that need results without the
            enterprise price tag.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step) => (
            <article
              key={step.step}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-p19-blue/40 hover:bg-white/10"
            >
              <span className="font-display text-4xl font-bold text-p19-blue/40 transition-colors group-hover:text-p19-blue">
                {step.step}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
