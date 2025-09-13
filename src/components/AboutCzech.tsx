import styles from "./AboutCzech.module.css";
import { useMediaScreen } from "../util/useMediaScreen";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


export default function AboutCzech() {
  const {isMobile} = useMediaScreen()

  return (
    <section className={styles.section4}>
      <div className={styles.section4Inner}>
        <h2 className={`section-title ${styles.section4Title}`}>
          Чехия — лучшее место для <br /> <span>учебы и жизни</span>
        </h2>

        <div className={styles.section4ContentWrapper}>
          {/* Desktop items: both classes are local to the module now */}
          {!isMobile && 
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
          }

          {/* Mobile (swiper) items - mobile is local */}
          {isMobile && 
            <Swiper
              modules={[Pagination]}
              className={`${styles.section4Items} ${styles.mobile} ${styles.section4Slider}`}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                el: `.swiper-section-4-pagiantion`,
                clickable: true,
              }}
            >
              <SwiperSlide className={styles.section4Item}>
                <div className={styles.section4ItemTitle}>Безопастность</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.section4Item}>
                <div className={styles.section4ItemTitle}>Культура и среда</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.section4Item}>
                <div className={styles.section4ItemTitle}>Уровень жизни</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.section4Item}>
                <div className={styles.section4ItemTitle}>Престижные ВУЗы</div>
                <div className={`section-text-2 ${styles.section4ItemText}`}>
                  Чехия является 7-й самой безопасной страной в мире.
                </div>
              </SwiperSlide>
            </Swiper>
          }

          {/* pagination (local + global combined if needed) */}
          <div className={`${styles.section4Pagination} swiper-section-4-pagiantion slider_pagination`} />
        </div>
      </div>
    </section>
  );
}
