import { Container, ImageContainer, ItemContainer, PageContainer, SeparationContainer } from "../../components/common/Container";
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";
import { Label, Line } from "../../components/common/Text";
import { bg_1,bg_2 } from "../../data/images";

const main_contents = [
    <Label text="Main BUILDING" classname="white shadow diminished"/>,
    <p className="white-label">KENKNE</p>
]

const extension_contents = [
    <Label text="EXTENSION BUILDING" classname="white shadow diminished"/>,
    <p className="white-label">KENKNE</p>
]

export function SneekPeekSection() {
    return (
        <>
        <ScrollAnimationWrapper>
            <PageContainer className="vbox vertical-padding light-background shadow-box">
                <SeparationContainer className="vbox">
                    <Label classname="green shadow lined-label" text="School at Glance" />
                    <Container>
                        <SeparationContainer className="vbox">
                        <ItemContainer className="three-dimension green-gradient-dull padded shadow-box" header={[<Label text="SCHOOL BUILDING" classname="diminished white shadow padded"/>, <Line className="white-line" />]}>
                            <Container className="">
                                <SeparationContainer className="vbox">
                                    <ImageContainer className="round-corner sm-h shadow-box" image={bg_1} content={main_contents}/>
                                    <ImageContainer className="round-corner sm-h shadow-box" image={bg_1} content={extension_contents}/>
                                </SeparationContainer>
                            </Container>
                        </ItemContainer>
                        <ItemContainer className="three-dimension padded green-gradient-dull frame" header={[<Label classname="diminished padded white shadow" text="SCHOOL LOCATION" />, <Line className="white-line" />]} >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.478008110153!2d120.82551207403552!3d14.107963188950036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9df05e2ad96b%3A0x3670ac889eae7301!2sKaytitinga%20Integrated%20School!5e0!3m2!1sen!2sph!4v1774786851462!5m2!1sen!2sph"  
                            style={{border : "none"}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </ItemContainer>
                        </SeparationContainer>
                    </Container>
                </SeparationContainer>
            </PageContainer>
        </ScrollAnimationWrapper>
        </>
    )
}