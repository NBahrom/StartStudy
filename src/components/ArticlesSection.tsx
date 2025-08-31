import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "./ArticlesSection.css"

import ArticlesImg from "../images/section-11-img.png";
import articlesData from "../data/articles.json";

export default function ArticlesSection() {
  return (
    <div className="section-11">
      <div className="container-wide">
        <div className="section-11_inner">
          <h2 className="section-title section-11_title">
            Полезные статьи <br />об учебе и жизни в Чехии
          </h2>
          <img src={ArticlesImg} alt="articles img" className="section-11_img" />

            <Swiper
                modules={[Pagination]}
                speed={400}
                loop={true}
                spaceBetween={20}
                pagination={{
                    el: ".section-11_slider_pagination",
                    clickable: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
                className="section-11_slider"
            >
                {articlesData.map((article) => (
                <SwiperSlide key={article.id} className="section-11_slide">
                    <div className="section-11_slide_text section-text-2">
                        {article.date}
                    </div>
                    <div className="section-11_slide_title">{article.title}</div>
                    <div className="section-11_slide_text section-text-2">
                        {article.text}
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

          <div className="section-11_slider_pagination"></div>
        </div>
      </div>
    </div>
  );
}
