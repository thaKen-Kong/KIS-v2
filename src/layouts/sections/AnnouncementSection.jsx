import { PageContainer, SeparationContainer, FeaturedGridSection } from "../../components/common/Container";
import { ScrollAnimationWrapper, ScrollSlideWrapper } from "../../components/common/ScrollAnimationWrapper";
import { Label } from "../../components/common/Text";
import { bg_1 } from "../../data/images";

const announcementItems = [
    {
        id: 1,
        title: "Enrollment Now Open",
        date: "March 30, 2026",
        content: "Registration for the upcoming school year is now open. Please visit the admissions office or our online portal to complete your enrollment.",
        image: bg_1,
        hasImage: true
    }
]

const renderAnnouncementItem = (item, index, isFeatured) => {
    if (item.hasImage) {
        return (
            <div>
                <div className="item-image">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="item-body">
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                    <p>{item.content}</p>
                    <a href="#">{isFeatured ? "Learn More →" : "Read More"}</a>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.content}</p>
            <a href="#">{isFeatured ? "Learn More →" : "Read More"}</a>
        </div>
    );
};

const getItemClass = (item) => {
    return item.hasImage ? "image-item-variant" : "";
};

export function AnnouncementSection() {
    return (
        <ScrollAnimationWrapper>
            <PageContainer className="vbox light-background vertical-padding">
                <SeparationContainer className="vbox">
                    <Label text="ANNOUNCEMENTS" classname="shadow gradient-45deg"/>
                    <ScrollSlideWrapper direction="right">
                    <FeaturedGridSection 
                        items={announcementItems} 
                        renderItem={renderAnnouncementItem}
                        getItemClass={getItemClass}
                    />
                    </ScrollSlideWrapper>
                </SeparationContainer>
            </PageContainer>
        </ScrollAnimationWrapper>
    )
}