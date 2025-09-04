import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { Odometer } from 'odometer_countup';

type ProgramsProps = {
  title: string;
  from: string;
  to: string;
  fullPrice: number;
  dividedPrice: number;
  duration: string;
  isFullPrice: boolean;
  contents: {
    text: string;
   }[]
  index: number;
};

export default function ProgramsSingle({title, from, to, fullPrice, dividedPrice, duration, contents, isFullPrice, index}: ProgramsProps) {
    const priceRef = useRef<HTMLSpanElement | null>(null);
    const countUpInstance = useRef<CountUp | null>(null);
    // const [lastValue, setLastValue] = useState(0);

    useEffect(() => {
        if (!priceRef.current) return;

        const endVal = isFullPrice ? fullPrice : dividedPrice;

        countUpInstance.current = new CountUp(priceRef.current, endVal, {
            plugin: new Odometer({ duration: 1.5, lastDigitDelay: 0 }),
            startVal: !isFullPrice ? fullPrice : dividedPrice,
            duration: 1.5,
            separator: " ",
        });

        if (!countUpInstance.current.error) {
            countUpInstance.current.start();
        } else {
            console.error(countUpInstance.current.error);
        }
    }, [isFullPrice, fullPrice, dividedPrice]);

    return(
        <div className="tariff-item_wrapper">
            <div className="tariff-item_title">{title}</div>
            <div className="tariff-item_data">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <path stroke="#02191D" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M3.334 5.83a1.667 1.667 0 0 1 1.667-1.666h10a1.667 1.667 0 0 1 1.666 1.667v10a1.667 1.667 0 0 1-1.666 1.666H5a1.667 1.667 0 0 1-1.667-1.666v-10ZM13.334 2.5v3.333M6.666 2.5v3.333M3.334 9.164h13.333M5.834 11.664h.01M8.342 11.664h.005M10.842 11.664h.005M13.346 11.664h.005M10.846 14.164h.005M5.842 14.164h.005M8.342 14.164h.005" />
                </svg>
                <span>{from} — {to}</span>
            </div>
            <div className="tariff-price_wrapper">
                <div className="tariff-price">
                     <span ref={priceRef}>0</span>
                </div>
                <div className="tariff-text tariff-tooltip_wrapper">
                    <span>/</span>
                    <span data-section1-tariff-item1-text="">{duration}</span>
                    <div className="tariff-tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                            <rect width="16" height="16" fill="#3AAECF" rx="8" />
                            <path fill="#fff"
                                d="m9.58 11.137-.108.444c-.326.128-.585.225-.78.29-.194.07-.419.104-.676.104-.394 0-.702-.095-.922-.286a.944.944 0 0 1-.326-.735c0-.115.008-.232.025-.35.016-.122.043-.258.079-.41l.404-1.44c.037-.139.066-.269.09-.39.025-.125.039-.239.039-.34 0-.185-.038-.313-.114-.386-.076-.072-.22-.108-.434-.108-.105 0-.214.016-.326.049a4.664 4.664 0 0 0-.281.094l.109-.444c.266-.109.52-.201.764-.277.244-.079.474-.118.691-.118.392 0 .693.095.903.286.214.188.32.433.32.735 0 .063-.007.173-.024.33-.013.159-.04.304-.079.435l-.404 1.436a3.989 3.989 0 0 0-.09.395c-.026.148-.039.26-.039.335 0 .191.043.321.129.39.085.07.233.104.444.104.098 0 .21-.017.335-.05a2.02 2.02 0 0 0 .272-.093Zm.104-6.025c0 .25-.095.464-.286.641a.964.964 0 0 1-.68.262.981.981 0 0 1-.687-.262.845.845 0 0 1-.286-.641c0-.25.095-.464.286-.642a.971.971 0 0 1 .686-.266c.267 0 .494.089.681.266.19.178.286.392.286.642Z" />
                        </svg>
                        <div className="tariff-tooltip_content">
                            Бесплатный полный визовый сервис от нашего визового партнёра Czechpoint
                        </div>
                    </div>

                </div>
            </div>
            <div className="tariff_advantages_wrapper">
                {contents.map((content) => {
                    return(
                        <div key={content.text} className="tariff_advantages_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
                                <rect width="20" height="20" y=".585" fill="#F5F5F5" rx="10" />
                                <path stroke="#02191D" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="1.333" d="m7 10.585 2 2 4-4" /></svg>
                            <span className="tariff_advantages_title">{content.text}</span>
                        </div>
                    )
                })}
            </div>
            <a href="#section-8" className={`tariff-btn btn arrow-right ${index % 2 !== 0 ? "green" : ""}`}>
                <span data-section1-tariff-button="">Подробнее</span>
            </a>
        </div>
    )
}