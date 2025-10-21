import SectionTitle from "../UI/SectionTitle"
import SectionWrapper from "../UI/SectionWrapper"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import styles from "./AboutUsReview.module.css"

import reviewsData from "../../data/reviews.json"

export default function AboutUsReview() {

    const aboutReviews = reviewsData.filter(review => review.type === "about");

    return (
        <SectionWrapper isLastSection>
            <SectionTitle className={styles.title} tag="h2">
                Ценим и <span>дорожим своей репутацией,</span> любим и трепетно относимся ко всем нашим студентам
            </SectionTitle>

            <div className={styles.reviewBlock}>
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    speed={500}
                    slidesPerView={1}
                    pagination={{
                        el: ".about_us_pagination",
                        clickable: true,
                        renderBullet: function (index: number, className: string) {
                            const review = aboutReviews[index];
                            return `
                                <div class="${className} ${styles.customBullet}">
                                    <img src="${review.poster}" alt="${review.name}" />
                                </div>
                            `;
                        },
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className={styles.slider}
                >
                    {aboutReviews.map((review, i) => {
                        return(
                            <SwiperSlide key={review.id} className={styles.review}>
                                <p>{review.text}</p>

                                <span className={styles.name}>{review.name}</span>
                                <span className={styles.position}>{review.position}</span>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* Pagination container */}
                <div className={`${styles.pagination} about_us_pagination`}></div>
            </div>
        </SectionWrapper>
    );
}
