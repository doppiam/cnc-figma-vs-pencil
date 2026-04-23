import './App.scss'
import { useState } from 'react'
import Button from './components/Button.jsx'
import DesignSystemDemoPage from './pages/DesignSystemDemoPage.jsx'
import SubscribePage from './pages/SubscribePage.jsx'

function App() {
  const [page, setPage] = useState('demo') // demo | subscribe

  return (
    <main className="app">
      <header className="app__nav" aria-label="Pages">
        <Button
          variant={page === 'demo' ? 'primary' : 'secondary'}
          onClick={() => setPage('demo')}
        >
          Design system
        </Button>
        <Button
          variant={page === 'subscribe' ? 'primary' : 'secondary'}
          onClick={() => setPage('subscribe')}
        >
          Modale subscribe
        </Button>
      </header>

      {page === 'demo' ? <DesignSystemDemoPage /> : <SubscribePage />}
    </main>
  )
}

export default App
