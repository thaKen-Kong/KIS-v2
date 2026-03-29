import { ThemedButton } from "../../components/common/Button";
import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";
import { Label } from "../../components/common/Text";

export function InteractWithUsSection() {
    return (
        <>
        <ScrollAnimationWrapper>
            <PageContainer className="vbox vertical-padding">
                <SeparationContainer className="vbox">
                    <Label text="INTERACT WITH US" classname="lined-label green shadow diminished"/>
                    <p className="grey-label">Have a question or suggestion? Send us a quick message.</p>

                    <form className="contact-form">
                        <div className="form-field">
                            <label htmlFor="contact-name">Full Name</label>
                            <input id="contact-name" type="text" placeholder="Your name" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-email">Email</label>
                            <input id="contact-email" type="email" placeholder="you@example.com" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-subject">Subject</label>
                            <input id="contact-subject" type="text" placeholder="How can we help?" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea id="contact-message" rows="4" placeholder="Write your message..."></textarea>
                        </div>

                        <ThemedButton text="SEND MESSAGE" className="theme stretched"/>
                    </form>
                </SeparationContainer>
            </PageContainer>
        </ScrollAnimationWrapper>
        </>
    )
}
