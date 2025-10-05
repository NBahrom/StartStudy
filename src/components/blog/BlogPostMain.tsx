import BlogPostContent from "./BlogPostContent"
import styles from "./BlogPostMain.module.css"
import BlogSidebar from "./BlogSidebar"
import { WPTermTag } from "../../types/wordpress";

export default function BlogPostMain({content, tags}: {content: string, tags?: Array<WPTermTag>}) {
    return(
        <section className={styles.section}>
            <div className="container-wide">
                <div className={styles.innerBlock}>
                    <BlogSidebar exception="popular" />
                    <BlogPostContent tags={tags || []}  content={content} />
                </div>
            </div>
        </section>
    )
}