import { ThemedButton } from "../../components/common/Button";
import { ItemContainer, PageContainer, SeparationContainer, TextContainer, TwoContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";

export function OverviewSection( {children} ) {
    return (
        <>
            <PageContainer className="vbox vertical-padding light-background">
                <SeparationContainer className="vbox">
                    <Label text="OVERVIEW" classname="lined-label green shadow"/>
                    <TextContainer className="borderized left-and-right-border rounded">
                        <p>kenkentorres</p>
                    </TextContainer>
                    <ItemContainer className="round video ">
                        <iframe  src="https://www.youtube.com/embed/SJTpYdrAVfM?si=KBRnoignqCPh63Z3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
                    </ItemContainer>
                    <TwoContainer 


                    leftTitle="ABOUT US"
                    leftContent={[<p>Kaytitinga Integrated School provides a safe, supportive learning environment that builds strong foundations in academics and character.</p>, <ThemedButton text="LEARN MORE" className="stretched"/>]}
                    rightTitle="JOIN US"
                    rightContent={[<p>Join KIS for dedicated teachers, active student programs, and a campus community that helps learners grow with confidence.</p>, <ThemedButton text="JOIN US" className="theme stretched"/>]}
                    />
                </SeparationContainer>
            </PageContainer>
        </>
    )
}