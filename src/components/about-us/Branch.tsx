import { useState } from "react"
import styles from './Branch.module.css';

export default function Branch({title, img, text, tel, maps}: {title: string, img: string , text: string, tel: string, maps?: {name: string, link: string}[]}) {
  
    const [mapsOpen, setMapsOpen] = useState(false);

    function openMaps() {
        setMapsOpen((prevVal) => !prevVal);
    }

    return(
        <div className={styles.branch}>

            <img src={img} alt={title} />

            <h3>{title}</h3>
            
            <p className={styles.text}>{text}</p>

            <a href={`tel:${tel}`} className={styles.tel}>{tel}</a>
            
            <div className={styles.spoiler}>
                <div onClick={openMaps} className={styles.spoilerHead}>
                    <span>Смотреть на картах</span>
                    <svg className={`${mapsOpen ? styles.rotate : ""}`} xmlns="http://www.w3.org/2000/svg"
                        width="10" height="7" fill="none">
                        <path stroke="#808C8E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".3" strokeWidth="1.5" d="m1 1.586 4 4 4-4" />
                    </svg>
                </div>
                <div className={styles.spoilerBody + (mapsOpen ? ` ${styles.activeHeight}` : "")}>
                    <div className={styles.spoilerBodyContent}>
                        {maps?.map((map, i) => (
                            <a key={i} href={map.link}>{map.name}</a>
                        ))}
                    </div>
                </div>
            </div>
            

        </div>
    )
}