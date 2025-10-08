import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useSwiperPauseOnHover } from "../util/useSwiperPauseOnHover ";

import Video from "./UI/Video";
import reviews from "../data/reviews.json";

import styles from "./Reviews.module.css";


export default function Reviews() {
  const defaultReviews = reviews.filter((review) => review.type === "default");
  const [activeReview, setActiveReview] = useState(defaultReviews[0]);

  const swiperRef = useRef<SwiperType | null>(null);
  const autoplayDelay = 4000;

  // useSwiperPauseOnHover(swiperRef, `.${styles.section9SliderPagination}`);

  return (
    <section className={styles.section9}>
      <div className="container-wide">
        <div className={styles.section9Inner}>
          <div className={styles.section9Head}>

            <div className={styles.section9HeadContent}>
              <h2 className={`section-title ${styles.section9Title}`}>
                Отзывы студентов
              </h2>
              <div className={`${styles.section9Text} section-text-2`}>
                Мы гордимся сотрудничеством с ведущими компаниями, которые помогают
                нам достигать высоких результатов и реализовывать самые амбициозные
                проекты.
              </div>
            </div>

          </div>

          <div className={`${styles.section9Reviews} section-row`}>
            {/* LEFT: Slider */}
            <div className={`${styles.section9ColLeft} section-col`}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay,EffectFade]}
                effect="fade"
                navigation={{
                  nextEl: `.section-9_slider_nav_next`,
                  prevEl: `.section-9_slider_nav_prev`,
                }}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: `.${styles.section9SliderPagination}`,
                  clickable: true,
                }}
                loop={true}
                speed={400}
                slidesPerView={1}
                onSlideChange={(swiper: SwiperType) => {
                  setActiveReview(defaultReviews[swiper.realIndex]);
                }}
                onInit={(swiper: SwiperType) => {
                  swiperRef.current = swiper;
                  setActiveReview(defaultReviews[swiper.realIndex]);
                }}
                onSwiper={(swiper: SwiperType)  => (swiperRef.current = swiper)}
                className={styles.section9Slider}
              >
                {defaultReviews.map((review) => (
                  <SwiperSlide key={review.id} className={styles.section9Slide}>
                    <div className={styles.section9SlideText}>{review.text}</div>
                    <div className={styles.section9SlideName}>{review.name}</div>
                    <div className={styles.section9SlideAge}>{review.age}</div>
                  </SwiperSlide>
                ))}
              </Swiper>

              
              <div
                className={`${styles.section9SliderNav} section-9_slider_nav_prev`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  fill="none"
                >
                  <path
                    stroke="#02191D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m5 1.126-4 4 4 4"
                  />
                </svg>
              </div>

            
              <div
                className={`${styles.section9SliderNav} section-9_slider_nav_next relative`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  fill="none"
                >
                  <path
                    stroke="#02191D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m1.002 8.793 4-4-4-4"
                  />
                </svg>
              </div>

            </div>

            {/* RIGHT: Video */}
            <div className={`${styles.section9ColRight} section-col`}>
              {activeReview.video && (
                <Video
                  imageSrc={activeReview.poster}
                  videoSrc={activeReview.video}
                  swiperRef={swiperRef}
                />
              )}
              <div
                style={{ "--pagination-transition-review": `${autoplayDelay / 1000}s` } as React.CSSProperties}
                className={`slider_pagination ${styles.section9SliderPagination}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
