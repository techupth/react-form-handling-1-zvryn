import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(input);
    setInput("");
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button type="submit">Update text</button>
      </div>
    </form>
  );
}

export default App;
