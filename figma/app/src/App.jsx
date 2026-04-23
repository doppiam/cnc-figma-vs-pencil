import './App.scss'
import Button from './components/Button/Button.jsx'
import Input from './components/Input/Input.jsx'

function App() {
  return (
    <main className="app">
      <div style={{ display: 'grid', gap: 24 }}>
        <h1 style={{ margin: 0, fontSize: 'var(--font-size-h1)' }}>Commit & Chill</h1>

        <section style={{ display: 'grid', gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 'var(--font-size-t1)' }}>Input states</h2>
          <Input state="default" />
          <Input state="focus" />
          <Input state="filled" defaultValue="Hello" />
          <Input state="disabled" disabled />
          <Input state="error" status="error" />
          <Input state="success" status="success" />
        </section>

        <section style={{ display: 'grid', gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 'var(--font-size-t1)' }}>Button states</h2>
          <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
            <Button variant="primary">Button text</Button>
            <Button variant="primary" disabled>
              Button text
            </Button>
            <Button variant="secondary">Button text</Button>
            <Button variant="secondary" disabled>
              Button text
            </Button>
            <div style={{ fontSize: 'var(--font-size-t4)', color: 'var(--color-neutral-grey)' }}>
              Hover states show on mouse-over.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
