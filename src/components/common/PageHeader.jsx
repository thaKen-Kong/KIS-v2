import { Label } from "./Text";
import { bg_2 } from "../../data/images";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export function PageHeaderUi({image , text, className=''}) {
    return (
        <>
        <ScrollAnimationWrapper>
            <div className={`page-header-ui ${className}`}>
                <img src={bg_2} alt={text} />
                <Label text={text} classname="gradient-45deg shadow thicken" />
            </div>
        </ScrollAnimationWrapper>
        </>
    )
}