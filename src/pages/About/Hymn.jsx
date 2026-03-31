import { Container, ItemContainer, PageContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";
import { Label, Line, TextComponent } from "../../components/common/Text";



export function HymnPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Hymn" />
      </div>
      <PageContainer className="vbox vertical-padding separate">
        <ItemContainer className="green-gradient-dull three-dimension shadow-box frame padded" header={[<Label classname="white shadow diminished padded lined-label" text="KAYTITINGA HYMN"/>, <Line className="white-line" />]}>
              <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vsxZfvD9Qyw?si=qgpNyMHgT3lXMzOl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
        </ItemContainer>
        <ItemContainer className="white-background shadow-box frame padded" header={[<Label text="HYMN LYRICS" classname="green diminished lined-label padded"/>]}>
            <TextComponent text="ken"/>
        </ItemContainer>
      </PageContainer>
    </>
  )
}