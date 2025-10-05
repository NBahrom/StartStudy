
import styles from './BlogPopular.module.css'
import { WPPost } from '../../types/wordpress';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import svgArrowRight from '../../images/arrow-right.svg'
import { Link } from 'react-router-dom';
import { useFetch } from "../../util/useFetch";

export default function BlogPopular() {
    const {categories, current, categoryMap, loading} = useSelector((state: RootState) => state.language);
    const mostPopularCat = categories.find((c) => c.slug === "most-popular");
    const currentCategoryId = categoryMap[current]

    const { data: posts, loading: loadingPost } = useFetch<WPPost[]>({
        endpoint: "posts",
        params: { _embed: true, categories: mostPopularCat ? mostPopularCat.id : 9, per_page: 3 },
        enabled: !loading && Boolean(currentCategoryId)
    });

    const filtered = posts?.filter(
        (post: WPPost) => post.categories.includes(currentCategoryId as number)
    );


    // if (loadingPost) return <h1>Loading categories...</h1>;

     return(
        <div className={styles.popular}>
            <h2 className={styles.title}>Популярное</h2>

            {filtered?.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className={styles.popularPost}>
                    <span>{post.title.rendered}</span>
                    <img src={svgArrowRight} alt="arrow right" />
                </Link>
            ))}
        </div>
    )
}