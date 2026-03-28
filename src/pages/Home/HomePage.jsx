import { Bubble } from "../../components/common/Bubble";
import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { HeroSection } from "../../layouts/sections/HeroSection";
import { InteractWithUsSection } from "../../layouts/sections/InteractWithUsSection";
import { LatestNewsSection } from "../../layouts/sections/LatestNewsSection";
import { OverviewSection } from "../../layouts/sections/OverviewSection";
import { SneekPeekSection } from "../../layouts/sections/SneekPeakSection";
import { UpcomingEventsSection } from "../../layouts/sections/UpcomingEventsSection";

export function HomePage({children}) {
    const sections = [
        { component: HeroSection, delay: 0 },
        { component: OverviewSection, delay: 1 },
        { component: LatestNewsSection, delay: 2 },
        { component: UpcomingEventsSection, delay: 3 },
        { component: SneekPeekSection, delay: 4 },
        { component: InteractWithUsSection, delay: 5 },
    ]

    return (
        <>
        <SeparationContainer className="vbox">
            {sections.map(({ component: Component, delay }) => (
                <div 
                    key={delay} 
                    className="page-item"
                    style={{ animationDelay: `${delay * 0.1}s` }}
                >
                    <Component />
                </div>
            ))}
            <div 
                className="page-item"
                style={{ animationDelay: `${sections.length * 0.1}s` }}
            >
                <Bubble />
            </div>
        </SeparationContainer>
        </>
    )
}

