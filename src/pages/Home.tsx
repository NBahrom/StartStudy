import AboutUs from "../components/About-us";
import AboutCzech from "../components/AboutCzech";
import Banner from "../components/Banner";
import Hostels from "../components/Hostels";
import Layout from "../components/Layout";
import OptionsOfStudy from "../components/OptionsOfStudy";
import Programms from "../components/programs/Programs";
import Reviews from "../components/Reviews";
import StudentSupport from "../components/StudentSupport";
import Teachers from "../components/Teachers";
import Universities from "../components/Universities";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FAQ from "../components/FAQ";
import ArticlesSection from "../components/ArticlesSection";

export default function Index() {
  return (
    <>
      <Layout>
        <main className="main">
          <Banner />
          <AboutUs />
          <OptionsOfStudy />
          <StudentSupport />
          <AboutCzech />
          <Programms />
          <Universities />
          <Teachers />
          <Hostels />
          <Reviews />
          <FAQ />
          <ArticlesSection />
        </main>
      </Layout>      
    </>
  );
}