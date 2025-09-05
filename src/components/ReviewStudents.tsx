import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper as SwiperType } from "swiper";

import reviews from "../data/reviews.json";

import styles from "./ReviewStudents.module.css";
import VideoReview from "./UI/VideoReview";
import TextReview from "./UI/TextReview";

export default function ReviewStudents() {
  const [activeReview, setActiveReview] = useState(reviews[0]);

  return (
    <section className={styles.section}>
        <div className="container-wide">
            <div className={styles.sectionHeader}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>Отзывы наших  <br /> студентов <span className={styles.titleAccent}>и их родителей</span></h1>
                    <p className={styles.text}>850+ студентов и их родителей выразили благодарность, 250+ подсказали, как нам стать лучше</p>
                </div>
                <div className={styles.navigation}>
                    <svg className={`testimonals-student-slider-prev ${styles.navPrev}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8492 10L3 10" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.544 4.69628L17.8484 10.0007L12.544 15.3037" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <svg className={`testimonals-student-slider-next ${styles.navNext}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8492 10L3 10" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.544 4.69628L17.8484 10.0007L12.544 15.3037" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: `.testimonals-student-slider-next`,
                  prevEl: `.testimonals-student-slider-prev`,
                }}
                pagination={{
                  el: `.testimonals-student-slider-pagination`,
                  clickable: true,
                }}
                speed={400}
                slidesPerView={3}
                spaceBetween={20}
                onSlideChange={(swiper: SwiperType) => {
                  const realIndex = swiper.realIndex;
                  setActiveReview(reviews[realIndex]);
                }}
                onInit={(swiper: SwiperType) => {
                  setActiveReview(reviews[swiper.realIndex]);
                }}
                className={styles.slider}
                breakpoints={
                    { 
                        320: 
                        { 
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: 
                        { 
                            slidesPerView: 2.2, 
                            centeredSlides: true,
                            slidesPerGroup: 1,
                        }, 
                        1024: 
                            { 
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        } 
                    }
                }
            >
                {reviews.map((review) => {                    
                    
                    return (
                        <SwiperSlide key={review.id} className={styles.slide}>
                           {review.video ? (
                            <VideoReview videoSrc={review.video} imageSrc={review.poster} name={review.name} age={review.age} />
                           ) : (
                            <TextReview  imageSrc={review.poster} name={review.name} age={review.age} text={review.text} />
                           )}           
                        </SwiperSlide>
                    )
                        
                })}
                
            </Swiper>

            <div className={`testimonals-student-slider-pagination ${styles.pagination}`}></div>

            
        </div>
    </section>
  );
}