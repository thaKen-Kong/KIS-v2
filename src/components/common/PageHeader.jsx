import { Label } from "./Text";
import { bg_2 } from "../../data/images";

export function PageHeaderUi({image , text, className=''}) {
    return (
        <>
            <div className={`page-header-ui ${className}`}>
                <img src={bg_2} alt={text} />
                <Label text={text} classname="gradient shadow" />
            </div>
        </>
    )
}