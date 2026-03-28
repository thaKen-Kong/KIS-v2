import { PageHeaderUi } from "../../components/common/PageHeader";

export function RequirementsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Requirements" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Requirements</h1>
      </div>
    </>
  )
}