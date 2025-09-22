import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Video from "./UI/Video";
import { useSwiperPauseOnHover } from "../util/useSwiperPauseOnHover ";

import { Swiper as SwiperType } from "swiper";

import teachers from "../data/teachers.json";

import styles from "./Teachers.module.css";
import 'swiper/css/effect-fade';

export default function Teachers() {
  const [activeTeacher, setActiveTeacher] = useState(teachers[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  useSwiperPauseOnHover(swiperRef, `.${styles.section7SliderPagination}`);

  return (
    <section className={styles.section7}>
      <div className="container-wide">
        <div className={styles.section7Inner}>
          <h2 data-section7-title="" className={`section-title ${styles.section7Title}`}>
            Преподаватели вузов-носители языка
          </h2>

          <div className={`section-text-2 ${styles.section7Text1}`}>
            Консультации по визам, культурной адаптации, рекомендации по учебе и карьере
          </div>

          <div className={`section-row ${styles.section7Row} section-slider-wrapper`}>
            {/* Left slider */}
            <div className={`section-col ${styles.section7ColLeft}`}>
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={400}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  // use the module-exported class so Swiper can find it
                  el: "." + styles.section7SliderPagination,
                }}
                onSlideChange={(swiper: SwiperType) => {
                  const index = swiper.realIndex;
                  setActiveTeacher(teachers[index]);
                }}
                onSwiper={(swiper: SwiperType)  => (swiperRef.current = swiper)}
                className={styles.section7Slider}
              >
                {teachers.map((teacher) => (
                  <SwiperSlide key={teacher.id} className={styles.section7Slide}>
                    <div className={styles.section7SlideTitle}>{teacher.name}</div>
                    <div className={`section-text-2 ${styles.section7SlideText}`}>
                      {teacher.subtitle}
                    </div>
                    <br />
                    <div className={`section-text-2 ${styles.section7SlideText}`}>
                      {teacher.description}
                    </div>

                    <div className={styles.section7ExperienceWrapper}>
                      <div className={styles.section7ExperienceItem}>
                        <div className={styles.section7ExperienceTitle}>
                          {teacher.experience}
                        </div>
                        <div className={`section-text-2 ${styles.section7ExperienceText}`}>
                          лет опыта <br /> преподавания
                        </div>
                      </div>

                      <div className={styles.section7ExperienceSeparator}></div>

                      <div className={styles.section7ExperienceItem}>
                        <div className={styles.section7ExperienceTitle}>
                          {teacher.levels}
                        </div>
                        <div className={`section-text-2 ${styles.section7ExperienceText}`}>
                          преподаваемые уровни
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={`${styles.section7SliderPagination} slider_pagination section-7_slider_pagination`}></div>
            </div>

            <div className={`section-col ${styles.section7ColRight}`}>
              <Video 
                imageSrc={activeTeacher.poster} 
                videoSrc={activeTeacher.video} 
                swiperRef={swiperRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
