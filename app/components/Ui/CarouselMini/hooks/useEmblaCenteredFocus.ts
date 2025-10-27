"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

export const useEmblaCenterFocus = (
  options: EmblaOptionsType = { loop: true, align: "center" },
  autoPlay = true,
  delay = 4000
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect: () => void = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // AutoPlay
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;
    timer.current = setInterval(() => {
      emblaApi.scrollNext();
    }, delay);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [emblaApi, autoPlay, delay]);

  return { emblaRef, emblaApi, selectedIndex };
};
