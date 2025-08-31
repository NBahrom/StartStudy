import { useState, useEffect, useRef } from "react";

import "./Video.css"

export default function Video({imageSrc, videoSrc, className} : {imageSrc: string, videoSrc: string, className?: string}) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Reset play state when sources change
    useEffect(() => {
        setPlay(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [imageSrc, videoSrc]);

    // Auto play when play is set to true
    useEffect(() => {
        if (play && videoRef.current) {
            videoRef.current.play()
            .catch((err) => {
                console.warn("Autoplay failed:", err);
            });
        }
    }, [play]);

    
    return(
    <div className={"video-wrapper " + (className ?? "")}>
      {!play ? (
        <div
          className="video-mask"
          onClick={() => setPlay(true)}
          role="button"
        >
          <img className="video-poster" src={imageSrc} alt="poster" />
          <svg xmlns="http://www.w3.org/2000/svg" width="66" height="67" fill="none">
            <rect width="66" height="66" y=".96" fill="#fff" rx="33" />
            <path
              fill="#2F3846"
              d="M38 33.094a1 1 0 0 1 0 1.733l-6.75 3.897a1 1 0 0 1-1.5-.866v-7.795a1 1 0 0 1 1.5-.866L38 33.094Z"
            />
          </svg>
        </div>
      ) : (
        <video ref={videoRef} controls preload="auto">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
    </div>
    )
}