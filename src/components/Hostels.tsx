import Video from "./UI/Video"

import "./Hostels.css"
import TickSvg from "./UI/TickSvg"

export default function Hostels() {

    const advantages = [
        "Доступны частные квартиры",
        "Студенческие аппартаменты",
        "Цены от €300 <br/>в месяц ",
        "Собственные санузел <br/>и кухня",
        "Высокоскоростной интернет"
    ]

    return(
        <section className="section-8">
            <div className="container-wide">
                <div className="section-8_inner">
                    <h2 data-section8-title="" className="section-title section-8_title">Варианты частных <br/>общежитий
                    </h2>

                    <div data-section8-text="" className="section-8_text section-text-2">Эти услуги включают в себя:
                        консультации по визам, консультации по культурной адаптации, рекомендации по планированию
                        учебы/карьеры, помощь с жильем и помощь в выборе университета.</div>

                    <Video className="section-8_video" imageSrc="images/section-8-img.png" videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />

                    <div className="section-8_advantages">
                        {advantages.map(text => (
                            <div key={text} className="section-8_item">
                                <TickSvg />
                                <div dangerouslySetInnerHTML={{ __html: text }} className="section-8_item_text"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}