import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState()

  useEffect(() => {
    fetch('https://render-backend-0ldx.onrender.com/api')
      .then(response => response.json())
      .then(result => {
        console.log('result:', result)
        setApiMessage(result.message || '')
      })
  }, []);
  return (
    <>
      <section id="center">
        <header><h1>message: {apiMessage && <p>{ apiMessage}</p>}</h1></header>
        <header><h1>Newest Latest try: Continous Deployment fungerar nu efter git push?</h1></header>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
