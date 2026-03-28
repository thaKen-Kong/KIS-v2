import { ItemContainer, PageContainer, SeparationContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";

export function SneekPeekSection() {
    return (
        <>
            <PageContainer className="vbox vertical-padding light-background">
                <SeparationContainer className="vbox">
                    <Label classname="green shadow diminished lined-label" text="School at Glance" />
                    <ItemContainer className="frame shadow round">

                    </ItemContainer>
                </SeparationContainer>
            </PageContainer>
        </>
    )
}