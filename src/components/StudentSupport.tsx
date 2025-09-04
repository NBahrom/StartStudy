import { useState } from "react";
import supportFAQ from "../data/supportFAQ.json";
import Spoiler from "./UI/Spoiler";

import styles from "./StudentSupport.module.css";

export default function StudentSupport() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={styles.section3}>
      <div className="container-wide">
        <div className="section-3_inner">
          <div className="section-row">
            <div className={`section-col ${styles.section3Col}`}>
              {/* title kept as global because your CSS didn't include .section-3_title */}
              <h2 className={`section-title ${styles.section3Title}`}>
                Комплексная <br /> <span>поддержка студентов</span>
              </h2>
            </div>

            <div className={`section-col ${styles.section3Col}`}>
              <div className={`section-text-1 ${styles.section3ColText1}`}>
                Эти услуги включают в себя: консультации по визам, консультации по
                культурной адаптации, рекомендации по планированию учебы/карьеры,
                помощь с жильем и помощь в выборе университета.
              </div>

              <div className={`${styles.section3Spoiler } spoiler`}>
                {supportFAQ.map((item, i) => (
                  <Spoiler
                    key={i}
                    title={item.title}
                    text={item.text}
                    index={i}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
