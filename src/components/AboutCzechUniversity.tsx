import styles from "./AboutCzechUniversity.module.css";

export default function AboutCzechUniversity() {
  const images = [
    "images/slider-1-img-5.webp",
    "images/slider-1-img-4.webp",
    "images/slider-1-img-3.webp",
    "images/slider-1-img-1.webp",
    "images/slider-1-img-2.webp",
    "images/slider-1-img-3.webp",
    "images/slider-1-img-1.webp",
    "images/slider-1-img-2.webp",
    "images/slider-1-img-3.webp",
    "images/slider-1-img-1.webp",
    "images/slider-1-img-2.webp",
  ];

  return (
    <>
      <section className="section-4">
        <div className="container-wide">
          <div className="section-4_inner">
            <div className="section-row">
              <div className={`section-col ${styles.section4ColLeft}`}>
                <div data-section4-tag="" className="main-tag">
                  учебное заведение
                </div>
              </div>
              <div className={`section-col ${styles.section4ColRight}`}>
                <h2
                  data-section4-title=""
                  className={`section-title ${styles.section4Title}`}
                >
                  Институт образования и коммуникаций Чешского университета естественных наук

                </h2>
                <div
                  data-section4-text-1=""
                  className={`section-4_text-1 section-text-1 ${styles.section4Text1}`}
                >
                 Институт образования и коммуникаций (IVP ČZU) — это часть Чешского университета естественных наук в Праге, одного из крупнейших государственных вузов Чехии. Именно здесь проходят наши языковые курсы для иностранных студентов.
                </div>
                <div
                  data-section4-text-2=""
                  className={`section-4_text-2 section-text-2 ${styles.section4Text2}`}
                >
                  <p>
                    Институт сочетает академический подход с практической направленностью. Это позволяет студентам не только выучить чешский язык, но и познакомиться с системой образования в Чехии, адаптироваться к жизни в новой стране и уверенно готовиться к поступлению в университет.
                  </p>
                  <br />
                  <p>
                    Обучение проходит в комфортной университетской среде с поддержкой опытных преподавателей, что помогает студентам быстрее влиться в студенческую жизнь и чувствовать себя уверенно в Чехии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section5}>
        <div className={`swiper ${styles.slider1}`}>
          <div className={`${styles.slider1Wrapper} swiper-wrapper`}>
            {images.map((src, index) => (
              <div
                className={`${styles.slider1Item} swiper-slide`}
                key={index}
              >
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
