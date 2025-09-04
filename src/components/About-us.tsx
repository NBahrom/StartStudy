import styles from "./About-us.module.css";

export default function AboutUs() {
    return (
        <section className={styles.section1}>
            <div className="container-wide">
                <div className={styles.section1Inner}>
                    <div className="section-row">
                        <div className={`section-col ${styles.section1ColLeft}`}>
                            <h1
                                className={`section-title ${styles.section1Title}`}
                                data-section1-title=""
                            >
                                StartStudy — <br /> твой путь 
                                <span> к успешному обучению зарубежом</span>
                            </h1>
                        </div>

                        <div className={`section-col ${styles.section1ColRight}`}>
                            <div className={`section-text-2 ${styles.section1Text2}`}>
                                <p data-section1-text-2-1="">
                                    Летняя школа от StartStudy предлагает увлекательное обучение и
                                    путешествия для молодых людей. Программа предоставит вашему ребенку
                                    не только знания и навыки, но и незабываемые впечатления, которые
                                    останутся на всю жизнь! Эти услуги включают в себя: консультации по
                                    визам, консультации по культурной адаптации, рекомендации по
                                    планированию учебы/карьеры, помощь с жильем и помощь в выборе
                                    университета.
                                    <br />
                                    <br />
                                    StartStudy предлагает увлекательное обучение и путешествия для
                                    молодых людей. Программа предоставит вашему ребенку не только знания
                                    и навыки.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
