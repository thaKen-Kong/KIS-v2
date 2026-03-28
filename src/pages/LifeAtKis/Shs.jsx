import { PageHeaderUi } from "../../components/common/PageHeader";

export function ShsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="SHS" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>SHS</h1>
      </div>
    </>
  )
}