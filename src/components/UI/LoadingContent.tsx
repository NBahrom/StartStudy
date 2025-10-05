import LodaingSpinner from "./LoadingSpinner";

export default function LoadingContent({className} : {className?: string}) {
    return(
        <div className={className} style={{display: 'flex', justifyContent: 'center'}}>
            <LodaingSpinner />
        </div>
    )
}