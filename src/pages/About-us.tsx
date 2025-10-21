import AboutProgram from "../components/about-us/AboutProgram";
import AboutUsMissions from "../components/about-us/AboutUsMissions";
import AboutUsReview from "../components/about-us/AboutUsReview";
import AboutUsShowCaseImages from "../components/about-us/AboutUsShowCaseImages";
import Branches from "../components/about-us/Branches";
import Hero from "../components/about-us/Hero";
import History from "../components/about-us/History";
import Overview from "../components/about-us/Overview";
import Partners from "../components/about-us/Partners";
import Projects from "../components/about-us/Projects";
import Staff from "../components/about-us/Staff";
import Support from "../components/about-us/Support";
import Layout from "../components/Layout";

export default function AboutUs() {
  return (
    <Layout>
        <Hero />
        <AboutProgram />
        <Projects />
        <Overview />
        <Branches />
        <AboutUsMissions />
        <Partners />
        <AboutUsShowCaseImages />
        <History />
        <Support />
        <Staff />
        <AboutUsReview />
    </Layout>
  );
}