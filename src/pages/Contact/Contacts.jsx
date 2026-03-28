import { PageHeaderUi } from "../../components/common/PageHeader";

export function ContactsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Contacts" />
      </div>
      <div className="page-item page-container vertical-padding vbox" style={{ animationDelay: '0.1s' }}>
        <h1>Contacts</h1>
      </div>
    </>
  )
}