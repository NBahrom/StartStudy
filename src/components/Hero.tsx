import { useState } from "react";
import styles from "./Hero.module.css";

export default function Banner() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(tabIndex: number) {
    setActiveTab(tabIndex);
  }

  return (
    <section className={styles.heroSection}>
      <div className="container-wide">{/* stays global */}
        <div data-tab-block className={styles.heroInner}>
          {/* Tab 1 */}
          <div
            className={`${styles.heroContent} ${styles.heroContent1} ${
              activeTab === 1 ? styles.active : ""
            }`}
          >
            <h1
              className={`${styles.sectionTitle} ${styles.heroTitle}`}
              data-hero-title=""
            >
              Курс чешского языка
              <br />университета <br />
              Естесственных наук <br />в Праге
            </h1>

            <div className={styles.heroText1}>
              Летняя школа в Праге представляет собой <br />
              захватывающий опыт, сочетающий обучение <br />
              и путешествия для молодых людей.
            </div>

            <div className={styles.heroText2}>
              Дилдора М. студентка Czech University <br />
              of Life Sciences. Окончила <br />
              языковые курсы StartStudy в г. Прага
            </div>
          </div>

          {/* Tab 2 */}
          <div
            className={`${styles.heroContent} ${styles.heroContent2} ${
              activeTab === 2 ? styles.active : ""
            }`}
          >
            2
          </div>

          {/* Tab 3 */}
          <div
            className={`${styles.heroContent} ${styles.heroContent3} ${
              activeTab === 3 ? styles.active : ""
            }`}
          >
            3
          </div>

          {/* Tabs */}
          <div className={styles.heroTabsWrapper}>
            <div className={styles.heroTabs} data-tab-buttons="">
              <button
                onClick={() => handleTabClick(1)}
                className={`${styles.heroTab} ${
                  activeTab === 1 ? styles.active : ""
                }`}
              >
                <div className={styles.heroTabText}>Языковые курсы</div>
              </button>
              <button
                onClick={() => handleTabClick(2)}
                className={`${styles.heroTab} ${
                  activeTab === 2 ? styles.active : ""
                }`}
              >
                <div className={styles.heroTabText}>Летняя школа в Праге</div>
              </button>
              <button
                onClick={() => handleTabClick(3)}
                className={`${styles.heroTab} ${
                  activeTab === 3 ? styles.active : ""
                }`}
              >
                <div className={styles.heroTabText}>Выставка EduFair</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
