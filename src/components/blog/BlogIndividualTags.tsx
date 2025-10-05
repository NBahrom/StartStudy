import styles from './BlogIndividualTags.module.css'
import {useHandleCategory} from "../../hook/useHandleCategory"
import { WPTermTag } from "../../types/wordpress";

export default function BlogIndividualTags({tags, className} : {tags: Array<WPTermTag>, className?: string}) {

    const handleCategory = useHandleCategory();
    
    return(
        <div className={`${styles.tagsBlock}  ${className}`}>
            {tags.map((tag) => (
                <span onClick={() => handleCategory(tag)} key={tag.id}>{tag.name}</span>      
            ))}
        </div>
    )
}