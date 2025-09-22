import styles from './BlogArchivetitle.module.css'

export default function BlogArchiveTitle() {
    return(
        <div className={styles.section}>
            <div className="container-wide">
                <div>
                    <h1 className={styles.title}>    
                        Полезные статьи об образовании, учебе <br />
                        <span>
                            и жизни в Чехии
                        </span>
                    </h1>

                    <p className={styles.text}>Изучайте с нами интересные факты, советы и истории, чтобы сделать ваше пребывание еще более увлекательным и продуктивным. Присоединяйтесь к нам и открывайте мир образования вместе!</p>
                </div>
            </div>
        </div>
    )
}