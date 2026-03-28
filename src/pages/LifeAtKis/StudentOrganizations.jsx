import { PageHeaderUi } from "../../components/common/PageHeader";

export function StudentOrganizationsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Student Organizations" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Student Organizations</h1>
      </div>
    </>
  )
}