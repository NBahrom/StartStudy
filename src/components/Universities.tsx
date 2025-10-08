// Universities.tsx
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../data/universities.json";

import styles from "./Universities.module.css";
import AnimatedProgressCircle from "./UI/AnimatedProgressCircle";
import { useMediaScreen } from "../util/useMediaScreen";

export default function Universities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const {isMobile} = useMediaScreen();
  const autoplayDelay = 5000;
  
  useEffect(() => {
    const heights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  const handleNextTab = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className={styles.section6}>
      <div className="container-wide">
        <div className={styles.section6Inner}>
          <div className={`section-row ${styles.section6Row}`}>
            <div className={`section-col ${styles.section6ColLeft}`}>
              <div className="main-tag">учебное заведение</div>

              <div className={styles.section6Tabs}>
                {data.map((tab, i) => (
                  <button
                    key={tab.id}
                    className={`${styles.section6Tab} ${
                      activeIndex === i ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    {tab.title}
                    {activeIndex === i && !isMobile &&  (
                      <AnimatedProgressCircle
                        autoplayDelay={autoplayDelay}
                        onComplete={handleNextTab}
                        className={styles.progressCircle}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`section-col ${styles.section6ColRight}`}
              style={{ minHeight: maxHeight }}
            >
              {data.map((tab, i) => (
                <div
                  key={tab.id}
                  ref={(el) => (contentRefs.current[i] = el)}
                  className={`${styles.section6Content} ${
                    activeIndex === i ? "active" : ""
                  }`}
                >
                  <div className={`section-title ${styles.section6Title}`}>
                    {tab.title}
                  </div>
                  <div className={`section-text-2 ${styles.section6Text}`}>
                    {tab.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {data.map((tab, i) => (
        <div className={`${styles.slider1} ${
            activeIndex === i ? "active" : ""
          }`} key={tab.id}>

          {tab.slides.map((slide, index) => (
            <div
              key={index}
              className={styles.slider1Item}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
