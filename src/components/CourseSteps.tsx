import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useMediaScreen } from "../util/useMediaScreen";

import data from "../data/stepsToStart.json";

import styles from './CourseSteps.module.css'

export default function CourseSteps() {
    const {isMobile} = useMediaScreen();

    // for desctop version was used vanilla js more you can see in public/main.js

    return (
        <section className={styles.section3}>
            <div className="container-wide">
                <div className={styles.section3Inner}>
                    <div className={styles.section3Content}>
                        <h2 data-section3-title="" className={`section-title ${styles.section3Title}`}>
                            Полный набор для старта в Чехии
                        </h2>
                        <div data-section3-text="" className={`${styles.section3Text} section-text-2`}>
                           Готовьтесь к поступлению, жизни и адаптации с поддержкой и структурированным обучением. Научитесь понимать, говорить и писать по-чешски и начните строить своё будущее в ЕС
                        </div>    
                    </div>
                    {!isMobile && (
                        <div className={`${styles.slider3}`}>
                            <div className={`${styles.featuresWrapper}`}>
                                {data.map((item, index) => (
                                    <div data-translate={`-${100 - 20 * index}`} key={item.id} className={`${styles.featuresItem} features_item swiper-slide ${styles.slider3Item}`}>
                                        <div className={styles.featuresImgWrapper}>
                                            <img src={item.image} className={styles.featuresImg}/>
                                        </div>
                                        <div className={styles.featuresContent}>
                                            <div data-features-number-1="" className={styles.featuresNumber}>{index + 1}</div>
                                            <div data-features-title-1="" className={styles.featuresTitle}>{item.title}</div>
                                            <div data-features-text-1="" className={`${styles.featuresText} section-text-2`}>
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            
                            </div>
                            <div className={`swiper-pagination ${styles.slider3Pagination}`}></div>
                        </div>
                    )}
                    {isMobile && (
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            speed={400}
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{ delay: 4000 }}
                            pagination={{
                            clickable: true,
                            el: `.${styles.slider3Pagination}`, // link to module CSS class
                            }}
                            className={styles.slider3}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide className={styles.slider3Item}>
                                    <div className={styles.featuresItem}>
                                        <div className={styles.featuresImgWrapper}>
                                        <img
                                            src={item.image}
                                            className={styles.featuresImg}
                                            alt=""
                                        />
                                        </div>
                                        <div className={styles.featuresContent}>
                                        <div
                                            data-features-number-1=""
                                            className={styles.featuresNumber}
                                        >
                                            {index + 1}
                                        </div>
                                        <div
                                            data-features-title-1=""
                                            className={styles.featuresTitle}
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            data-features-text-1=""
                                            className={`${styles.featuresText} section-text-2`}
                                        >
                                            {item.text}
                                        </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>  
                    )}

                </div>
            </div>
        </section>
    )
}
