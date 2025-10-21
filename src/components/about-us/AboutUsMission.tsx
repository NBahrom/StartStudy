import styles from "./AboutUsMission.module.css"

export default function AboutUsMission({title , text, img, reverse} : {title: string, text: string, img: string, reverse?: boolean}) {
    return(
        <div className={`${styles.mission} ${reverse ? styles.reverse : ""}`}>
            <div className={styles.textBlock}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

            <div className={styles.img}>
                <img src={img} alt={title} />
            </div>
        </div>
    )
}