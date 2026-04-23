import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'

export default function DesignSystemDemoPage() {
  return (
    <div className="ds-demo">
      <header className="ds-demo__header">
        <h1 className="ds-demo__title">Design system demo</h1>
        <p className="ds-demo__subtitle">
          Tokens + Input/Button states from <code>design-system.pen</code>
        </p>
      </header>

      <section className="ds-demo__section">
        <h2 className="ds-demo__sectionTitle">Buttons</h2>
        <div className="ds-demo__row">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" disabled>
            Primary disabled
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
        </div>
        <p className="ds-demo__hint">Hover the enabled buttons to see Hover.</p>
      </section>

      <section className="ds-demo__section">
        <h2 className="ds-demo__sectionTitle">Inputs</h2>
        <div className="ds-demo__grid">
          <Input
            label="State=Default"
            status="default"
            placeholder="Input text"
          />
          <Input label="State=Filled" status="filled" defaultValue="Input text" />
          <Input
            label="State=Disabled"
            status="disabled"
            placeholder="Input text"
          />
          <Input
            label="State=Error"
            status="error"
            placeholder="Input text"
            message="Error text"
          />
          <Input
            label="State=Success"
            status="success"
            placeholder="Input text"
            message="Success text"
          />
        </div>
        <p className="ds-demo__hint">Click into an input to see Focus.</p>
      </section>
    </div>
  )
}

