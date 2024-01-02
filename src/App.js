import "./App.css";
import axios from 'axios';
import { useState } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";

import { Configuation, OpenAIApi } from 'openai';


function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const [page, setPage] = useState(0);

  const apiKey = process.env.GPT_API_KEY;

  const handleNext = () => {
    setPage(page + 1);
    console.log(userPrompt, "SDASFAFAFSA")
  }

  const redo = () => {
    setPage (page - 4);
  }

  const handleSubmit = (e) => {
    // e.preventDefault();

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

  // const generateImage = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:8080/generate-logo", { prompt })

  //     .then((res) => {
  //       console.log('Axios Response:', res);
  //       setResponse(res?.data?.content);
  //     })
  // }

  // FOR DALLE
  const [userPrompt, setUserPrompt] = useState(""); //the prompt of what image to generate
  const [number, setNumber] = useState(1); //the number of generated images
  const [size, setSize] = useState("256x256"); //what dimensions we want the image to be
  const [imageUrl, setImageUrl] = useState("");

  const updateUserPrompt = (newPrompt) => {
    setUserPrompt(newPrompt);
  }



  return (
    <>
      <div>
        <textarea onChange={(e) => setUserPrompt(e.target.value)}></textarea>
      </div>
      {page === 0 && <Start onNext={handleNext}/>}
      {page === 1 && <Upload onNext={handleNext}/>}
      {page === 2 && <Improvements onNext={handleNext} updateUserPrompt={updateUserPrompt} handleSubmit={handleSubmit}/>}
      {page === 3 && <Loading onNext={handleNext}/>}
      {page > 3 && <Output redo={redo} response={response}/>}
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

    // <div>
    //   dall-e
    // </div>
  )
}

export default App;