import { useMediaScreen } from "../../util/useMediaScreen";
import { useRef } from "react";

type SpoilerProps = {
  title: string;
  text: string;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  className?: string,
  type? : string
};

export default function Spoiler({
  title,
  text,
  index,
  activeIndex,
  setActiveIndex,
  className,
  type = "default"
  }: SpoilerProps) {
    const {isMobile} = useMediaScreen();
    const contentRef = useRef<HTMLDivElement | null>(null);

    const isOpen = isMobile
    ? activeIndex === index // mobile: allow multiple
    : activeIndex === index; // desktop: only one

    function toggleSpoiler() {
        if (isMobile) {
        // toggle individually
            setActiveIndex(isOpen ? null : index);
        } else {
        // only one open
            setActiveIndex(isOpen ? null : index);
        }
    }



    return(
        <div className={`spoiler_item ${className} ${isOpen ? "active" : ""}`}>
            <div onClick={toggleSpoiler} className="spoiler_head">
                {type == "numbered" && 
                    <div className="spoiler_number">{index + 1}.</div>
                }
                <div data-section1-spoiler1-title="" className="spoiler_title">{title}</div>
                {type == "numbered" ? 
                    <div className="spoiler_plus_wrapper"><div className="spoiler_plus"><span className="spoiler_plus_line"></span></div></div>
                    :
                    <div className="spoiler_plus"><span className="spoiler_plus_line"></span></div>
                }
            </div>
            <div 
                className="spoiler_body section-text-2"
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px", 
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                }}>
                <div data-section1-spoiler1-text="" className="spoiler_text">
                    {text}
                </div>
            </div>
        </div>
    )
}