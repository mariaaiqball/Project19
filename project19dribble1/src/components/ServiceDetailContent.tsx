import { ArrowUpRight } from "lucide-react";
import type { ServiceDetail } from "../data/services";

type ServiceDetailContentProps = {
  service: ServiceDetail;
  onConsultationClick: () => void;
};

function ConsultationCta({
  heading,
  buttonLabel,
  onConsultationClick,
}: {
  heading: string;
  buttonLabel: string;
  onConsultationClick: () => void;
}) {
  return (
    <div className="mt-10 rounded-2xl border border-p19-blue/20 bg-p19-blue-50 p-6 lg:p-8">
      <h2 className="font-display text-xl font-bold text-p19-navy">{heading}</h2>
      <button
        type="button"
        onClick={onConsultationClick}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-lg hover:shadow-p19-blue/30"
      >
        {buttonLabel}
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}

export function ServiceDetailContent({
  service,
  onConsultationClick,
}: ServiceDetailContentProps) {
  const Icon = service.icon;

  return (
    <article>
      <header className="flex items-start gap-4 border-b border-slate-100 pb-6">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-p19-blue-50">
          <Icon size={22} className="text-p19-blue" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-p19-navy sm:text-3xl">
            {service.title}
          </h1>
          <p className="mt-2 text-base leading-relaxed text-p19-muted">{service.description}</p>
        </div>
      </header>

      <section className="mt-8">
        {service.tagline && (
          <p className="font-display text-lg font-semibold text-p19-navy">{service.tagline}</p>
        )}
        <p
          className={`text-base leading-relaxed text-p19-muted ${service.tagline ? "mt-3" : ""}`}
        >
          {service.overview}
        </p>
      </section>

      {service.industries ? (
        <>
          {service.industryIntro && (
            <p className="mt-6 text-base leading-relaxed text-p19-muted">
              {service.industryIntro}
            </p>
          )}

          <div className="mt-10 space-y-10">
            {service.industries.map((industry) => (
              <section key={industry.name}>
                <h2 className="font-display text-xl font-bold text-p19-navy">{industry.name}</h2>
                {industry.intro && (
                  <p className="mt-2 text-sm leading-relaxed text-p19-muted">{industry.intro}</p>
                )}
                <ul className="mt-4 space-y-4">
                  {industry.useCases.map((useCase) => (
                    <li
                      key={useCase.title}
                      className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <p className="font-display font-semibold text-p19-navy">{useCase.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-p19-muted">
                        {useCase.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {service.howWeHelp && (
            <section className="mt-10">
              <h2 className="font-display text-sm font-semibold tracking-wider text-p19-black uppercase">
                How Project 19 helps
              </h2>
              <ol className="mt-4 space-y-3">
                {service.howWeHelp.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-relaxed text-p19-muted"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-p19-blue text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}

          <ConsultationCta
            heading={service.ctaHeading ?? "Ready to get started?"}
            buttonLabel={service.ctaButtonLabel ?? "Discuss this service"}
            onConsultationClick={onConsultationClick}
          />
        </>
      ) : (
        <>
          <div className="mt-10 space-y-12">
            {service.sections?.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-bold text-p19-navy">{section.title}</h2>
                {section.intro && (
                  <p className="mt-3 text-base leading-relaxed text-p19-muted">{section.intro}</p>
                )}

                {section.paragraphs && (
                  <div className={`space-y-4 ${section.intro ? "mt-4" : "mt-3"}`}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-relaxed text-p19-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.steps && (
                  <ol className="mt-6 space-y-4">
                    {section.steps.map((step, index) => (
                      <li
                        key={step.title}
                        className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-p19-blue text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-display font-semibold text-p19-navy">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-p19-muted">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}

                {section.capabilities && (
                  <ul className="mt-6 space-y-4">
                    {section.capabilities.map((capability) => (
                      <li
                        key={capability.title}
                        className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                      >
                        <p className="font-display font-semibold text-p19-navy">
                          {capability.title}
                        </p>
                        <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                          <div>
                            <dt className="font-semibold text-p19-navy">Methodology</dt>
                            <dd className="mt-0.5 text-p19-muted">{capability.methodology}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-p19-navy">Benefit</dt>
                            <dd className="mt-0.5 text-p19-muted">{capability.benefit}</dd>
                          </div>
                        </dl>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlights && (
                  <ul className="mt-6 space-y-4">
                    {section.highlights.map((highlight) => (
                      <li
                        key={highlight.title}
                        className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                      >
                        <p className="font-display font-semibold text-p19-navy">
                          {highlight.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-p19-muted">
                          {highlight.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {section.bullets && (
                  <ul
                    className={`list-disc space-y-3 pl-5 ${section.intro ? "mt-4" : "mt-3"}`}
                  >
                    {section.bullets.map((item) => (
                      <li
                        key={item.title}
                        className="text-base leading-relaxed text-p19-muted marker:text-p19-blue"
                      >
                        <span className="font-semibold text-p19-navy">{item.title}:</span>{" "}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                )}

                {section.techStack && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-slate-200/80">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200/80 bg-p19-cream">
                          <th
                            scope="col"
                            className="px-5 py-3 font-display font-semibold text-p19-navy"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 font-display font-semibold text-p19-navy"
                          >
                            Our Preferred Tools
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.techStack.map((row) => (
                          <tr
                            key={row.category}
                            className="border-b border-slate-100 last:border-b-0"
                          >
                            <td className="px-5 py-4 align-top font-semibold text-p19-navy">
                              {row.category}
                            </td>
                            <td className="px-5 py-4 align-top text-p19-muted">{row.tools}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          <ConsultationCta
            heading={service.ctaHeading ?? "Ready to get started?"}
            buttonLabel={service.ctaButtonLabel ?? "Discuss this service"}
            onConsultationClick={onConsultationClick}
          />
        </>
      )}
    </article>
  );
}
