import { PageHeaderUi } from "../../components/common/PageHeader";

export function UpcomingEventsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Upcoming Events" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Upcoming Events</h1>
      </div>
    </>
  )
}