import styles from "./BlogArchivePagination.module.css";
import { HashLink as Link } from 'react-router-hash-link';


export type PageItem = number | "...";
export default function BlogArchivePagination({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {

  function getPaginationNumbers(page: number, totalPages: number): PageItem[] {
    // clamp inputs
    page = Math.max(1, Math.min(page, Math.max(1, totalPages)));

    // Small count: show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: PageItem[] = [];

    // 1) If near the start, show window starting at `page`
    if (page <= 3) {
      const start = page;
      const end = Math.min(page + 2, totalPages);
      for (let i = start; i <= end; i++) pages.push(i);

      pages.push("...");
      pages.push(totalPages - 2, totalPages - 1, totalPages);
      return pages;
    }

    // 2) If near the end (show expanded tail)
    if (page >= totalPages - 3) {
      pages.push("...");
      // show last 6 pages (or fewer if totalPages smaller)
      const start = Math.max(1, totalPages - 5);
      for (let i = start; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // 3) Middle pages: show 3 pages with current at the right side of the window,
    //    then dots and last 3 pages
    const middleStart = Math.max(2, page - 2);
    const middleEnd = Math.min(totalPages - 3, page); // ensure gap before last 3
    for (let i = middleStart; i <= middleEnd; i++) pages.push(i);

    pages.push("...");
    pages.push(totalPages - 2, totalPages - 1, totalPages);
    return pages;
  }

  if (totalPages <= 1) return null;

  const items = getPaginationNumbers(page, totalPages);

  return(
    <nav className={styles.pagination}>
      <Link to="#posts-top"
        onClick={() => setPage(Math.max(1, page - 1))}
        className={`${styles.prev} ${page === 1 ? "disabled" : ""}`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.15078 10H17" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.45604 15.3037L2.15157 9.99925L7.45604 4.69628" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      {items.map((it, idx) =>
        it === "..." ? (
          <span key={`dots-${idx}`} className={`${styles.page} dots `}>
            …
          </span>
        ) : (
          <Link to="#posts-top"
            key={it}
            className={`${styles.page} ${it === page ? "active" : ""}`}
            onClick={() => setPage(Number(it))}
            aria-current={it === page ? "page" : undefined}
          >
            {it}
          </Link>
        )
      )}

      <Link to="#posts-top"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        className={`${styles.next} ${page === totalPages ? "disabled" : ""}`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8492 10L3 10" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.544 4.69628L17.8484 10.0007L12.544 15.3037" stroke="#02191D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </nav>
  );
}
