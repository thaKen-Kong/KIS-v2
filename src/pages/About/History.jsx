import { PageHeaderUi } from "../../components/common/PageHeader";

export function HistoryPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="History" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>History</h1>
      </div>
    </>
  )
}