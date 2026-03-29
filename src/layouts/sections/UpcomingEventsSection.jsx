import { HorizontalScrollableContainer, PageContainer, SeparationContainer } from "../../components/common/Container";
import { MediaCard } from "../../components/common/Card";
import { Label, Line } from "../../components/common/Text";
import { ThemedButton } from "../../components/common/Button";

const upcomingEvents = [
    {image: "/images/event-1.jpg", imageAlt: "Orientation day", title: "Freshmen Orientation", content: "Meet your advisers and learn campus services."},
    {image: "/images/event-2.jpg", imageAlt: "Tech talk", title: "Tech Talk: AI in Schools", content: "Guest speakers share real classroom use cases."},
    {image: "/images/event-3.jpg", imageAlt: "Arts week", title: "Arts & Culture Week", content: "Student exhibits, performances, and workshops."},
];

export function UpcomingEventsSection() {
    return (
        <>
            <PageContainer className="vertical-padding vbox">
                
                <SeparationContainer className="vbox">
                <Line className="green-line "/>
                <Label text="UPCOMING EVENTS" classname="green shadow"/>
                <p className="grey-label">Get spoiled about the upcoming events in our school</p>
                <HorizontalScrollableContainer
                    items={upcomingEvents.map((event, index) => (
                        <MediaCard
                            key={`${event.title}-${index}`}
                            imageSrc={event.image}
                            imageAlt={event.imageAlt}
                            variant="variant_one compact"
                        >
                            <Label text={event.title} classname="green shadow diminished"/>
                            <p>{event.content}</p>
                            <ThemedButton className="outline btn" text="Read More"/>
                        </MediaCard>
                    ))}
                />
                <ThemedButton className="btn theme" text="View all Events"/>
                <Line className="green-line "/>
                </SeparationContainer>
                
            </PageContainer>
        </>
    )
}
