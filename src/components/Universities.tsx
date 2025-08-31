import { useState , useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../data/universities.json";

import "./Universities.css"


export default function Universities() {
  const [activeTab, setActiveTab] = useState<string>(data.tabs[0].id);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <section className="section-6">
      <div className="container-wide">
        <div className="section-6_inner">
          <div className="section-row section-6_row">
            
            <div className="section-col section-6_col-left">
              <div className="main-tag">учебное заведение</div>
              <div className="section-6_tabs">
                {data.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`section-6_tab ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

          
            <div className="section-col section-6_col-right" style={{ minHeight: maxHeight }}>
              {data.tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  className={`section-6_content ${activeTab === tab.id ? "active" : ""}`}
                >
                  <div className="section-6_title section-title">{tab.title}</div>
                  <div className="section-text-2 section-6_text">{tab.content}</div>
                </div>
              ))}
            </div>
          </div>

         
            <Swiper
              className="slider-1"
              modules={[Navigation]}
              speed={400}
              spaceBetween={10}
              loop={true}
              centeredSlides={true}
              navigation={{ nextEl: ".home-next", prevEl: ".home-prev" }}
              breakpoints={{
                0: { slidesPerView: 1.18, slidesOffsetBefore: 25, spaceBetween: 0 },
                768: { slidesPerView: 1.18 }
              }}
            >
              {data.slides.map((slide, index) => (
                <SwiperSlide key={index} className="slider-1_item">
                  <img src={slide.src} alt={slide.alt} />
                </SwiperSlide>
              ))}
            </Swiper>

        </div>
      </div>
    </section>
  );
}