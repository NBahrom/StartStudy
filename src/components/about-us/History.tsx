import { useEffect, useRef, useState } from "react";
import SectionTitle from "../UI/SectionTitle"
import SectionWrapper from "../UI/SectionWrapper"
import styles from "./History.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import historyData from "../../data/history.json"

export default function History() {
    const swiperContainerRef = useRef<HTMLDivElement | null>(null);
    const [swiperHeight, setSwiperHeight] = useState<number | null>(null);

    useEffect(() => {
        if (swiperContainerRef.current) {
        // get current Swiper height
        const height = swiperContainerRef.current.offsetHeight;
        // double it
        setSwiperHeight(height * 2);
        }
    }, [historyData]); // run after slides render
    
    return(
        <SectionWrapper className={styles.section}>
            <div className={styles.header}>
                <SectionTitle tag="h2">История <br /> <span>длиною в 6 лет</span></SectionTitle>
                <div className={styles.navigation}>
                    <div className="history_nav_prev">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.15078 7H17" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.45604 12.3037L2.15157 6.99925L7.45604 1.69628" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="history_nav_next">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8492 7L3 7" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.544 1.69628L17.8484 7.00075L12.544 12.3037" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div style={{height: `${swiperHeight}px`}} ref={swiperContainerRef}>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: `.history_nav_next`,
                        prevEl: `.history_nav_prev`,
                    }}
                    slidesPerView="auto"
                    className={styles.slider}
                >
                    {historyData.map((data, index) => ( 
                        <SwiperSlide key={index} className={styles.slide}>
                            {/* <div className={styles.slideInner}> */}
                                <p>{data.text}</p>
                                <span>{data.year}</span>
                                <div className={styles.slideMarker}></div>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </SectionWrapper>
    )
}