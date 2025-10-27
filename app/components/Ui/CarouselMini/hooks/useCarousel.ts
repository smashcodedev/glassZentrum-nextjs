import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

export const useCarousel = (
  options?: EmblaOptionsType,
  autoPlay = true,
  delay = 3000
) => {
  // Only include the Autoplay plugin if autoPlay is true
  const plugins = autoPlay ? [Autoplay({ delay })] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi]);

  return { emblaRef, emblaApi };
};
