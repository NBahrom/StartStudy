import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Video from "./UI/Video"

import { Swiper as SwiperType } from "swiper";

import reviews from "../data/reviews.json"

import "./Reviews.css"

export default function Reviews() {
    const [activeReview, setActiveReview] = useState(reviews[0]);

  return (
    <section className="section-9">
      <div className="container-wide">
        <div className="section-9_inner">
          <div className="section-9_head">
            <div className="section-9_head_content">
              <div data-section4-tag="" className="main-tag section-9_tag">
                ваши отзывы
              </div>
              <h2 className="section-title section-9_title">Отзывы</h2>
            </div>
            <div className="section-9_text section-text-2">
              Мы гордимся сотрудничеством с ведущими компаниями, которые помогают
              нам достигать высоких результатов и реализовывать самые амбициозные
              проекты.
            </div>
          </div>

          <div className="section-9_reviews section-row">

            <div className="section-col section-9_col-left">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".section-9_slider_nav_next",
                  prevEl: ".section-9_slider_nav_prev",
                }}
                pagination={{
                  el: ".section-9_slider_pagination",
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
                className="section-9_slider"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className="section-9_slide">
                    <div className="section-9_slide_text">{review.text}</div>
                    <div className="section-9_slide_name">{review.name}</div>
                    <div className="section-9_slide_age">{review.age}</div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="section-9_slider_nav section-9_slider_nav_prev">
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
              <div className="section-9_slider_nav section-9_slider_nav_next">
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

              <div className="section-9_slider_pagination slider_pagination"></div>
            </div>

            {/* RIGHT: Video */}
            <div className="section-col section-9_col-right">
              {activeReview && (
                <Video
                  imageSrc={activeReview.poster}
                  videoSrc={activeReview.video}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}