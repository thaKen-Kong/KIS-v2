import { PageHeaderUi } from "../../components/common/PageHeader";

export function NewsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="News" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>News</h1>
      </div>
    </>
  )
}