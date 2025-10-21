import SectionWrapper from "../UI/SectionWrapper";
import AboutUsMission from "./AboutUsMission";
import styles from "./AboutUsMissions.module.css"

export default function AboutUsMissions() {
    return(
        <SectionWrapper innerDivClass={styles.missionBg}>
            <div className={styles.missionBlock}>
                <AboutUsMission img="images/mission-1.jpg" title="Миссия" text="Мы помогаем студентам раскрыть свой потенциал и добиться успеха в мировых образовательных центрах. Наша цель — обеспечить качественную подготовку, поддержку и сопровождение на пути к поступлению в ведущие вузы Европы." />
                <AboutUsMission img="images/mission-2.jpg" reverse title="Цель" text="Создать все условия для успешного поступления студентов в европейские университеты, предоставляя им доступ к современным образовательным программам, индивидуальным консультациям и актуальной информации о поступлении и обучении за рубежом." />
                <AboutUsMission img="images/mission-3.jpg" title="Ценности" text="Мы постоянно совершенствуем наши программы, чтобы соответствовать современным требованиям образования.  Мы ценим честность в общении и нацелены на долгосрочные отношения с нашими студентами и партнёрами." />
            </div>
        </SectionWrapper>
    )
}