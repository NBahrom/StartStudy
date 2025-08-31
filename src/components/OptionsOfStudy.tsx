import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import SectionImage from "../images/section-2-img.jpg";
import "./OptionsOfStudy.css";

export default function OptionsOfStudy() {
    return(
        <section className="section-2">
            <div className="container-wide">
                <div className="section-2_inner">
                    <h2 data-section2-title="" className="section-title section-2_title">Варианты высшего образования в
                        Чехии</h2>

                    <div className="section-text-2 section-2_text-1">Консультации по визам, консультации по культурной
                        адаптации, рекомендации по планированию учебы/карьеры</div>
                    <div className="section-row section-slider-wrapper">
                        <div className="section-col section-2_col-left">
                            <img src={SectionImage} className="section-2-img"/>
                        </div>
                        <div className="section-col section-2_col-right">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{
                                el: ".section-2_slider_pagination",
                                clickable: true,
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                className="section-2_slider"
                            >
                                <SwiperSlide className="section-2_slide">
                                    <div className="section-2_slide_title">
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className="section-2_slide_text section-text-2">
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="section-2_slide">
                                    <div className="section-2_slide_title">
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className="section-2_slide_text section-text-2">
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="section-2_slide">
                                    <div className="section-2_slide_title">
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className="section-2_slide_text section-text-2">
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="section-2_slide">
                                    <div className="section-2_slide_title">
                                        Доступные университетские программы на английском языке
                                    </div>
                                    <div className="section-2_slide_text section-text-2">
                                        Обучиться на английском языке и получить степень бакалавра
                                        или магистра можно в Чехии.
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="slider_pagination section-2_slider_pagination"></div>



                            <a href="#section-8" className="btn section-2_btn arrow-right">
                                <span data-section1-tariff-button="">Узнать больше</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" d="m1 9 4-4-4-4" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}