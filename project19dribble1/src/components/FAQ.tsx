import { useState } from "react";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { faqs } from "../data/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-block rounded-full bg-p19-blue-50 px-4 py-1.5 text-sm font-semibold text-p19-blue">
              FAQ
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-p19-navy sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-p19-muted">
              Everything you need to know about working with Project 19. Can't
              find what you're looking for?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-p19-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-p19-slate"
            >
              Contact Us
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-semibold text-p19-navy sm:text-base">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-p19-cream">
                      {isOpen ? (
                        <Minus size={16} className="text-p19-blue" />
                      ) : (
                        <Plus size={16} className="text-p19-muted" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5">
                      <p className="pt-4 text-sm leading-relaxed text-p19-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
