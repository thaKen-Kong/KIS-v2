import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { HeroSection } from "../../layouts/sections/HeroSection";
import { LatestNewsSection } from "../../layouts/sections/LatestNewsSection";
import { OverviewSection } from "../../layouts/sections/OverviewSection";

export function HomePage({children}) {
    return (
        <>
        <SeparationContainer className="vbox">
            <HeroSection />
            <OverviewSection />
            <LatestNewsSection />
        </SeparationContainer>
        </>
    )
}