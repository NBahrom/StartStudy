import styles from './BlogCategories.module.css'
import { WPTag } from "../../types/wordpress";
import { useFetch } from "../../util/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setSelectedTag } from "../../store/blogCategoriesSlice";
import LoadingContent from '../UI/LoadingContent';


export default function BlogCategories() {
    const dispatch = useDispatch();
    const { current, loading } = useSelector((state: RootState) => state.language);
    const selectedTag = useSelector((state: RootState) => state.blogCategories.selectedTag);

    const { data: tags, loading: loadingTags } = useFetch<WPTag[]>({
        endpoint: "tags",
        params: { per_page: 50 },
        enabled: !loading 
    });

    const filteredTags = tags.filter(tag => tag.slug.endsWith(`-${current}`));

    if (loadingTags) return <section className={styles.section}><LoadingContent /></section>;

    return(
        <div className={styles.categories}>
            <span
                className={!selectedTag ? styles.active : ""}
                onClick={() => dispatch(setSelectedTag(null))}
            >
                Все записи блога
            </span>
            {filteredTags.map(tag => (
                <span
                    key={tag.id}
                    className={selectedTag?.id === tag.id ? styles.active : ""}
                    onClick={() => dispatch(setSelectedTag(tag))}
                >
                    {tag.name}
                </span>
            ))}
        </div>
    )
}