
import styles from './BlogPostOtherPosts.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useFetch } from "../../util/useFetch";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { WPPost } from "../../types/wordpress"; 
import LoadingContent from '../UI/LoadingContent';
import BlogIndividualTags from './BlogIndividualTags'

export default function BlogPostOtherPosts() {
    const { current, categoryMap, loading } = useSelector((state: RootState) => state.language);
    const categoryId = categoryMap[current];

    const { data: posts = [], loading: loadingPosts } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { 
            _embed: true,
            categories: categoryId,
            per_page: 20
        },
        enabled: !loading && Boolean(categoryId)
    });

    if (loadingPosts) return <section className={styles.section}><LoadingContent /></section>;

    return(
        <section className={styles.section}>
            <div className="container-wide">
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHead}>
                        <h2>Другие статьи блога</h2>
                        <div className={styles.navigation}>
                            <svg className={`${styles.prev} other_posts_slider_prev`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.15078 10H17" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.45604 15.3037L2.15157 9.99925L7.45604 4.69628" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <svg className={`${styles.next} other_posts_slider_next`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8492 10L3 10" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.544 4.69628L17.8484 10.0007L12.544 15.3037" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        speed={400}
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '.other_posts_slider_next',
                            prevEl: '.other_posts_slider_prev',
                        }}
                        autoplay={{ delay: 4000 }}
                        className={styles.slider}
                        breakpoints={{
                            320: {
                                spaceBetween: 35,
                                slidesPerView: 1,
                            },

                            768: {
                                spaceBetween: 35,
                                slidesPerView: 2
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 3
                            }
                        }}
                    >
                        {posts && posts.map((post) => (
                            <SwiperSlide key={post.id}  className={styles.post}>
                                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                    <Link to={`/blog/${post.slug}`}>
                                        <img
                                            src={post._embedded["wp:featuredmedia"][0].source_url}
                                            alt={post.title.rendered}
                                        />
                                    </Link>
                                )}
                                <BlogIndividualTags
                                    className={styles.tags}
                                    tags={post._embedded?.["wp:term"]?.[1] || []}
                                />
                                <Link to={`/blog/${post.slug}`}>
                                    <h3>{post.title.rendered}</h3>
                                </Link>
                                
                                <Link to={`/blog/${post.slug}`}> 
                                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                </Link>
                            </SwiperSlide> 
                        ))}
                            
                    </Swiper>

                </div>    
            </div>
        </section>
    )
}