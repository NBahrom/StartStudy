import Layout from "../components/Layout";
import { useFetch } from "../util/useFetch";
import { useParams } from "react-router-dom";
import LoadingContent from "../components/UI/LoadingContent";

import { WPPost } from "../types/wordpress"; 
import styles from "./BlogPost.module.css"
import BlogPostHero from "../components/blog/BlogPostHero";
import BlogPostMain from "../components/blog/BlogPostMain";
import BlogPostOtherPosts from "../components/blog/BlogPostOtherPosts";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    
    const { data: posts = [], loading: loadingPost } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { _embed: true, slug },
        enabled: Boolean(slug),
    });

    const post = posts?.[0];

    if (loadingPost) {
        return (
        <Layout>
            <div className={styles.loading}>
                <LoadingContent className={styles.spinner} />
            </div>
        </Layout>
        );
    }

      if (!loadingPost && slug && Array.isArray(posts) && posts.length === 0) {
        return (
        <Layout>
            <div className={styles.notFound}>
                <h2>Post not found</h2>
            </div>
        </Layout>
        );
    }

    return(
        <Layout> 
            {post && 
                <>
                    <BlogPostHero post={post} />
                    <BlogPostMain tags={post._embedded?.["wp:term"]?.[1]} content={post.content.rendered} />
                    <BlogPostOtherPosts />
                </>
            }
        </Layout>
    )
}