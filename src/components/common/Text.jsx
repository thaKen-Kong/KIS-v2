import { useState } from "react";

export function Label({text, subtitle, classname = ''}) {
    return (
        <>
            <h2 className={`label ${classname}`.trim()}>
                {text}
            </h2>
            <p>{subtitle}</p>
        </>
    )
}

export function SubtitleLabel({text, className=""}){
    return (
        <>
            <p className={`subtitle-label ${className}`}>{text}</p>
        </>
    )
}

export function Line( {className =""}) {
    return (
        <>
            <span className={`lined ${className}`}></span>
        </>
    )
}