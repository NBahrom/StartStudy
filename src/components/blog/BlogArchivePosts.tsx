import { useMemo, useEffect, useRef } from "react";
import { WPPost } from "../../types/wordpress"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogIndividualTags from './BlogIndividualTags'
import { useFetch } from "../../util/useFetch";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import LoadingContent from '../UI/LoadingContent';

import styles from './BlogArchivePosts.module.css'


export default function BlogArchivePosts({
  page,
  setPage,
  totalPages,
  setTotalPages,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { current, categoryMap, loading } = useSelector((state: RootState) => state.language);
    const selectedTag = useSelector((state: RootState) => state.blogCategories.selectedTag);
    const categoryId = categoryMap[current];
    const BIG_SIZE_CATEGORY_ID = process.env.REACT_APP_BIG_SIZE_CATEGORY_ID;

    const location = useLocation();
    const shouldScroll = location.state?.scrollAfterPosts;
    const navigate = useNavigate();
    const postsContainerRef = useRef<HTMLDivElement>(null);

    // Reset to first page when category or tag changes
    useEffect(() => {
        setPage(1);
    }, [selectedTag, current]);

    // Fetch posts from WordPress
    const { data: posts = [], loading: loadingPosts, totalPages: totalPagesFromFetch } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { 
            _embed: true,
            categories: categoryId,
            categories_exclude: BIG_SIZE_CATEGORY_ID,
            tags: selectedTag?.id,
            per_page: 9,
            page
        },
        enabled: !loading && Boolean(categoryId)
    });

    // Scroll to top of posts when page changes
    useEffect(() => {
        if(!loadingPosts && shouldScroll && postsContainerRef.current){
            const top = postsContainerRef.current.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({ top, behavior: "smooth" });
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [loadingPosts,shouldScroll])

    // Update total pages when fetched
    useEffect(() => {
        if (totalPagesFromFetch) setTotalPages(totalPagesFromFetch);
    }, [totalPagesFromFetch, setTotalPages]);

    // Filter posts by selected tag
    // const filteredPosts = useMemo<WPPost[]>(() => {
    //     if (!posts) return [];

    //     let filtered = posts.filter((post) => {
    //         const tags = post._embedded?.["wp:term"]?.[1] || [];
    //         return tags.some((tag) => tag.slug.endsWith(`-${current}`));
    //     });

    //     return filtered;
    // }, [posts, current, selectedTag]);


    if (loadingPosts) return <section className={styles.section}><LoadingContent /></section>;


    return (
        <div ref={postsContainerRef}>
            <div className={styles.posts}>
                
                {posts && posts.map((post, index) => (
                    <>
                        {index === 2 && 
                            <div className={styles.advertisement}>
                                <h3>Самые интересные специальности года</h3>
                                <p>Где в Праге можно учиться недорого на английском? Об этом и не только в сегодняшней статье!</p>
                                <a className="btn arrow-right" href="#">
                                    Читать подробнее 
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18L14 14L10 10" stroke="#02191D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        }
                        <div key={post.id}  className={styles.post}>
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
                        </div>
                    </>
                ))}
            </div>

        </div>
    );
}
