import "./App.css";
import axios from 'axios';
import { useState } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";

function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios

      // Send a post request to specific port and url
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
      {/* <Start/> */}
      {/* <Upload/> */}
      {/* <Improvements/> */}
      {/* <Loading/> */}
      <Output/>
    </>
    // <>
    // <div>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <label htmlFor="inline-full-name">
    //           Just say/ask anything :
    //         </label>
    //       </div>
    //       <div>
    //         <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
    //       </div>
    //       <div>
    //         <button type="submit">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //     <div>
    //       <p>{response}</p>
    //     </div>

    //   </div>
    // </div>
    // </>
  )
}

export default App;