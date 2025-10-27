"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

export const useEmblaCenterFocus = (
  options: EmblaOptionsType = { loop: true, align: "center" },
  autoPlay = true,
  delay = 4000
) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

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
