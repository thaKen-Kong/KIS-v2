import { ItemContainer, PageContainer, SeparationContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";
import { Label, Line } from "../../components/common/Text";

export function MissionAndVisionPages() {
  return (
    <>
    <SeparationContainer className="vbox">
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Mission and Vision" />
      </div>
      <PageContainer className="vbox shadow-box vertical-padding separate">
        <ItemContainer className="round-corner md-h green-gradient-dull three-dimension padded" header={[<Label text="MISSION" classname="padded white shadow"/>,<Line className="white-line" />]}>
          <p className="white-label">We are committed to protecting every Filipino's right to quality and inclusive basic education.</p>
          <p className="white-label">We make this possible by ensuring:</p>
          <ul className="white-label">
            <li>Students learn in safe, supportive, and motivating environments.</li>
            <li>Teachers guide, inspire, and nurture every learner.</li>
            <li>School leaders and staff create systems that help learning thrive.</li>
            <li>Families and communities work hand-in-hand in raising lifelong learners.</li>
          </ul>
        </ItemContainer>
        <ItemContainer className="round-corner sm-h green-gradient-dull three-dimension padded" header={[<Label text="VISION" classname="padded white shadow"/>,<Line className="white-line" />]}>
          <p className="white-label">We envision Filipinos who love their country, believe in their abilities, and use their talents to help build a better nation.</p>
          <p className="white-label">We are a learner-centered institution that keeps improving to serve every Filipino better.</p>

        </ItemContainer>
      </PageContainer>
      </SeparationContainer>
    </>
  )
}