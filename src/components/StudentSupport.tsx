import { useState } from "react";
import supportFAQ from "../data/supportFAQ.json";
import Spoiler from "./UI/Spoiler";

import './StudentSupport.css';

export default function StudentSupport() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return(
        <section className="section-3">
            <div className="container-wide">
                <div className="section-3_inner">
                    <div className="section-row">
                        <div className="section-col section-3_col">
                            <h2 className="section-title section-3_title">Комплексная <br/> <span>поддержка студентов</span>
                            </h2>
                        </div>
                        <div className="section-col section-3_col">
                            <div className="section-text-1 section-3_text-1">Эти услуги включают в себя: консультации по
                                визам, консультации по культурной адаптации, рекомендации по планированию учебы/карьеры,
                                помощь с жильем и помощь в выборе университета.</div>

                            <div className="section-3_spoiler spoiler">
                                {supportFAQ.map((item, i) => (
                                    <Spoiler
                                    key={i}
                                    title={item.title}
                                    text={item.text}
                                    index={i}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}