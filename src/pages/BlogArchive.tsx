
import BlogArchiveMain from "../components/blog/BlogArchiveMain";
import BlogArchiveShowcase from "../components/blog/BlogArchiveShowcase";
import BlogArchiveTitle from "../components/blog/BlogArchiveTitle";
import FormStudyEurope from "../components/FormStudyEurope";
import Layout from "../components/Layout";

export default function BlogArchive() {


    return(
        <Layout>
            <BlogArchiveTitle />
            <BlogArchiveShowcase />
            <BlogArchiveMain />
            <FormStudyEurope />
        </Layout>
    )
}