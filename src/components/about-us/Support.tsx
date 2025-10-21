import ContentLabel from "../UI/ContentLabel";
import SectionTitle from "../UI/SectionTitle";
import SectionWrapper from "../UI/SectionWrapper";
import styles from "./Support.module.css"
import SupportList from "./SupportList";

export default function Support() {
    return(
        <SectionWrapper>
            <div className={styles.header}>
                <ContentLabel>обещание</ContentLabel>
                <div className={styles.headerText}>
                    <SectionTitle tag="h2">Помогаем <br />словом и делом</SectionTitle>
                    <p >Консультации по визам, консультации по культурной адаптации, рекомендации по планированию учебы/карьеры</p>
                </div>
            </div>

            <div className={styles.content}>
                <SupportList index={1} title="Отзывчивая техподдержка" text="Эти услуги включают в себя: консультации по визам, консультации по культурной адаптации, рекомендации по планированию учебы/карьеры, помощь с жильем и помощь в выборе университета." />
                <SupportList index={2} title="База знаний" text="Инструкции в разделе «Помощь» помогут вам самостоятельно найти ответы на любые вопросы по заказу, настройке и управлению услугами Рег.ру" />
                <SupportList index={3} title="Блоги" text="Всё самое интересное из мира IT, бизнес-секреты и полезные технические инструкции в наших блогах" />
                <SupportList index={4} title="Обучающие видео" text="В наших соцсетях мы выкладываем полезные видеоролики по работе с услугами Рег.ру" />
            </div>
        </SectionWrapper>
    )
}