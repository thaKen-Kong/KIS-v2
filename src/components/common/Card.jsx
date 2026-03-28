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
}export function MediaCard({variant = 'variant_one', imageSrc = '', imageAlt = '', children}){
    return (
        <>
            <div className={`card media ${variant}`}>
                <div className="card-media">
                    {imageSrc ? <img src={imageSrc} alt={imageAlt} /> : null}
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
}

