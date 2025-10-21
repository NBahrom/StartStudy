import SectionWrapper from "../UI/SectionWrapper";
import styles from "./AboutUsShowCaseImages.module.css";

export default function AboutUsShowCaseImages() {
  const images = [
    {
      src: "images/showcase-image-1.png",
      alt: "men loking at screen and laughing",
    },
    {
      src: "images/showcase-image-2.png",
      alt: "woman learning from laptop and writing",
    },
    {
      src: "images/showcase-image-3.png",
      alt: "man looking at screen laptop and thinking",
    },
        {
      src: "images/showcase-image-1.png",
      alt: "men loking at screen and laughing",
    },
    {
      src: "images/showcase-image-2.png",
      alt: "woman learning from laptop and writing",
    },
    {
      src: "images/showcase-image-3.png",
      alt: "man looking at screen laptop and thinking",
    },
        {
      src: "images/showcase-image-1.png",
      alt: "men loking at screen and laughing",
    },
    {
      src: "images/showcase-image-2.png",
      alt: "woman learning from laptop and writing",
    },
    {
      src: "images/showcase-image-3.png",
      alt: "man looking at screen laptop and thinking",
    },
  ];

  return (
    <SectionWrapper noContainer>
        <div className={styles.images}>
        {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
        ))}
        </div>
    </SectionWrapper>
  );
}
