export function VariantCard ({children, variant = ""}) {
    return (
        <>
            <div className={`card ${variant}`}>

                {children}

            </div>
        </>
    )
}


export function NewsCard({variant = ''}){
    return (
        <>
            <div className={`news-card ${variant}`}>


            </div>
        </>
    )
}