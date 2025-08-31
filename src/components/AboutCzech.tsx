import "./AboutCzech.css"

export default function AboutCzech(){
    return(
        <section className="section-4">
            <div className="section-4_inner">
                <h2 className="section-title section-4_title">Чехия — лучшее место для <br/> <span>учебы и жизни</span></h2>
                <div className="section-4_content_wrapper">

                    <div className="section-4_items desktop">
                        <div className="section-4_item">
                            <div className="section-4_item_title">Безопастность</div>
                            <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной страной
                                в мире. </div>
                        </div>
                        <div className="section-4_item">
                            <div className="section-4_item_title">Культура и среда</div>
                            <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной страной
                                в мире. </div>
                        </div>
                        <div className="section-4_item">
                            <div className="section-4_item_title">Уровень жизни</div>
                            <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной страной
                                в мире. </div>
                        </div>
                        <div className="section-4_item">
                            <div className="section-4_item_title">Престижные ВУЗы</div>
                            <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной страной
                                в мире. </div>
                        </div>
                    </div>

                    <div className="section-4_items mobile swiper section-4_slider">
                        <div className="swiper-wrapper">
                            <div className="section-4_item swiper-slide">
                                <div className="section-4_item_title">Безопастность</div>
                                <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной
                                    страной
                                    в мире. </div>
                            </div>
                            <div className="section-4_item swiper-slide">
                                <div className="section-4_item_title">Культура и среда</div>
                                <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной
                                    страной
                                    в мире. </div>
                            </div>
                            <div className="section-4_item swiper-slide">
                                <div className="section-4_item_title">Уровень жизни</div>
                                <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной
                                    страной
                                    в мире. </div>
                            </div>
                            <div className="section-4_item swiper-slide">
                                <div className="section-4_item_title">Престижные ВУЗы</div>
                                <div className="section-4_item_text section-text-2">Чехия является 7-й самой безопасной
                                    страной
                                    в мире. </div>
                            </div>
                        </div>
                    </div>

                        <div className="section-4_pagination slider_pagination"></div>

                </div>
            </div>
        </section>
    )
}