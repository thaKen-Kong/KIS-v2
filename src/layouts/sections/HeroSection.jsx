import { PageContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";
import { bg_1 } from "../../data/images";

export function HeroSection() {
    return (
        <>
            <PageContainer className="hero-section darken box-shadow">
                    <Label text="KIS" classname="shadow enlarged animation gradient" />
                <img src={bg_1} alt="Background Image"/>
            </PageContainer>
        </>
    )

}
