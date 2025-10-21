import SectionTitle from "../UI/SectionTitle"
import SectionWrapper from "../UI/SectionWrapper"
import styles from "./Partners.module.css"

import partners from "../../data/partners.json"
import PartnerCard from "./PartnerCard"

export default function Partners() {
    return(
        <SectionWrapper>
            <div className={styles.partnersHead}>
                <SectionTitle className={styles.title} tag="h2">В партнерствес ведущими вузами Чехии</SectionTitle>
                <p>Благодаря этим партнёрствам наши студенты получают доступ к качественному образованию, актуальным программам и уверенности в поступлении.</p>
            </div>
            <div className={styles.partners}>
                {partners.map(partner => (
                    <PartnerCard key={partner.title} title={partner.title} img={partner.image} text={partner.text} />
                ))}
            </div>

        </SectionWrapper>
    )
}