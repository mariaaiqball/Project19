import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../data/content";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-p19-blue/10">
      <div className="relative bg-[linear-gradient(160deg,var(--color-p19-blue-dark)_0%,var(--color-p19-navy)_100%)] p-6">
        <h3 className="font-display text-xl font-bold text-white">{study.client}</h3>
        <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs text-white/90">
          {study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Challenge</h4>
          <p className="mt-1 text-sm leading-relaxed text-p19-muted">{study.challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xs font-semibold tracking-wider text-p19-blue uppercase">Solution</h4>
          <p className="mt-1 text-sm leading-relaxed text-p19-muted">{study.solution}</p>
        </div>
        <ul className="mt-auto space-y-2 border-t border-slate-100 pt-4">
          {study.results.map((result) => (
            <li key={result} className="flex items-start gap-2 text-sm text-p19-navy">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
              {result}
            </li>
          ))}
        </ul>

        <Link
          to={`/case-studies#${study.slug}`}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-slate-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-p19-navy transition-all hover:border-p19-blue/30 hover:bg-p19-blue-50 hover:text-p19-blue"
        >
          Read more
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
