import styles from "./AboutCzech.module.css";

export default function AboutCzech() {
  return (
    <section className={styles.section4}>
      <div className={styles.section4Inner}>
        <h2 className={`section-title ${styles.section4Title}`}>
          Чехия — лучшее место для <br /> <span>учебы и жизни</span>
        </h2>

        <div className={styles.section4ContentWrapper}>
          {/* Desktop items: both classes are local to the module now */}
          <div className={`${styles.section4Items} ${styles.desktop}`}>
            <div className={styles.section4Item}>
              <div className={styles.section4ItemTitle}>Безопастность</div>
              <div className={`section-text-2 ${styles.section4ItemText}`}>
                Чехия является 7-й самой безопасной страной в мире.
              </div>
            </div>

            <div className={styles.section4Item}>
              <div className={styles.section4ItemTitle}>Культура и среда</div>
              <div className={`section-text-2 ${styles.section4ItemText}`}>
                Чехия является 7-й самой безопасной страной в мире.
              </div>
            </div>

            <div className={styles.section4Item}>
              <div className={styles.section4ItemTitle}>Уровень жизни</div>
              <div className={`section-text-2 ${styles.section4ItemText}`}>
                Чехия является 7-й самой безопасной страной в мире.
              </div>
            </div>

            <div className={styles.section4Item}>
              <div className={styles.section4ItemTitle}>Престижные ВУЗы</div>
              <div className={`section-text-2 ${styles.section4ItemText}`}>
                Чехия является 7-й самой безопасной страной в мире.
              </div>
            </div>
          </div>

          {/* Mobile (swiper) items - mobile is local */}
          <div className={`${styles.section4Items} ${styles.mobile} swiper ${styles.section4Slider}`}>
            <div className="swiper-wrapper">
              <div className={`${styles.section4Item} swiper-slide`}>
                <div className={styles.section4ItemTitle}>Безопастность</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </div>

              <div className={`${styles.section4Item} swiper-slide`}>
                <div className={styles.section4ItemTitle}>Культура и среда</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </div>

              <div className={`${styles.section4Item} swiper-slide`}>
                <div className={styles.section4ItemTitle}>Уровень жизни</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </div>

              <div className={`${styles.section4Item} swiper-slide`}>
                <div className={styles.section4ItemTitle}>Престижные ВУЗы</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </div>
            </div>
          </div>

          {/* pagination (local + global combined if needed) */}
          <div className={`${styles.section4Pagination} slider_pagination`} />
        </div>
      </div>
    </section>
  );
}
