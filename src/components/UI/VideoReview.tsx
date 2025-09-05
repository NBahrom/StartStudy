import styles from './VideoReview.module.css'
export default function VideoReview({videoSrc, imageSrc, name, age}: {videoSrc: string, imageSrc: string, name: string, age: string}) {
    return(
        <div style={{backgroundImage: `url(${imageSrc})`}} className={styles.videoBlock}>
            <div className={styles.mask}></div>
            <div className={styles.playIcon}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.66528 4.13397C9.33195 4.51887 9.33195 5.48113 8.66528 5.86603L1.91528 9.76314C1.24862 10.148 0.415283 9.66691 0.415283 8.89711L0.415283 1.10289C0.415283 0.333085 1.24862 -0.14804 1.91528 0.23686L8.66528 4.13397Z" fill="#2F3846"/>
                </svg>
            </div>

            <div>
                {/* <p className={styles.text}>{text}</p> */}
                <span className={styles.name}>{name}, {age} года</span>
            </div>
        </div>
    )
}