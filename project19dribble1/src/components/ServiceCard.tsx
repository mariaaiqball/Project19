import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "../data/content";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:-translate-y-1 hover:border-p19-blue/30 hover:shadow-xl hover:shadow-p19-blue/10"
    >
      <div className="relative aspect-[5/2] overflow-hidden">
        <img
          src={service.cardImage}
          alt={service.cardImageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-sm font-bold text-p19-navy">{service.title}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-p19-muted">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-p19-blue">
          Learn more
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
