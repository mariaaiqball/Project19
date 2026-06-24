import { carouselLogos } from "../data/carousel";

type LogoCarouselProps = {
  speed?: number;
};

export function LogoCarousel({ speed = 40 }: LogoCarouselProps) {
  const logos = [...carouselLogos, ...carouselLogos];

  return (
    <div
      className="logo-carousel relative mt-16 w-full overflow-hidden py-4"
      role="region"
      aria-label="Partner logos"
    >
      <div
        className="logo-carousel-track flex w-max items-center gap-12 lg:gap-16"
        style={{ animationDuration: `${speed}s` }}
      >
        {logos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex h-16 w-32 shrink-0 items-center justify-center sm:h-20 sm:w-40"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
