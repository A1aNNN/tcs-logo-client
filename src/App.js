import "./App.css";
import axios from 'axios';
import { useState } from "react";

function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/generate-text", { prompt })
      .then((res) => {
        console.log('Axios Response:', res);
        setResponse(res?.data?.content);
      })
      .catch((err) => {
        console.error('Axios Error:', err);
      });
  };

  return (
    <>
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="inline-full-name">
              Just say/ask anything :
            </label>
          </div>
          <div>
            <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
        <div>
          <p>{response}</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default App;






// import React, { useEffect, useState } from 'react';

// function App() {
//   const [generatedText, setGeneratedText] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8080/generate-text')
//       .then((response) => response.text())
//       .then((text) => {
//         console.log('Text received from server:', text)
//         setGeneratedText(text)
//       })
//       .catch((error) => console.error('Error fetching generated text:', error));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Generated Text:</h1>
//       <p>{generatedText}</p>
//     </div>
//   );
// }

// export default App;
