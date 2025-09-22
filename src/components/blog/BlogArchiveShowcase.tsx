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
import { useEffect } from 'react';
import LoadingContent from '../UI/LoadingContent';

export default function BlogArchiveShowcase() {
    const {isMobile} = useMediaScreen();
    const { current, categoryMap, loading } = useSelector((state: RootState) => state.language);
    const categoryId = categoryMap[current];

    const { data: posts, loading: loadingPost } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { _embed: true, categories: categoryMap[current], per_page: 3 },
        enabled: !loading && Boolean(categoryId)
    });

    useEffect(() => {
        fetch('https://blog.startstudy.cz/wp-json/wp/v2/posts')
            .then(data =>  data.json())
            .then(data => console.log(data))
    }, [])


    if (loadingPost) return <section className={styles.section}><LoadingContent /></section>;

    return(
        <section className={styles.section}>
            <div className="container-wide">
                {!isMobile ? (
                <div className={styles.showcaseBlock}>
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug}`} className={styles.post}>
                            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                <>
                                    <img
                                        src={post._embedded["wp:featuredmedia"][0].source_url}
                                        alt={post.title.rendered}
                                    />
                                    <div className={styles.mask}></div>
                                </>
                            )}
                            <BlogIndividualTags
                                className={styles.tags}
                                tags={
                                    post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.name) || []
                                } 
                            />
                            <h2>{post.title.rendered}</h2>
                        </Link>
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
                        {posts.map((post) => (
                            <SwiperSlide className={styles.slide}>
                                <Link to={`/blog/${post.slug}`} className={styles.post}>
                                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                        <>
                                            <img
                                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                                alt={post.title.rendered}
                                            />
                                            <div className={styles.mask}></div>
                                        </>
                                    )}
                                    <BlogIndividualTags
                                        className={styles.tags}
                                        tags={
                                            post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.name) || []
                                        } 
                                    />
                                    <h2>{post.title.rendered}</h2>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    )
}