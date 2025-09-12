import { useState, useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";

import styles from "./AnimatedProgressCircle.module.css"

export default function AnimatedProgressCircle({autoplayDelay, swiperRef, className} : {autoplayDelay: number, swiperRef: React.RefObject<SwiperType>, className?: string}) {
    const [progress, setProgress] = useState(0);

    // Animate progress ring
    useEffect(() => {
            let start: number;
            let raf: number;
        
            const animate = (timestamp: number) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const percent = Math.min((elapsed / autoplayDelay) * 100, 100);
                setProgress(percent);
            
                if (percent < 100) {
                    raf = requestAnimationFrame(animate);
                }
            };
        
            // restart animation every slide
            const restart = () => {
                cancelAnimationFrame(raf);
                setProgress(0);
                start = performance.now();
                raf = requestAnimationFrame(animate);
            };
        
            restart();
        
            const swiper = swiperRef.current;
            if (swiper) {
                swiper.on("slideChange", restart);
            }
        
            return () => {
                cancelAnimationFrame(raf);
                if (swiper) swiper.off("slideChange", restart);
            };
        }, []);

    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    
    return(
            <svg
                className={`${styles.progressRing} ${className}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                >
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#02191D"
                    strokeWidth="1"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
    )
}