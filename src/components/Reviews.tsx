import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Video from "./UI/Video";

import { Swiper as SwiperType } from "swiper";

import reviews from "../data/reviews.json";

import styles from "./Reviews.module.css";

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(reviews[0]);

  return (
    <section className={styles.section9}>
      <div className="container-wide">
        <div className={styles.section9Inner}>
          <div className={styles.section9Head}>
            <div className={styles.section9HeadContent}>
              <div data-section4-tag="" className={`main-tag ${styles.section9Tag}`}>
                ваши отзывы
              </div>
              <h2 className={`section-title ${styles.section9Title}`}>Отзывы</h2>
            </div>

            <div className={`${styles.section9Text} section-text-2`}>
              Мы гордимся сотрудничеством с ведущими компаниями, которые помогают
              нам достигать высоких результатов и реализовывать самые амбициозные
              проекты.
            </div>
          </div>

          <div className={`${styles.section9Reviews} section-row`}>
            {/* LEFT: Slider */}
            <div className={`${styles.section9ColLeft} section-col`}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: `.section-9_slider_nav_next`,
                  prevEl: `.section-9_slider_nav_prev`,
                }}
                pagination={{
                  el: `.${styles.section9SliderPagination}`,
                  clickable: true,
                }}
                loop={true}
                speed={400}
                slidesPerView={1}
                onSlideChange={(swiper: SwiperType) => {
                  const realIndex = swiper.realIndex;
                  setActiveReview(reviews[realIndex]);
                }}
                onInit={(swiper: SwiperType) => {
                  setActiveReview(reviews[swiper.realIndex]);
                }}
                className={styles.section9Slider}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className={styles.section9Slide}>
                    <div className={styles.section9SlideText}>{review.text}</div>
                    <div className={styles.section9SlideName}>{review.name}</div>
                    <div className={styles.section9SlideAge}>{review.age}</div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={`${styles.section9SliderNav} section-9_slider_nav_prev`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                  <path
                    stroke="#02191D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m5 1.126-4 4 4 4"
                  />
                </svg>
              </div>

              <div className={`${styles.section9SliderNav} section-9_slider_nav_next`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                  <path
                    stroke="#02191D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m1.002 8.793 4-4-4-4"
                  />
                </svg>
              </div>

              <div className={`slider_pagination ${styles.section9SliderPagination}`}></div>
            </div>

            {/* RIGHT: Video */}
            <div className={`${styles.section9ColRight} section-col`}>
              {activeReview && (
                <Video imageSrc={activeReview.poster} videoSrc={activeReview.video} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
