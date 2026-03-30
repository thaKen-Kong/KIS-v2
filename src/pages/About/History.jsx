import { PageContainer, SeparationContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";

export function HistoryPages() {
  return (
    <>
    <SeparationContainer className="vbox">
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="History" />
      </div>
      <PageContainer className="vbox vertical-padding">

      </PageContainer>
    </SeparationContainer>
    </>
  )
}