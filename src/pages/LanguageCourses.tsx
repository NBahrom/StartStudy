import AboutCzechUniversity from "../components/AboutCzechUniversity";
import CourseBanner from "../components/CourseBanner";
import CourseContent from "../components/CourseContent";
import CourseFor from "../components/CourseFor";
import CourseSteps from "../components/CourseSteps";
import FAQ from "../components/FAQ";
import FormStudyEurope from "../components/FormStudyEurope";
import Layout from "../components/Layout";

export default function LanguageCourses() {
    return (
        <Layout>
            <CourseBanner />
            <CourseContent />
            <CourseFor />
            <CourseSteps />
            <AboutCzechUniversity />
            <FAQ />
            <FormStudyEurope />
        </Layout>
    );
}
