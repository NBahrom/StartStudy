import { useState } from "react";
import faqData from "../data/faq.json";
import Spoiler from "./UI/Spoiler";
import { useMediaScreen } from "../util/useMediaScreen";

import styles from "./FAQ.module.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const {isDesktop} = useMediaScreen();
  if (isDesktop && activeIndex === null && faqData.length > 0) {
    setActiveIndex(0); // Open the first spoiler by default on desktop
  }
  
  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className={styles.section10}>
      <div className="container-wide">
        <div className={styles.section10Inner}>
          <h2 data-section7-title="" className={`section-title ${styles.section10Title}`}>
            Часто задаваемые вопросы
          </h2>

          <div className={styles.section10Spoiler}>
            {visibleFaqs.map((faq, index) => (
              <Spoiler
                className={styles.section10Item}
                key={faq.id}
                index={index}
                title={faq.question}
                text={faq.answer}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                type="numbered"
              />
            ))}
          </div>

          {!showAll && (
            <div
              onClick={() => setShowAll(true)}
              className={`${styles.section10More}`}
            >
              <span data-section7-more-btn="">Показать все вопросы</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none">
                <path
                  stroke="#02191D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
