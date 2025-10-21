import styles from './SectionTitle.module.css';

export default function     SectionTitle({children, tag, className  } : {children: React.ReactNode, tag: keyof JSX.IntrinsicElements, className?: string}) {
    const TagName = tag ;
    return (
        <TagName className={`${styles.title} ${className}`}>
            {children}
        </TagName>
    )
}