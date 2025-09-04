import AboutUs from "../components/About-us";
import AboutCzech from "../components/AboutCzech";
import Hero from "../components/Hero";
import Hostels from "../components/Hostels";
import Layout from "../components/Layout";
import OptionsOfStudy from "../components/OptionsOfStudy";
import Programms from "../components/programs/Programs";
import Reviews from "../components/Reviews";
import StudentSupport from "../components/StudentSupport";
import Teachers from "../components/Teachers";
import Universities from "../components/Universities";

import FAQ from "../components/FAQ";
import ArticlesSection from "../components/ArticlesSection";

export default function Index() {
  return (
    <>
      <Layout>
          <Hero />
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
      </Layout>      
    </>
  );
}