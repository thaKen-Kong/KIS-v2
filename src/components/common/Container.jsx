import { useState, useEffect } from "react";
import { Label } from "./Text";

export function PageContainer({children, className=""}) {
    return (
        <>
            <section className={`page-container ${className}`.trim()}>
                {children}
            </section>       
        </>
    )
}

export function SeparationContainer({children, className=""}) {
    return (
        <>
            <div className={`separate ${className}`}>
                {children}
            </div>
        </>
    )
}

export function ItemContainer( {children, className=""}) {
    return (
        <>
            <div className={`item-container ${className}`}>
                {children}
            </div>
        </>
    )
}

export function TextContainer({children, className=""}){
    return (
        <>
            <div className={`text-container ${className}`}>
                {children}
            </div>
        </>
    )
}

export function TwoContainer({leftTitle, leftContent, rightTitle, rightContent, className=""}){
    return (
        <>
            <div className="two-container">
                <div className={`twin ${className}`}>
                    <Label text={leftTitle} classname="green shadow diminished lined-label"/>
                    {leftContent}
                </div>      
                <div className={`twin ${className}`}>
                    <Label text={rightTitle} classname="green shadow diminished lined-label"/>
                    {rightContent}
                </div>
            </div>
        </>
    )
}