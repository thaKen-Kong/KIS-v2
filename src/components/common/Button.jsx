

export function ThemedButton( {text, className=""} ) {
    return (
        <>
            <button className={`btn ${className}`}>{text}</button>
        </>
    )
}
