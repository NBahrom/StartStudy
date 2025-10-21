import styles from './OverviewCounters.module.css';
import OverviewCounter from './OverviewCounter';

export default function OverviewCounters() {
    return(
        <div className={styles.counterBlock}>
            <OverviewCounter number={1000} label="студентов из Узбекистана, Таджикистана, Казахстана, Туркменистана, Киргизии уже поступили в вузы Чехии с нашей поддержкой" />
            <OverviewCounter number={625} label="образовательных программ и университетов-партнёров: ČZU, Charles University, VŠCHT, MUP, Skoda, и другие." />
            <OverviewCounter number={7} label="столько лет опыта..." />
        </div>
    )
}