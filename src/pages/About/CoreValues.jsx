import { PageHeaderUi } from "../../components/common/PageHeader";

export function CoreValuesPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Core Values" className="shadow-box"/>
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Core Values</h1>
      </div>
    </>
  )
}