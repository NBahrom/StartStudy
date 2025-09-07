import FormStudyEurope from "../components/FormStudyEurope";
import Layout from "../components/Layout";
import ReviewsCzech from "../components/ReviewsCzech";
import ReviewStudents from "../components/ReviewStudents";
import ReviewSupport from "../components/ReviewSupport";

export default function Testimonals() {
  return (
    <Layout>
      <ReviewStudents />
      <ReviewsCzech />
      <ReviewSupport />
      <FormStudyEurope />
    </Layout>
  );
}