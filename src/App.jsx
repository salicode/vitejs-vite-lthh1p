import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [messages, setMessages] = useState(["a", "c"])

  return (
    <div>
      {
        messages.length === 0 ?  
        <h1>You are cought up </h1> : <h1>You have {messages.length}  unread  {messages.length > 1 ? " messages " : "message"}</h1>
      }
    </div>
  )
}

export default App
