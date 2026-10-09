"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import classNames from "embla-carousel-class-names";

interface ProjectCarouselProps {
  images: string[];
  onImageClick?: (index: number) => void;
}

export default function ProjectCarousel({
  images,
  onImageClick,
}: ProjectCarouselProps) {
  const SCROLL_OPTS = { loop: true, dragFree: true, duration: 30 };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [classNames(), AutoScroll({ stopOnInteraction: false, ...SCROLL_OPTS })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const api = emblaApi;
    if (!api) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        api.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        api.scrollNext();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [emblaApi]);

  const total = images.length;

  return (
    <div className="project-carousel" ref={emblaRef}>
      <div className="project-carousel__viewport">
        <div className="project-carousel__slides">
          {images.map((src, i) => (
            <div
              key={i}
              className="project-carousel__slide"
              onClick={() => onImageClick?.(i)}
              style={{ cursor: onImageClick ? "zoom-in" : undefined }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${src.split("/").pop()} — slide ${i + 1}`}
                loading="lazy"
                className="project-carousel__img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        className="project-carousel__btn project-carousel__btn--prev"
        onClick={scrollPrev}
        aria-label="Gambar sebelumnya"
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="project-carousel__btn project-carousel__btn--next"
        onClick={scrollNext}
        aria-label="Gambar berikutnya"
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="project-carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className="project-carousel__dot"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1} dari ${total}`}
          />
        ))}
      </div>
    </div>
  );
}
