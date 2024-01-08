import "./App.css";
import axios from 'axios';
import { useState } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";


const OpenAI = require("openai")

const openai = new OpenAI({
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

// const generateImage = async () => {

//   const response = await openai.images.generate({
//     model: "dall-e-3",
//     prompt: userPrompt,
//     n: 1,
//   })
//   const urlData = response.data[0].url;
//   console.log(response?.data, "DATATATATATATATA")
//   console.log(urlData);
//   setImageUrl(urlData);
// }


function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const [page, setPage] = useState(0);

  const apiKey = process.env.GPT_API_KEY;

  const handleNext = () => {
    setPage(page + 1);
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


  // FOR DALLE
  const [improvementsInput, setImprovementsInput] = useState("");

  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async (newPrompt) => {
    console.log(newPrompt, " is the prompt for the image");

    const response = await openai.images.generate({
      model: "dall-e-3",
      // prompt: userPrompt,
      prompt: newPrompt,
      // prompt: "I work at a design agency called The Creative Solution (or TCS for short). Give me a clean black and white logo incorporating the word TCS",
      n: 1,
    })
    const urlData = response.data[0].url;
    console.log(response?.data, "DATATATATATATATA")
    setImageUrl(urlData);
  }


  const updateUserPrompt = async (newPrompt) => {
    setUserPrompt(newPrompt);
    console.log(newPrompt, " PROMPTPROMPTPROMPT")
    await generateImage(newPrompt);
  }




  return (
    <>
      {/* <Dalle/> */}
      {page === 0 && <Start 
        onNext={handleNext}/>}
      {page === 1 && <Upload 
        onNext={handleNext}/>}
      {page === 2 && <Improvements 
        onNext={handleNext} 
        updateUserPrompt={updateUserPrompt} 
        handleSubmit={handleSubmit} 
      />}
      {page === 3 && <Loading 
        onNext={handleNext}/>}
      {page > 3 && <Output 
        redo={redo} 
        response={response} 
        imageUrl={imageUrl}/>}
    </>
  )
}

export default App;