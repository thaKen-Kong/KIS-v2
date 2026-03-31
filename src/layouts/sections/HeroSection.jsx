import { PageContainer } from "../../components/common/Container";
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";
import { Label } from "../../components/common/Text";
import { bg_1 } from "../../data/images";

export function HeroSection() {
    return (
        <>
        <ScrollAnimationWrapper>
            <PageContainer className="hero-section darken box-shadow">
                    <Label text="KIS" classname="shadow enlarged gradient thicken" />
                <img src={bg_1} alt="Background Image"/>
            </PageContainer>
        </ScrollAnimationWrapper>
        </>
    )

}
