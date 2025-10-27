import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type EmblaOptionsType from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const useCarousel = (
  options?: EmblaOptionsType,
  autoPlay = true,
  delay = 3000
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    autoPlay ? Autoplay({ delay }) : undefined,
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi]);

  return { emblaRef, emblaApi };
};
