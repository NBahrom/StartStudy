
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import reviews from "../data/reviews.json";
import styles from "./ReviewSupport.module.css";

import VideoReview from "./UI/VideoReview";
import TextReview from "./UI/TextReview";
import { useMediaScreen } from "../util/useMediaScreen";

export default function ReviewSupport() {
    const {isMobile} = useMediaScreen();
    const supportReviews = reviews.filter((review) => review.type === "support");

  return (
    <section className={styles.section}>
        <div className="container-wide">
            <h2 className={styles.title}>Отзывы о поддержке и сопровождении во время учебы</h2>
        
            <div>
                {isMobile ? (
                    <>
                        <Swiper
                            modules={[Pagination]}
                            className={styles.swiper}
                            slidesPerView={"auto"}
                            pagination={{
                                el: `.support_review_pagination`,
                                clickable: true,
                            }}
                            breakpoints={{
                                320: {
                                    spaceBetween: 20,
                                    slidesPerView: 1,
                                },

                                768: {
                                    slidesPerView: "auto"
                                },
                            }}
                        >
                            {supportReviews.map((review) => (
                                <SwiperSlide key={review.id} className={styles.slide}>
                                    {review.video ? (
                                    <VideoReview videoSrc={review.video} imageSrc={review.poster} title={review.title} name={review.name} age={review.age} />
                                    ) : (
                                    <TextReview imageSrc={review.poster} text={review.text} name={review.name} age={review.age} />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={`support_review_pagination ${styles.pagination}`}></div>
                    </>
                ) : (
                    <div className={styles.reviews}>
                        {supportReviews.map((review) =>
                            review.video ? (
                                <VideoReview key={review.id} videoSrc={review.video} imageSrc={review.poster} title={review.title} name={review.name} age={review.age} />
                            ) : (
                                <TextReview key={review.id} imageSrc={review.poster} text={review.text} name={review.name} age={review.age} />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}