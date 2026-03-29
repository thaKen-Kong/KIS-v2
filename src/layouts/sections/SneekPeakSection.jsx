import { ItemContainer, PageContainer, SeparationContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";

export function SneekPeekSection() {
    return (
        <>
            <PageContainer className="vbox vertical-padding-extended fade-top fade-bottom light-background">
                <SeparationContainer className="vbox">
                    <Label classname="gradient-45deg shadow diminished lined-label" text="School at Glance" />
                    <ItemContainer className="frame shadow round">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.478008110153!2d120.82551207403552!3d14.107963188950036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9df05e2ad96b%3A0x3670ac889eae7301!2sKaytitinga%20Integrated%20School!5e0!3m2!1sen!2sph!4v1774786851462!5m2!1sen!2sph"  
                        style={{border : "none"}}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </ItemContainer>
                </SeparationContainer>
            </PageContainer>
        </>
    )
}