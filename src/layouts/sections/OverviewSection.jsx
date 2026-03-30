import { ThemedButton } from "../../components/common/Button";
import { ItemContainer, PageContainer, SeparationContainer, TextContainer, TwoContainer } from "../../components/common/Container";
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";
import { Label, Line } from "../../components/common/Text";

export function OverviewSection( {children} ) {
    return (
        <>
        <ScrollAnimationWrapper >
            <PageContainer className="vbox vertical-padding">
                <SeparationContainer className="vbox">
                    <Label text="OVERVIEW" classname="shadow lined-label gradient-45deg"/>
                    <ItemContainer className="rhombus-border frame vbox">
                        <Label text="FEATURED VIDEO" classname="diminished padded shadow white"/>
                        <Line className="white-line thicken"/>
                        <iframe  src="https://www.youtube.com/embed/SJTpYdrAVfM?si=KBRnoignqCPh63Z3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </ItemContainer>
                    <TwoContainer 

                    leftTitle="ABOUT US"
                    leftContent={[<p>Kaytitinga Integrated School provides a safe, supportive learning environment that builds strong foundations in academics and character.</p>, <ThemedButton text="LEARN MORE" className="stretched"/>]}
                    rightTitle="JOIN US"
                    rightContent={[<p>Join KIS for dedicated teachers, active student programs, and a campus community that helps learners grow with confidence.</p>, <ThemedButton text="JOIN US" className="theme stretched"/>]}
                    />
                </SeparationContainer>
            </PageContainer>
        </ScrollAnimationWrapper>
        </>
    )
}