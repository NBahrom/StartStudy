import ContentLabel from '../UI/ContentLabel';
import SectionTitle from '../UI/SectionTitle';
import SectionWrapper from '../UI/SectionWrapper';
import styles from './AboutProgram.module.css';

export default function AboutProgram() {
    return(
        <SectionWrapper>
            <div className={styles.header}>
                <SectionTitle tag='h2' className={styles.title}>Благодаря сотрудничеству с вузами, у  нас есть грамотно <span> продуманная учебная программа </span> </SectionTitle>
            </div>
            <div className={styles.content}>
                <ContentLabel>startstudy</ContentLabel>
                <div className={styles.textBlock}>
                    <p>
                        Мы — официальные партнёры ČZU  в Праге и с 2019 года помогаем студентам из Центральной Азии пройти путь от изучения чешского языка до поступления в Чешские  вузы. <br /> <br />
                        Наша миссия — сделать европейское образование доступным, понятным и вдохновляющим. Мы открываем студентам двери в мир новых возможностей. <br /> <br /> 
                        StartStudy — это не про языковые курсы. <br /> Мы готовим к жизни и обучению в новой стране: с пониманием, поддержкой и реальной практикой. <br /> <br /> 
                        Этот путь начинается с одного шага — поверить в себя и заговорить по-чешски.
                    </p>
                </div>
            </div>
        </SectionWrapper>       
    )
}