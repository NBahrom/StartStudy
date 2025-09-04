import Video from "./UI/Video"
import styles from "./Hostels.module.css"
import TickSvg from "./UI/TickSvg"

export default function Hostels() {
  const advantages = [
    "Доступны частные квартиры",
    "Студенческие аппартаменты",
    "Цены от €300 <br/>в месяц ",
    "Собственные санузел <br/>и кухня",
    "Высокоскоростной интернет"
  ]

  return (
    <section className={styles.section8}>
      <div className="container-wide">
        <div className={styles.section8Inner}>
          <h2 data-section8-title="" className={`section-title ${styles.section8Title}`}>
            Варианты частных <br />общежитий
          </h2>

          <div data-section8-text="" className={`section-text-2 ${styles.section8Text}`}>
            Эти услуги включают в себя: консультации по визам, консультации по культурной адаптации, 
            рекомендации по планированию учебы/карьеры, помощь с жильем и помощь в выборе университета.
          </div>

          <Video
            className={styles.section8Video}
            imageSrc="images/section-8-img.png"
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <div className={styles.section8Advantages}>
            {advantages.map(text => (
              <div key={text} className={styles.section8Item}>
                <TickSvg />
                <div
                  dangerouslySetInnerHTML={{ __html: text }}
                  className={styles.section8ItemText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
