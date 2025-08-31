import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProgramsHead from "./ProgramsHead"
import ProgramsSingle from "./ProgramsSingle";

import programs from "../../data/programs.json"
import "./Programs.css"

export default function Programms() {
    const [isFullPrice, setIsFullPrice] = useState(true)


    return(
        <section className="section-5">
            <div className="container-wide">
                <div className="section-5_inner">
                    <ProgramsHead isFullPrice={isFullPrice} setIsFullPrice={setIsFullPrice} />
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true, el: ".section-5_pagination" }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                        }}
                        className="section-5_slider"
                    >
                        {programs.map((program, index) => (
                            <SwiperSlide>
                                <ProgramsSingle 
                                    title={program.title}
                                    from={program.from}
                                    to={program.to}
                                    fullPrice={program.fullPrice}
                                    dividedPrice={program.dividedPrice}
                                    duration={program.duration}
                                    contents={program.contents}
                                    isFullPrice={isFullPrice}
                                    index={index}
                                />
                            </SwiperSlide>
                        ))}

                        <div className="section-5_pagination slider_pagination"></div>
                    </Swiper>
                    
                </div>
            </div>
        </section>
    )
}