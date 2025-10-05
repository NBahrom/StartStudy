import { WPPost } from "../../types/wordpress";
import styles from "./BlogPostHero.module.css"
import { AuthorImage } from "../UI/AuthorImg";

export default function BlogPostHero({post}: {post: WPPost}) {

    return(
        <div className={styles.hero}>
            <div className="container-wide">
                <div className={styles.heroInner}>
                    <div>
                        <p className={styles.date}>{`${post.acf.date} • ${post.acf.reading_time}`}</p>

                        <h1 className={styles.title}>{post.title.rendered}</h1>

                        <p dangerouslySetInnerHTML={{__html :post.excerpt.rendered}} className={styles.description}></p>
                        
                        <div className={styles.author}>
                            {post.acf.author_img && 
                                <AuthorImage className={styles.authorImg} id={post.acf.author_img} />
                            }

                            <div className={styles.authorName}>
                                <p>{post.acf.author}</p>
                                <span>{post.acf.author_field}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.img} 
                            src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg"} 
                            alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "Featured image"} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}