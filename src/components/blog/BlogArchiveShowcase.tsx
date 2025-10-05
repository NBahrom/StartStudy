import styles from './BlogArchiveShowcase.module.css'
import BlogIndividualTags from './BlogIndividualTags'
import { WPPost } from "../../types/wordpress"; 
import { Link } from "react-router-dom";
import { useMediaScreen } from "../../util/useMediaScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useFetch } from "../../util/useFetch";
import LoadingContent from '../UI/LoadingContent';

export default function BlogArchiveShowcase() {
    const {isMobile} = useMediaScreen();
    const { current, categoryMap, loading } = useSelector((state: RootState) => state.language);
    const languageCategoryId = categoryMap[current];

    const BIG_SIZE_CATEGORY_ID = process.env.REACT_APP_BIG_SIZE_CATEGORY_ID;

    const { data: posts, loading: loadingPost } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { 
            _embed: true, 
            categories: `${languageCategoryId},${BIG_SIZE_CATEGORY_ID}`,
            cat_relation: "AND",   // activates PHP filter
            per_page: 3
        },
        enabled: !loading && Boolean(languageCategoryId)
    });


    if (loadingPost) return <section className={styles.section}><LoadingContent /></section>;

    return(
        <section className={styles.section}>
            <div className="container-wide">
                {!isMobile ? (
                <div className={styles.showcaseBlock}>
                    {posts?.map((post) => (
                        <div key={post.id}  className={styles.post}>
                            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                <Link to={`/blog/${post.slug}`}>
                                    <img
                                        src={post._embedded["wp:featuredmedia"][0].source_url}
                                        alt={post.title.rendered}
                                    />
                                    <div className={styles.mask}></div>
                                </Link>
                            )}
                            <BlogIndividualTags
                                className={styles.tags}
                                tags={
                                    post._embedded?.["wp:term"]?.[1] || []
                                } 
                            />
                            <Link to={`/blog/${post.slug}`}>
                                <h2>{post.title.rendered}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
                ): (
                    <Swiper
                        modules={[Autoplay]}
                        speed={400}
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{ delay: 4000 }}
                        className={styles.slider}
                    >
                        {posts?.map((post) => (
                            <SwiperSlide key={post.id} className={styles.slide}>
                                <div className={styles.post}>
                                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                        <Link to={`/blog/${post.slug}`}>
                                            <img
                                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                                alt={post.title.rendered}
                                            />
                                            <div className={styles.mask}></div>
                                        </Link>
                                    )}
                                    <BlogIndividualTags
                                        className={styles.tags}
                                        tags={
                                            post._embedded?.["wp:term"]?.[1] || []
                                        } 
                                    />
                                    <Link to={`/blog/${post.slug}`}>
                                        <h2>{post.title.rendered}</h2>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    )
}