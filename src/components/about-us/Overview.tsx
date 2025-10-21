import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper";
import styles from './Overview.module.css';
import OverviewImg from '../../images/about-us-overview.png';
import SectionTitle from "../UI/SectionTitle";
import OverviewCounters from "./OverviewCounters";

export default function Overview() {
    const imgRef = useRef<HTMLDivElement>(null);
    const [clip, setClip] = useState({ left: 25, right: 75 });
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpened) return;

            const img = imgRef.current;
            if (!img) return;

            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far the image has entered the viewport
            const start = windowHeight * 0.8; // start animation when image 80% into view
            const end = windowHeight * 0.3;   // fully open when image center reaches this point
            const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

            // Interpolate clip-path values
            const left = 25 - 25 * progress;
            const right = 75 + 25 * progress;

            // Only update if values actually change
            setClip(prev => {
                if (prev.left === left && prev.right === right) return prev;
                return { left, right };
            });

            if (progress >= 1) {
                setIsOpened(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpened]);


    return(
        <SectionWrapper>
            <div 
                ref={imgRef}
                className={styles.overviewImg}
                style={{
                    clipPath: `polygon(${clip.left}% 0, ${clip.right}% 0, ${clip.right}% 100%, ${clip.left}% 100%)`
                }}
                >
                <img src={OverviewImg} alt="people on the grass near university" />
            </div>
            <div className={styles.overviewContent}>
                <SectionTitle tag="h2" className={styles.overviewTitle}>
                    <span>StartStudy — </span> <br /> твой путь к успешному обучению в Чехии
                </SectionTitle>
                <p>Мы увлечены своим делом. Нас мотивирует вызов и вдохновляют сложные задачи. Мир постоянно меняется, и мы вместе с ним. В этих переменах мы видим возможности для роста, пробуем новые инструменты и подходы, чтобы достигать крутых результатов</p>
            </div>
            <OverviewCounters />
        </SectionWrapper>
    )
}