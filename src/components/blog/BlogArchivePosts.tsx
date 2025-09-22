import { useState, useMemo, useEffect } from "react";
import { WPPost, WPTag } from "../../types/wordpress"; 
import { Link } from "react-router-dom";
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



    useEffect(() => {
        setPage(1);
    }, [selectedTag, current]);

    const { data: posts = [], loading: loadingPosts, totalPages: totalPagesFromFetch } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { 
            _embed: true,
            categories: categoryId,
            tags: selectedTag?.id,
            per_page: 9,
            page
        },
        enabled: !loading && Boolean(categoryId)
    });

    useEffect(() => {
        if (totalPagesFromFetch) setTotalPages(totalPagesFromFetch);
    }, [totalPagesFromFetch, setTotalPages]);

    const filteredPosts = useMemo<WPPost[]>(() => {
        if (!posts) return [];
        return posts.filter((post) => {
            const tags = post._embedded?.["wp:term"]?.[1] || [];
            return tags.some((tag) => tag.slug.endsWith(`-${current}`));
        });
    }, [posts, current, selectedTag]);


    if (loadingPosts) return <section className={styles.section}><LoadingContent /></section>;


    return (
        <div>
            <div className={styles.posts}>
                {filteredPosts.map((post, index) => (
                    <>
                        {index === 2 && 
                            <div className={styles.advertisement}>
                                <h3>Самые интересные специальности года</h3>
                                <p>Где в Праге можно учиться недорого на английском? Об этом и не только в сегодняшней статье!</p>
                                <a href="#">
                                    Читать подробнее 
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18L14 14L10 10" stroke="#02191D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        }
                        <Link key={post.id} to={`/blog/${post.slug}`} className={styles.post}>
                            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                                <img
                                    src={post._embedded["wp:featuredmedia"][0].source_url}
                                    alt={post.title.rendered}
                                />
                            )}
                            <BlogIndividualTags
                                className={styles.tags}
                                tags={post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.name) || []}
                            />
                            <h3>{post.title.rendered}</h3>
                            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                        </Link>
                    </>
                ))}
            </div>

        </div>
    );
}
