import { ArrowUpRight } from "lucide-react";
import type { CaseStudyDetailContent } from "../data/caseStudyDetails";

type CaseStudyRichContentProps = {
  detail: CaseStudyDetailContent;
  onConsultationClick: () => void;
};

export function CaseStudyRichContent({
  detail,
  onConsultationClick,
}: CaseStudyRichContentProps) {
  return (
    <article>
      <header>
        <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
          {detail.category}
        </span>
        <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
          {detail.headline}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-p19-muted">{detail.subtitle}</p>
      </header>

      <section className="mt-12 border-t border-slate-200/80 pt-12">
        {detail.heroImage && (
          <img
            src={detail.heroImage}
            alt={detail.heroImageAlt ?? ""}
            className="mb-12 w-full rounded-xl object-cover object-center"
          />
        )}
        <h2 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
          Executive Summary
        </h2>
        <div className="mt-4 space-y-4">
          {detail.executiveSummary.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-p19-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {detail.technologyInsight && (
        <section className="mt-12 border-t border-slate-200/80 pt-12">
          <h2 className="font-display text-xl font-bold text-p19-navy sm:text-2xl">
            {detail.technologyInsight.title}
          </h2>
          <div className="mt-4 space-y-4">
            {detail.technologyInsight.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-p19-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 border-t border-slate-200/80 pt-12">
        <h2 className="font-display text-xl font-bold text-p19-navy sm:text-2xl">
          {detail.challenge.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-p19-muted">{detail.challenge.intro}</p>
        <ol className="mt-8 space-y-6">
          {detail.challenge.items.map((item, index) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-p19-blue text-xs font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display font-semibold text-p19-navy">{item.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-p19-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 border-t border-slate-200/80 pt-12">
        <h2 className="font-display text-xl font-bold text-p19-navy sm:text-2xl">
          {detail.solution.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-p19-muted">{detail.solution.intro}</p>
        <div className="mt-8 space-y-10">
          {detail.solution.stages.map((stage) => (
            <div key={stage.title}>
              <h3 className="font-display text-lg font-bold text-p19-navy">{stage.title}</h3>
              {stage.description && (
                <p className="mt-3 text-base leading-relaxed text-p19-muted">{stage.description}</p>
              )}
              {stage.highlights && (
                <ul className="mt-6 space-y-5">
                  {stage.highlights.map((highlight) => (
                    <li key={highlight.title}>
                      <p className="font-display font-semibold text-p19-navy">{highlight.title}</p>
                      <p className="mt-1 text-base leading-relaxed text-p19-muted">
                        {highlight.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200/80 pt-12">
        <h2 className="font-display text-xl font-bold text-p19-navy sm:text-2xl">
          {detail.impact.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-p19-muted">{detail.impact.intro}</p>
        <ul className="mt-6 space-y-3">
          {detail.impact.outcomes.map((outcome) => (
            <li
              key={outcome.slice(0, 48)}
              className="flex gap-3 text-base leading-relaxed text-p19-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200/80 pt-12">
        <h2 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
          The Takeaway
        </h2>
        <p className="mt-4 text-base leading-relaxed text-p19-muted">{detail.takeaway}</p>
      </section>

      <button
        type="button"
        onClick={onConsultationClick}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
      >
        Start your story
        <ArrowUpRight size={16} />
      </button>
    </article>
  );
}
