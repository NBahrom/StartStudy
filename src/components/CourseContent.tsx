import styles from "./CourseContent.module.css"
import CourseTariff from "./CourseTariff"


export default function CourseContent() {
    return(
        <section className={styles.section1}>
            <div className="container-wide">
                <div className="section-1_inner">
                    <div className="section-row">
                        <div className={`section-col ${styles.section1ColLeft}`}>
                            <div  className={`main-tag ${styles.section1Tag}`}>обучение</div>
                            <h1  className={`section-title ${styles.section1Title}`}>Курс чешского языка университета <b> Естесственных наук в Праге</b></h1>
                            <div className={`section-text-1 ${styles.section1Text1}`}>
                                Интенсивный курс чешского языка в Праге предназначен для абитуриентов, стремящихся получить качественное образование в ведущих вузах Чехии. 
                            </div>

                            <div className={`section-text-2 ${styles.section1Text2}`}>
                                <p data-section1-text-2-1="">Годовой курс чешского языка организован в сотрудничестве с Университетом естественных наук в Праге и предназначен для будущих студентов, планирующих обучение в государственных вузах Чехии.<br/><br/>Программа включает 600 академических часов и проводится очно в кампусе университета.</p>
                                <br/>
                                <p data-section1-text-2-2="">Занятия проходят в небольших группах до 15 человек и охватывают все ключевые аспекты языка: грамматику, устную и письменную речь, аудирование и понимание текстов. Обучение ведут квалифицированные преподаватели и носители языка.<br/><br/><b>Цель курса:</b><br/>Подготовить студента к поступлению и адаптации в чешской академической среде.<br/><br/>После прохождения языкового курса студент будет: <ul> <li>владеть чешским языком на уровне B2,</li> <li>готов к вступительным экзаменам в вузы Чехии,</li> <li>знать особенности системы высшего образования страны,</li> <li>уверенно ориентироваться в академических и бытовых ситуациях.</li></ul><br/><br/>Программа разработана на основе многолетнего опыта подготовки иностранных студентов и соответствует требованиям ведущих чешских университетов.</p>
                            </div>


                        </div>
                        <div className={`section-col ${styles.section1ColRight}`}>
                            <CourseTariff />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}