import styles from './OverviewCounter.module.css';
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function OverviewCounter({number, label}: {number: number, label: string}) {
    const numberRef = useRef<HTMLSpanElement | null>(null);
    const countUpInstance = useRef<CountUp | null>(null);

    useEffect(() => {
        if (!numberRef.current) return;
        countUpInstance.current = new CountUp(numberRef.current, number, {
            startVal: 0,
            duration: 2,
            separator: "",
            enableScrollSpy: true,
            scrollSpyOnce: true,
            suffix: "+",
        });
        if (!countUpInstance.current.error) {
            countUpInstance.current.start();
        } else {
            console.error(countUpInstance.current.error);
        }
    }, []);

   
    return(
         <div className={styles.counterItem}>
            <div className={styles.counterItemInner}>
                <span ref={numberRef} className={styles.counterNumber}>0</span>
                <span className={styles.counterLabel}>{label}</span>
            </div>
        </div>
    )
}