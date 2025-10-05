import { useState } from "react"
import styles from "./BlogPostContent.module.css"
import BlogPostIcons from "./BlogPostIcons"
import {useHandleCategory} from "../../hook/useHandleCategory"
import { WPTermTag } from "../../types/wordpress";

export default function BlogPostContent({content, tags}: {content: string, tags: Array<WPTermTag>}) {
    const [copied, setCopied] = useState(false)

    const handleCopyLink = async () => {
        try {
             const decodedUrl = decodeURIComponent(window.location.href)
            await navigator.clipboard.writeText(decodedUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000) // hide after 2s
        } catch (err) {
            console.error("Failed to copy link:", err)
        }
    }

    const handleCategory = useHandleCategory();

    return(
        <div>
            <article dangerouslySetInnerHTML={{__html: content}} className={styles.content}>
            </article>

            <div className={styles.tags}>
                {tags.map(tag => (
                    <span onClick={() => handleCategory(tag)} key={tag.id}>{tag.name}</span>
                ))}
            </div>

            <div className={styles.share}>
                <span>Поделиться</span>
                <div className={styles.shareInner}>
                    <BlogPostIcons className={styles.icons} />
                    <div onClick={handleCopyLink} className={styles.copyLink}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2548_1759)">
                            <path d="M4.16699 12.4998C3.39042 12.4998 3.00214 12.4998 2.69585 12.373C2.28747 12.2038 1.96302 11.8794 1.79386 11.471C1.66699 11.1647 1.66699 10.7764 1.66699 9.99984V4.33317C1.66699 3.39975 1.66699 2.93304 1.84865 2.57652C2.00844 2.26292 2.2634 2.00795 2.57701 1.84816C2.93353 1.6665 3.40024 1.6665 4.33366 1.6665H10.0003C10.7769 1.6665 11.1652 1.6665 11.4715 1.79337C11.8798 1.96253 12.2043 2.28698 12.3735 2.69536C12.5003 3.00165 12.5003 3.38993 12.5003 4.1665M10.167 18.3332H15.667C16.6004 18.3332 17.0671 18.3332 17.4236 18.1515C17.7372 17.9917 17.9922 17.7368 18.152 17.4232C18.3337 17.0666 18.3337 16.5999 18.3337 15.6665V10.1665C18.3337 9.23308 18.3337 8.76637 18.152 8.40985C17.9922 8.09625 17.7372 7.84128 17.4236 7.68149C17.0671 7.49984 16.6004 7.49984 15.667 7.49984H10.167C9.23357 7.49984 8.76686 7.49984 8.41034 7.68149C8.09674 7.84128 7.84177 8.09625 7.68198 8.40985C7.50033 8.76637 7.50033 9.23308 7.50033 10.1665V15.6665C7.50033 16.5999 7.50033 17.0666 7.68198 17.4232C7.84177 17.7368 8.09674 17.9917 8.41034 18.1515C8.76686 18.3332 9.23357 18.3332 10.167 18.3332Z" stroke="#02191D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_2548_1759">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>{copied ? "Ссылка скопирована!" : "Скопировать ссылку"}</span>
                    </div>
                </div>
            </div>
        </div>

        // post._embedded?.["wp:term"]?.[1]?.map((tag) => tag.name)
    )
}