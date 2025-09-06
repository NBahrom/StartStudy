import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper as SwiperType } from "swiper";

import reviews from "../data/reviews.json";

import styles from './ReviewsCzech.module.css'

export default function ReviewsCzech() {
    const czechReviews = reviews.filter((review) => review.type === "czech");
    const [activeReview, setActiveReview] = useState(czechReviews[0]);

    return (
        <section className={styles.section}>
            <div className="container-wide">
                <h2 className={styles.title}>Отзывы о качестве <br /> образования в Чехии</h2>
                <div className={styles.reviewsBlock}>
                    <div className={styles.reviewsText}>
                         <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: `.czech_review_slider_nav_next  `,
                                prevEl: `.czech_review_slider_nav_prev`,
                            }}
                            pagination={{
                                el: `.czech_review_pagination`,
                                clickable: true,
                            }}
                            loop={true}
                            speed={400}
                            slidesPerView={1}
                            onSlideChange={(swiper: SwiperType) => {
                                const realIndex = swiper.realIndex;
                                setActiveReview(czechReviews[realIndex]);
                            }}
                            onInit={(swiper: SwiperType) => {
                                setActiveReview(czechReviews[swiper.realIndex]);
                            }}
                            className={styles.slider}
                        >
                            {czechReviews.map((review) => (
                                <SwiperSlide key={review.id} className={styles.slide}>
                                    <h4 className={styles.reviewTitle}>{review.title}</h4>
                                    <p className={styles.reviewText}>{review.text}</p>
                                    <div className={styles.reviewAuthor}>
                                        <span className={styles.reviewName}>{review.name}</span>
                                        <span className={styles.reviewAge}>{review.age}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            
                        <div className={styles.navigation}>
                            <div className={`czech_review_slider_nav_prev ${styles.prev}`}>
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

                            <div className={`czech_review_slider_nav_next ${styles.next}`}>
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
                        </div>

                        
                    </div>
                    <div className={styles.reviewImage}>
                        <img src={activeReview.poster} alt={activeReview.name} />
                        <div className={`czech_review_pagination ${styles.pagination}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}