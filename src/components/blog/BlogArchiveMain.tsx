
import { useState } from "react";
import styles from './BlogArchiveMain.module.css'
import BlogPopular from './BlogPopular'
import BlogSidebar from './BlogSidebar'
import { useMediaScreen } from '../../util/useMediaScreen';
import BlogArchivePosts from './BlogArchivePosts';
import BlogArchivePagination from "./BlogArchivePagination";

export default function BlogArchiveMain() {
    const {isDesktop} =useMediaScreen()
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    return(
        <section id="posts-top" className={styles.section}>
            <div className="container-wide">
                <div className={styles.innerBlock}>
                    <BlogSidebar />

                    <div  className={styles.posts}>
                        <BlogArchivePosts 
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                            setTotalPages={setTotalPages} 
                        />
                    </div>
                </div>

                {totalPages > 1 && (
                    <BlogArchivePagination page={page} totalPages={totalPages} setPage={setPage} />
                )}

                {!isDesktop && <div className={styles.popular}>
                    <BlogPopular />
                </div>}
            </div>
        </section>
    )
}