
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({children, className, noContainer , innerDivClass , isFirstSection, isLastSection}: {children: React.ReactNode, noContainer?: boolean, className?: string, isFirstSection?: boolean, isLastSection?: boolean, innerDivClass?: string}) {
    return(
        <section className={`${styles.section} ${className} ${isFirstSection ? styles.firstSection : ''} ${isLastSection ? styles.lastSection : ''}`}>
            <div className={innerDivClass}>
                <div className={noContainer ? "" : "container-wide"}>
                    {children}
                </div>
            </div>
        </section>
    )
}