import { useEffect, useState } from "react";

export default function Progress({className}: {className?: string}) {
   const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(scrolled);
    };

    // Listen to scroll
    document.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call in case user starts scrolled down
    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
        <div className={"header_progress-wrapper " + className}>
            <div 
              className="header_progress"
              style={{width: `${progress}%`}}
            ></div>
        </div>
  );
}