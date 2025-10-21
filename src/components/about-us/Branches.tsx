import SectionWrapper from '../UI/SectionWrapper';
import styles from './Branches.module.css';

import maps from '../../data/maps.json';
import Branch from './Branch';

export default function Branches() {
    return(
        <SectionWrapper>
            <div className={styles.branchesSection}>
                {maps.map((location) => (
                    <Branch key={location.id} title={location.title} text={location.textLocation} img={location.image} tel={location.telNumber} maps={location.maps} />
                ))}
            </div>
        </SectionWrapper>
    )
}