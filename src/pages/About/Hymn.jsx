import { PageHeaderUi } from "../../components/common/PageHeader";

export function HymnPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Hymn" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Hymn</h1>
      </div>
    </>
  )
}