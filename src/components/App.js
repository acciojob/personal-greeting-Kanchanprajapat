
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('')
  const handleChange =(e) =>{
    setName(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="nameInput">Enter your name:</label><br></br>
        <input type="text" id="nameInput" value={name} onChange={handleChange}/>
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
