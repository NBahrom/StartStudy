import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import styles from "./ArticlesSection.module.css";

import ArticlesImg from "../images/section-11-img.png";
import articlesData from "../data/articles.json";

export default function ArticlesSection() {

  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);


  return (
    <div className={styles.section11}>
      <div className="container-wide">
        <div className={styles.section11Inner}>
          <h2 className={`section-title ${styles.section11Title}`}>
            Полезные статьи <br />об учебе и жизни в Чехии
          </h2>

          <img  className={styles.section11Img} src={ArticlesImg} alt="articles img" />

          <Swiper
            modules={[Pagination]}
            speed={400}
            loop={true}
            spaceBetween={20}
            pagination={{
              el: "." + styles.section11SliderPagination,
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className={styles.section11Slider}
          >
            {articlesData.map((article, i) => (
              <SwiperSlide  key={article.id} >
                <div 
                style={{ minHeight: maxHeight, height: '100%' }}
                    className={styles.section11Slide} 
                    ref={(el) => {
                      contentRefs.current[i] = el;
                    }}
                >
                  <div className={`section-text-2 ${styles.section11SlideText}`}>
                    {article.date}
                  </div>
                  <div className={styles.section11SlideTitle}>{article.title}</div>
                  <div className={`section-text-2 ${styles.section11SlideText}`}>
                    {article.text}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.section11SliderPagination}></div>
        </div>
      </div>
    </div>
  );
}
