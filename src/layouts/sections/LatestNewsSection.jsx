import { NewsCard } from "../../components/common/Card";
import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";

export function LatestNewsSection() {
    return (
        <>
            <PageContainer className="green vbox vertical-padding">
                <Label text="NEWEST NEWS" classname="white shadow"/>
                <SeparationContainer className="vbox">
                    <NewsCard variant="card borderized black-opacity"/>
                </SeparationContainer>
            </PageContainer>
        </>
    )
}