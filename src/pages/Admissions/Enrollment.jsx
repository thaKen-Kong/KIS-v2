import { PageHeaderUi } from "../../components/common/PageHeader";

export function EnrollmentPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Enrollment" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Enrollment</h1>
      </div>
    </>
  )
}