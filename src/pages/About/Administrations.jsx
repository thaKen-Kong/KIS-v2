import { PageContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";

export function AdministrationsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Administration" />
      </div>
      <div className="page-item" style={{ animationDelay: '0.1s' }}>
        <PageContainer className="box-shadow vertical-padding vbox">

        </PageContainer>
      </div>
    </>

  )
}