import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../data/universities.json";

import styles from "./Universities.module.css";

export default function Universities() {
  const [activeTab, setActiveTab] = useState<string>(data.tabs[0].id);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <section className={styles.section6}>
      <div className="container-wide">
        <div className={styles.section6Inner}>
          <div className={`section-row ${styles.section6Row}`}>
            <div className={`section-col ${styles.section6ColLeft}`}>
              <div className="main-tag">учебное заведение</div>

              <div className={styles.section6Tabs}>
                {data.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.section6Tab} ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`section-col ${styles.section6ColRight}`}
              style={{ minHeight: maxHeight }}
            >
              {data.tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  className={`${styles.section6Content} ${activeTab === tab.id ? "active" : ""}`}
                >
                  <div className={`section-title ${styles.section6Title}`}>{tab.title}</div>
                  <div className={`section-text-2 ${styles.section6Text}`}>{tab.content}</div>
                </div>
              ))}
            </div>
          </div>

          <Swiper
            className={`slider-1 ${styles.slider1}`}
            modules={[Navigation]}
            speed={400}
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            navigation={{ nextEl: ".home-next", prevEl: ".home-prev" }}
            breakpoints={{
              0: { slidesPerView: 1.18, slidesOffsetBefore: 25, spaceBetween: 0 },
              768: { slidesPerView: 1.18 },
            }}
          >
            {data.slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`slider-1_item ${styles.slider1Item}`}
              >
                <img src={slide.src} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
