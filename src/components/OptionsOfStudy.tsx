import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { useSwiperPauseOnHover } from "../util/useSwiperPauseOnHover ";

import SectionImage from "../images/section-2-img.jpg";
import styles from "./OptionsOfStudy.module.css";
import 'swiper/css/effect-fade';

export default function OptionsOfStudy() {
    const swiperRef = useRef<SwiperType | null>(null);

    useSwiperPauseOnHover(swiperRef, `.${styles.section2SliderPagination}`);


    return (
        <section className={styles.section2}>
            <div className="container-wide">
                <div className={styles.section2Inner}>
                    <h2 data-section2-title="" className={`section-title ${styles.section2Title}`}>
                        Варианты высшего образования в Чехии
                    </h2>

                    <div className={`section-text-2 ${styles.section2Text1}`}>
                        Консультации по визам, консультации по культурной адаптации,
                        рекомендации по планированию учебы/карьеры
                    </div>

                    <div className="section-row section-slider-wrapper">
                        <div className={`section-col ${styles.section2ColLeft}`}>
                            <img src={SectionImage} className={styles.section2Img} />
                        </div>

                        <div className={`section-col ${styles.section2ColRight}`}>
                            <Swiper
                                modules={[Pagination, Autoplay, EffectFade]}
                                effect="fade"
                                pagination={{
                                    el: `.${styles.section2SliderPagination}`,
                                    clickable: true,
                                }}
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 4000, 
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className={styles.section2Slider}
                                onSwiper={(swiper: SwiperType)  => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide className={styles.section2Slide}>
                                    <div className={styles.section2SlideTitle}>
                                        Доступные универсиasdasdтетские программы на английском языке
                                    </div>
                                    <div className={`section-text-2 ${styles.section2SlideText}`}>
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.section2Slide}>
                                    <div className={styles.section2SlideTitle}>
                                        Доступные университетские программы asdasdна английском языке
                                    </div>
                                    <div className={`section-text-2 ${styles.section2SlideText}`}>
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.section2Slide}>
                                    <div className={styles.section2SlideTitle}>
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className={`section-text-2 ${styles.section2SlideText}`}>
                                        Обучиться на английском языке и получить степень бакалавра
                                        или мasdasdагистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.section2Slide}>
                                    <div className={styles.section2SlideTitle}>
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className={`section-text-2 ${styles.section2SlideText}`}>
                                        Обуasdasdчиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className={`slider_pagination ${styles.section2SliderPagination}`}></div>

                            <a href="#section-8" className={`btn arrow-right ${styles.section2Btn}`}>
                                <span data-section1-tariff-button="">Узнать больше</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
