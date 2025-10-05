import BlogCategories from './BlogCategories'
import BlogPopular from './BlogPopular'
import styles from './BlogSidebar.module.css'
import { useMediaScreen } from '../../util/useMediaScreen';

export default function BlogSidebar({exception}: {exception?: string}) {
    const {isDesktop} = useMediaScreen();
    const isPopularVisible = exception != "popular"
    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebarInner}>
                <BlogCategories />
                {isPopularVisible && isDesktop && <BlogPopular />} 
            </div>
        </div>
    )
}