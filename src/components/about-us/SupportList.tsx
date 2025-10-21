import styles from "./SupportList.module.css"

export default function SupportList({title, text, index}: {title: string, text:string, index: number}) {
    return(
        <div className={styles.list}>
            <div className={styles.listTitle}>
                <span>0{index}.</span>
                <h3>{title}</h3>
            </div>

            <p className={styles.text}>{text}</p>

        </div>
    )
}