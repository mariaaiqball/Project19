export type CarouselLogo = {
  src: string;
  alt: string;
};

/** Replace src paths with your own transparent PNG logos (logo-01.png … logo-10.png). */
export const carouselLogos: CarouselLogo[] = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/carousel/logo-${num}.png`,
    alt: `Partner logo ${i + 1}`,
  };
});
