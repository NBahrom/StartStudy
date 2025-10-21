import styles from "./Hero.module.css";
import BannerImg from "../../images/About-us-hero.jpg";
import SectionWrapper from "../UI/SectionWrapper";
import SectionTitle from "../UI/SectionTitle";

export default function Hero() {
    return(
        <SectionWrapper isFirstSection={true}>
            <div className={styles.hero}>
                <SectionTitle tag="h1" className={styles.heroTitle}>ТВОЙ путь к успешному обучению <br /> <span>за рубежом</span></SectionTitle>
                <img className={styles.img} src={BannerImg} alt="about us banner image" />
            </div>
        </SectionWrapper>
    )
}