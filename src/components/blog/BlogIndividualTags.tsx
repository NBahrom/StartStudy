import styles from './BlogIndividualTags.module.css'

export default function BlogIndividualTags({tags, className} : {tags: Array<string>, className?: string}) {
    return(
        <div className={`${styles.tagsBlock}  ${className}`}>
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>      
            ))}
        </div>
    )
}