import { useState, useEffect } from "react";
import { Label } from "./Text";
import { ScrollAnimationWrapper, ScrollSlideWrapper } from "./ScrollAnimationWrapper";

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

export function HorizontalScrollableContainer({items = [], className=""}) {
    return (
        <>
            <div className={`scrollable ${className}`.trim()}>
                {items.map((item, index) => (
                    <div className="scrollable-item" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </>
    )
}

export function FeaturedGridSection({items = [], renderItem, getItemClass, className = ""}) {
    if (!items || items.length === 0) {
        return null;
    }

    const featuredItem = items[0];
    const regularItems = items.slice(1);

    return (
        <div className={`featured-grid ${className}`.trim()}>
            <div className={`featured-grid__featured ${getItemClass ? getItemClass(featuredItem, 0, true) : ''}`.trim()}>
                {renderItem(featuredItem, 0, true)}
            </div>

            {regularItems.map((item, index) => (
                <div className={`featured-grid__item ${getItemClass ? getItemClass(item, index + 1, false) : ''}`.trim()} key={index + 1}>
                    {renderItem(item, index + 1, false)}
                </div>
            ))}
        </div>
    )
}

export function TimelineContainer({items = [], renderItem, className = ""}) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className={`timeline-container ${className}`.trim()}>
            {items.map((item, index) => (
                <ScrollSlideWrapper direction="left">
                <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        {renderItem(item, index)}
                    </div>
                </div>
                </ScrollSlideWrapper>
            ))}
        </div>
    )
}



export function ItemContainer({children,  className, header}) {
    return (
        <>
            <div className={`item-container ${className}`}>
                    {header}
                    <div className="item-container__content">
                        {children}
                    </div>
            </div>
        </>
    )
}