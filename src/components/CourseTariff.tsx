
import { useState, useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { Odometer } from 'odometer_countup';

import styles from "./CourseTariff.module.css";

export default function CourseTariff() {
    const priceRef = useRef<HTMLSpanElement | null>(null);
    const countUpInstance = useRef<CountUp | null>(null);
    const [isFullPrice, setIsFullPrice] = useState(true);


        useEffect(() => {
        if (!priceRef.current) return;

        const endVal = isFullPrice ? 5300 : 6300;

        countUpInstance.current = new CountUp(priceRef.current, endVal, {
            plugin: new Odometer({ duration: 1.5, lastDigitDelay: 0 }),
            startVal: !isFullPrice ? 5300 : 6300,
            duration: 1.5,
            separator: " ",
        });

        if (!countUpInstance.current.error) {
            countUpInstance.current.start();
        } else {
            console.error(countUpInstance.current.error);
        }
    }, [isFullPrice]);

  return (
    <div className={styles.tariffBlock}>
      <div className={`${styles.tariffToggle} ${!isFullPrice ? " toggle-right" : ""}`}>
        <div onClick={() => setIsFullPrice(true)} className={`${styles.tariffToggleItem} ${isFullPrice ? "active" : ""}`}>100% оплата</div>
        <div onClick={() => setIsFullPrice(false)}  className={`${styles.tariffToggleItem} ${!isFullPrice ? "active" : ""}`}>50/50 оплата</div>
      </div>

      <div className={styles.tariffItemWrapper}>
        <div className={styles.tariffItem}>
          <div className={styles.tariffPrice}>
            <p className={styles.tariffPriceValue}>
              $<span className={styles.tarrifPriceSpan} ref={priceRef} id="price">5300</span>
            </p>
          </div>
          <div className={`${styles.tariffText} ${styles.tariffTooltipWrapper}`}>
            <span>Стоимость обучения</span>
            <div className={styles.tariffTooltip}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <rect width="16" height="16" fill="#3AAECF" rx="8" />
                <path
                  fill="#fff"
                  d="m9.58 11.137-.108.444c-.326.128-.585.225-.78.29-.194.07-.419.104-.676.104-.394 0-.702-.095-.922-.286a.944.944 0 0 1-.326-.735c0-.115.008-.232.025-.35.016-.122.043-.258.079-.41l.404-1.44c.037-.139.066-.269.09-.39.025-.125.039-.239.039-.34 0-.185-.038-.313-.114-.386-.076-.072-.22-.108-.434-.108-.105 0-.214.016-.326.049a4.664 4.664 0 0 0-.281.094l.109-.444c.266-.109.52-.201.764-.277.244-.079.474-.118.691-.118.392 0 .693.095.903.286.214.188.32.433.32.735 0 .063-.007.173-.024.33-.013.159-.04.304-.079.435l-.404 1.436a3.989 3.989 0 0 0-.09.395c-.026.148-.039.26-.039.335 0 .191.043.321.129.39.085.07.233.104.444.104.098 0 .21-.017.335-.05a2.02 2.02 0 0 0 .272-.093Zm.104-6.025c0 .25-.095.464-.286.641a.964.964 0 0 1-.68.262.981.981 0 0 1-.687-.262.845.845 0 0 1-.286-.641c0-.25.095-.464.286-.642a.971.971 0 0 1 .686-.266c.267 0 .494.089.681.266.19.178.286.392.286.642Z"
                />
              </svg>
              <div className={styles.tariffTooltipContent}>
                Бесплатный полный визовый сервис от нашего визового партнёра Czechpoint
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tariffItem}>
          <div className={styles.tariffTitle}>2 октября 2025 - 31 мая 2026 </div>
          <div className={styles.tariffText}>длительность обучения</div>
        </div>

        <div className={`${styles.tariffItem} ${styles.tariffHours}`}>
          <div className={styles.tariffHoursItem}>
            <div className={styles.tariffTitle}>
              620 <br /> академ. часов
            </div>
            <div className={styles.tariffText}>по изучению языка</div>
          </div>
          <div className={styles.tariffHoursItem}>
            <div className={styles.tariffTitle}>
              120 <br /> академ. часов
            </div>
            <div className={styles.tariffText}>проф. ориентации</div>
          </div>
        </div>

        <div className={styles.tariffItem}>
          <div className={styles.tariffTitle}>кампус IVP в г. Прага</div>
          <div className={styles.tariffText}>место проведения занятий</div>
        </div>
      </div>

      <a href="#section-8" className={`${styles.tariffBtn} btn arrow-right`}>
        <span>Оставить заявку</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 9 4-4-4-4" />
        </svg>
      </a>
    </div>
  );
}
