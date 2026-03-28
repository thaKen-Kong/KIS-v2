import { ThemedButton } from "../../components/common/Button";
import { MediaCard } from "../../components/common/Card";
import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { Label } from "../../components/common/Text";

const newsList = [
    {image: "/images/news-1.jpg", imageAlt: "Students at KIS campus", title: "Campus Update", content: "Enrollment for the new term is now open. Check schedules and requirements."},
    {image: "/images/news-2.jpg", imageAlt: "Library reading area", title: "Library Hours Extended", content: "The library will now stay open until 9 PM on weekdays to support evening study."},
    {image: "/images/news-3.jpg", imageAlt: "Sports fest highlights", title: "Sports Fest Highlights", content: "Congratulations to all teams for an exciting week of games and community spirit."}
]


export function LatestNewsSection() {
    return (
        <>
            <PageContainer className="green vbox vertical-padding shadow-box">
                
                <SeparationContainer className="vbox">
                    <Label text="NEWEST NEWS" classname="white shadow"/>
                    <p className="white-label">Stay updated with the latest campus news.</p>
                    {newsList.slice(0, 3).map((news, index) => (
                        <MediaCard
                            key={`${news.title}-${index}`}
                            imageSrc={news.image}
                            imageAlt={news.imageAlt}
                            variant="variant_two elevated"
                        >
                            <Label text={news.title} classname="white shadow"/>
                            <p>{news.content}</p>
                            <button className="btn stretched outline white">Read More</button>
                        </MediaCard>
                    ))}
                    <ThemedButton className="btn white outline stretched" text="SHOW MORE NEWS"/>
                </SeparationContainer>
                
            </PageContainer>
        </>
    )
}
