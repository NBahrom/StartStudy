import styles from './ContentLabel.module.css';

export default function ContentLabel({children, className}: {children: React.ReactNode , className?: string}) {
    return(
        <span className={`${styles.label} ${className}`}>
            {children}
        </span>
    )
}

