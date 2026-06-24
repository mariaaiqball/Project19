import { LogoCarousel } from "./LogoCarousel";
import { engineeringIntro, techStackCategories } from "../data/content";

export function AboutEngineering() {
  return (
    <section
      id="engineering"
      className="relative bg-gradient-to-b from-white via-p19-cream/40 to-white pb-20 pt-10 lg:pb-28 lg:pt-12"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
            How We Build
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
            Resilient digital ecosystems
          </h2>
          {engineeringIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-p19-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold tracking-tight text-p19-navy sm:text-3xl">
              Technologies our developers are experts in
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techStackCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <h4 className="font-display text-base font-bold text-p19-navy">
                  {category.title}
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded-full bg-p19-blue-50 px-3 py-1 text-xs font-medium text-p19-navy">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <LogoCarousel />
      </div>
    </section>
  );
}
