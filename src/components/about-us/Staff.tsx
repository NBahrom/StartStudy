import SectionTitle from "../UI/SectionTitle"
import SectionWrapper from "../UI/SectionWrapper"
import styles from "./Staff.module.css"

import staffData from "../../data/staff.json"

export default function Staff() {
    return(
        <SectionWrapper innerDivClass={styles.section}>
            <div className={styles.header}>
                <SectionTitle tag="h2">Сердце компании</SectionTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. StartStudy est via tua ad novam experientiam in Praga. Officia nostra sunt simplicia: adiuvare, docere, et comitari. Lorem ipsum dolor sit amet, consectetur adipiscing elit. StartStudy est via tua ad novam experientiam in Praga. Officia nostra sunt simplicia: adiuvare, docere, et comitari. </p>
            </div> 
            
            <div className={styles.staff}>
                {staffData.map(person => (
                    <div key={person.id} className={styles.person}>
                        <img src={person.image} alt={person.name} />

                        <div className={styles.context}>
                            <h3>{person.name} <br /> {person.surname}</h3>
                            <p>{person.position}</p>
                        </div>
                    </div>
                ))}
            </div>     
        </SectionWrapper>
    )
}