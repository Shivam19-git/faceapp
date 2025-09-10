import React, {useState} from 'react'
import axios from 'axios'
import Students from './components/students';
import './App.css'

function App() {

  const [message, setMessage] = useState("");
  const fetchMessage = async () =>{
    const apiURL = import.meta.env.VITE_API_URL
    console.log("API URL:", apiURL);
    const response = await axios.get(`${apiURL}/hello/`)
    setMessage(response.data.message)
  }
  return (
    <>
    <div>
      <button onClick={fetchMessage}>Fetch Message</button>
    </div>
    <h2>{message}</h2>

    <div>
      <Students />
    </div>
    </>
  )
}

export default App
