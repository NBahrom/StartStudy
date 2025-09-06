import Layout from "../components/Layout";
import ReviewsCzech from "../components/ReviewsCzech";
import ReviewStudents from "../components/ReviewStudents";

export default function Testimonals() {
  return (
    <Layout>
      <ReviewStudents />
      <ReviewsCzech />
    </Layout>
  );
}