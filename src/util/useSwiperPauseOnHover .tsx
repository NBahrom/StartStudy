import { useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

export function useSwiperPauseOnHover(
  swiperRef: React.RefObject<SwiperType | null>,
  selector: string
) {
  useEffect(() => {
    const el = document.querySelector(selector);
    if (!el || !swiperRef.current) return;

    const handleMouseEnter = () => swiperRef.current?.autoplay?.stop();
    const handleMouseLeave = () => swiperRef.current?.autoplay?.start();

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [swiperRef, selector]);
}