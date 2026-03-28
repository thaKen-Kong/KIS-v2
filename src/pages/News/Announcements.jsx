import { PageHeaderUi } from "../../components/common/PageHeader";

export function AnnouncementsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Announcements" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Announcements</h1>
      </div>
    </>
  )
}