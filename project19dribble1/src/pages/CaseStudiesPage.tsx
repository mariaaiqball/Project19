import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { CTABanner } from "../components/CTABanner";
import { caseStudies } from "../data/content";
import type { AppOutletContext } from "../layouts/AppLayout";

function getIndexFromHash(hash: string) {
  const slug = hash.replace("#", "");
  if (!slug) return 0;

  const index = caseStudies.findIndex((study) => study.slug === slug);
  return index >= 0 ? index : 0;
}

export function CaseStudiesPage() {
  const { openConsultation } = useOutletContext<AppOutletContext>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(() => getIndexFromHash(location.hash));
  const activeStory = caseStudies[activeIndex];

  useEffect(() => {
    setActiveIndex(getIndexFromHash(location.hash));
  }, [location.hash]);

  function selectStory(index: number) {
    setActiveIndex(index);
    navigate(`/case-studies#${caseStudies[index].slug}`, { replace: true });
  }

  return (
    <main>
      <section className="relative bg-p19-cream pt-[calc(5.5rem+env(safe-area-inset-top,0px)+5rem)] pb-20 lg:pt-[calc(5.5rem+env(safe-area-inset-top,0px)+7rem)] lg:pb-28">
        <div className="site-container">
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl shadow-p19-blue/5 lg:mb-16">
            <img
              src="/assets/about-office.png"
              alt="Project 19 team collaborating with clients in a modern workspace"
              className="aspect-[21/9] w-full object-cover object-center"
            />
          </div>

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              Client Stories
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Client stories that speak for themselves
            </h1>
            <p className="mt-4 text-lg text-p19-muted">
              Real results for real businesses — see how we've helped local companies overcome
              their biggest technology challenges.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(16rem,18rem)_1fr] lg:items-start lg:gap-10">
            <aside>
              <nav
                className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm lg:sticky lg:top-[calc(6.5rem+env(safe-area-inset-top,0px))]"
                aria-label="Client stories"
              >
                <ul className="flex flex-col gap-1">
                  {caseStudies.map((study, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <li key={study.slug}>
                        <button
                          type="button"
                          onClick={() => selectStory(index)}
                          aria-current={isActive ? "true" : undefined}
                          className={`flex w-full flex-col rounded-xl px-3 py-3 text-left transition-all ${
                            isActive
                              ? "bg-p19-blue text-white shadow-md shadow-p19-blue/20"
                              : "text-p19-navy hover:bg-p19-blue-50 hover:text-p19-blue"
                          }`}
                        >
                          <span className="text-sm font-semibold leading-snug">
                            {study.client}
                          </span>
                          <span
                            className={`mt-1 text-xs leading-snug ${
                              isActive ? "text-white/80" : "text-p19-muted"
                            }`}
                          >
                            {study.industry}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            <article
              key={activeStory.slug}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="bg-[linear-gradient(160deg,var(--color-p19-blue-dark)_0%,var(--color-p19-navy)_100%)] p-8 lg:p-10">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white/90">
                  {activeStory.industry}
                </span>
                <h2 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {activeStory.client}
                </h2>
              </div>

              <div className="p-8 lg:p-10">
                <div>
                  <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                    Challenge
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-p19-muted">
                    {activeStory.challenge}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                    Solution
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-p19-muted">
                    {activeStory.solution}
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-p19-cream p-6">
                  <h3 className="font-display text-sm font-semibold tracking-wider text-p19-blue uppercase">
                    Results
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {activeStory.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-p19-navy"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-p19-blue" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={openConsultation}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
                >
                  Start your story
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTABanner onConsultationClick={openConsultation} />
    </main>
  );
}
