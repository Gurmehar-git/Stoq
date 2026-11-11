import { useState } from 'react'


function App() {
  const [status, setStatus] = useState("Loading...");

  async function checkBackend() {
    try {
      const response = await fetch("http://localhost:4000/api/health");

      if (!response.ok) {
        throw new Error("Backend returned an error");
      }

      const data = await response.json();

      setStatus(data.status);
    }
    catch (error) {
      setStatus("Connection failed");
      console.error(error);
    }
  }

  return (
    <div>
      <h1>STOQ</h1>
      <p>Backend status: {status}</p>

      <button onClick={checkBackend}>
        Check Backend
      </button>
    </div>
  )

}

export default App
