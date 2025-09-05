import styles from "./TextReview.module.css"

export default function TextReview({text, name, age, imageSrc}: {text: string, name: string, age: string, imageSrc: string}) {
    return(
        <div className={styles.textBlock}>
            <p className={styles.text}>{text}</p>

            <div className={styles.author}>
                <img src={imageSrc} alt="author image" />
                <div className={styles.authorInfo}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.age}>{age} лет</span>
                </div>
            </div>
        </div>
    )
}