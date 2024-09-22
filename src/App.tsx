import { useState } from 'react'
import './assets/css/App.css'
import Header from './components/NavBar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Hello World !</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

// Ancienne palette de couleur (vert pastel)

// color bg : #E3E4D6
// color text : #A6A77D
// color trait : #A6A77F
// color text bouton : #54544D

export default App
