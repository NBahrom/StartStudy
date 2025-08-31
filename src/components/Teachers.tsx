import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Video from "./UI/Video";

import { Swiper as SwiperType } from "swiper";

import teachers from "../data/teachers.json";

import "./Teachers.css"

export default function Teachers() {
    const [activeTeacher, setActiveTeacher] = useState(teachers[0]);

    return (
        <section className="section-7">
        <div className="container-wide">
            <div className="section-7__inner">
            <h2 data-section7-title="" className="section-title section-7_title">
                Преподаватели вузов-носители языка
            </h2>

            <div className="section-text-2 section-7_text-1">
                Консультации по визам, культурной адаптации, рекомендации по учебе и карьере
            </div>

            <div className="section-row section-7_row section-slider-wrapper">
                {/* Left slider */}
                <div className="section-col section-7_col-left">
                    <Swiper
                        modules={[Pagination]}
                        speed={400}
                        loop={true}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: ".section-7_slider_pagination"
                        }}
                        onSlideChange={(swiper: SwiperType) => {
                            const index = swiper.realIndex;
                            setActiveTeacher(teachers[index]);
                        }}
                        className="section-7_slider"
                    >
                        {teachers.map((teacher) => (
                            <SwiperSlide key={teacher.id} className="section-7_slide">
                                <div className="section-7_slide_title">{teacher.name}</div>
                                <div className="section-7_slide_text section-text-2">
                                    {teacher.subtitle}
                                </div>
                                <br />
                                <div className="section-7_slide_text section-text-2">
                                    {teacher.description}
                                </div>
                                <div className="section-7_experience_wrapper">
                                    <div className="section-7_experience_item">
                                        <div className="section-7_experience_title">
                                            {teacher.experience}
                                        </div>
                                        <div className="section-7_experience_text section-text-2">
                                            лет опыта <br /> преподавания
                                        </div>
                                    </div>
                                    <div className="section-7_experience_separator"></div>
                                    <div className="section-7_experience_item">
                                        <div className="section-7_experience_title">
                                            {teacher.levels}
                                        </div>
                                        <div className="section-7_experience_text section-text-2">
                                            преподаваемые уровни
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="section-7_slider_pagination slider_pagination"></div>
                </div>

                <div className="section-col section-7_col-right">
                <Video
                    imageSrc={activeTeacher.poster}
                    videoSrc={activeTeacher.video}
                />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}