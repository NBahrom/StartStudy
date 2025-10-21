import styles from "./PartnerCard.module.css"

export default function PartnerCard({title, text, img} : {title: string, text: string, img: string}) {
    return(
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt={title} />
            </div>

            <h3>{title}</h3>

            <p>{text}</p>
        </div>
    )
}