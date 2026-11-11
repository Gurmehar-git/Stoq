import { useState } from 'react'


function App() {
  const [status, setStatus] = useState("Loading...");

  return (
    <div>
      <h1>STOQ</h1>
      <p>Backend status: {status}</p>

      <button onClick={() => setStatus("OK")}>
        Test Status
      </button>
    </div>
  )

}

export default App
