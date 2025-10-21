import SectionTitle from "../UI/SectionTitle";
import SectionWrapper from "../UI/SectionWrapper";
import styles from "./Projects.module.css";

import projectsData from "../../data/projects.json";

export default function Projects() {
    return(
        <SectionWrapper innerDivClass={styles.innerDiv} className={styles.section}>
            <SectionTitle tag="h2" className={styles.title}>
                Образовательные инициативы <span> и проекты, которые мы реализуем </span>
            </SectionTitle>
            <div className={styles.projects}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <div className={styles.projectCardInner}>
                            <div className={styles.iconWrapper}>
                                <img src={project.icon} alt={project.title} />
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>       
    )
}