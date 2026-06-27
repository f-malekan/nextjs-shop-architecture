"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type SlidesPerView = number | { sm?: number; md?: number; lg?: number };

interface BaseSliderProps {
  children: React.ReactNode;
  thumbnails?: React.ReactNode[];
  slidesPerView?: SlidesPerView;
}

function getSlidesPerViewValue(slidesPerView: SlidesPerView) {
  if (typeof slidesPerView === "number") {
    return slidesPerView;
  }

  if (typeof window === "undefined") {
    return 1;
  }

  const width = window.innerWidth;

  if (width >= 1024 && slidesPerView.lg) {
    return slidesPerView.lg;
  }

  if (width >= 768 && slidesPerView.md) {
    return slidesPerView.md;
  }

  if (slidesPerView.sm) {
    return slidesPerView.sm;
  }

  return 1;
}

function useSlidesPerView(slidesPerView: SlidesPerView = 1) {
  const [value, setValue] = useState(() =>
    typeof slidesPerView === "number" ? slidesPerView : 1,
  );

  useEffect(() => {

    function update() {
      const nextValue = getSlidesPerViewValue(slidesPerView);

      setValue((currentValue) =>
        currentValue === nextValue ? currentValue : nextValue,
      );
    }

    const animationFrameId = requestAnimationFrame(update);
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", update);
    };
  }, [slidesPerView]);

  return value;
}

export const BaseSlider = ({
  children,
  thumbnails,
  slidesPerView = 1,
}: BaseSliderProps) => {
  const currentSlides = useSlidesPerView(slidesPerView);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    direction: "rtl",
    loop: true,
    align: "start",
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    direction: "rtl",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      emblaMainApi?.scrollTo(index);
    },
    [emblaMainApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;

    const index = emblaMainApi.selectedScrollSnap();

    setSelectedIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index,
    );

    emblaThumbsApi?.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;

    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);

    const animationFrameId = requestAnimationFrame(onSelect);

    return () => {
      cancelAnimationFrame(animationFrameId);
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  const slideWidth = `${100 / currentSlides}%`;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative group w-full overflow-hidden">
        <div className="overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {React.Children.map(children, (child) => (
              <div
                className="min-w-0 pl-4"
                style={{ flex: `0 0 ${slideWidth}` }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => emblaMainApi?.scrollPrev()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary-shade-4/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/30"
        >
          <IoChevronForward size={24} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => emblaMainApi?.scrollNext()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary-shade-4/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/30"
        >
          <IoChevronBack size={24} />
        </button>
      </div>

      {thumbnails && thumbnails.length > 0 && (
        <div className="px-2">
          <div className="overflow-hidden" ref={emblaThumbsRef}>
            <div className="flex flex-row gap-3">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => onThumbClick(index)}
                  className={`min-w-0 flex-[0_0_80px] sm:flex-[0_0_100px] cursor-pointer transition-all duration-300 rounded-lg overflow-hidden border-2 ${
                    index === selectedIndex
                      ? "border-blue-500 opacity-100 scale-105 shadow-md"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  {thumb}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
