import { useState } from "react"
import Spoiler from "./UI/Spoiler"
import SectionImg from "../images/section-2-img.webp"


import styles from "./CourseFor.module.css"

export default function CourseFor() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    

    return (
        <section className={styles.section2}>
            <div className="container-wide">
                <div className={styles.section2Inner}>
                    <div className="section-row">
                        <div className={`section-col ${styles.section2ColLeft}`}>
                            <img src={SectionImg} className={styles.section2Img} />
                        </div>
                        <div className={`section-col ${styles.section2ColRight}`}>
                            <h2 data-section2-title="" className={`section-title ${styles.section2Title}`}>
                                Программа <b>идеально подойдет</b>
                            </h2>

                            <div className={`${styles.section2Spoiler} spoiler`}>
                                <Spoiler 
                                    type="numbered" 
                                    title="Выпускникам школ и колледжей" 
                                    text="Тем, кто хочет поступить в университет Чехии после 11 класса или колледжа. Мы поможем выучить язык, подготовиться к экзаменам, оформить визу и адаптироваться в новой стране." 
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    key={1}
                                    index={0}
                                />
                                <Spoiler 
                                    type="numbered" 
                                    title="Студентам, которые хотят продолжить обучение в Чехии" 
                                    text="Курс подойдёт тем, кто уже учится в вузе и хочет поступить в чешский университет — на бакалавриат, магистратуру или начать обучение заново. Это решение для тех, кто стремится получить качественное европейское образование и ищет более стабильную, перспективную академическую среду." 
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    key={2}
                                    index={1}
                                />
                                <Spoiler 
                                    type="numbered" 
                                    title="Для желающих возобновить языковое обучение" 
                                    text="Студенты, которые не смогли завершить обучение и хотят продолжить языковую подготовку, найдут в этой программе второй шанс. Это возможность улучшить знание чешского, завершить курс и сделать следующий шаг — в учёбе, работе или адаптации в Чехии." 
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    key={3}
                                    index={2}
                                />
                            </div>

                            <a href="#section-8" className={`${styles.section2Btn} btn arrow-right`}>
                                <span data-section1-tariff-button="">Оставить заявку</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
