import { PageHeaderUi } from "../../components/common/PageHeader";

export function FacilitiesPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Facilities" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Facilities</h1>
      </div>
    </>
  )
}