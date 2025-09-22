import BlogCategories from './BlogCategories'
import BlogPopular from './BlogPopular'
import styles from './BlogSidebar.module.css'
import { useMediaScreen } from '../../util/useMediaScreen';

export default function BlogSidebar() {
    const {isDesktop} = useMediaScreen();
    return(
        <div className={styles.sidebar}>
            <BlogCategories />
            {isDesktop && <BlogPopular />} 
        </div>
    )
}