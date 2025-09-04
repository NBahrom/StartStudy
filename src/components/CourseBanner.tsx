import BannerImg from "../images/banner-img.webp";
import styles from "./CourseBanner.module.css";

export default function CourseBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerWrapper}>
        <img className={styles.bannerImg} src={BannerImg} alt="Banner" />
      </div>
    </section>
  );
}
