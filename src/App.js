import "./App.css";
import axios from 'axios';
import { useState } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";
import { Image } from "@chakra-ui/react";


const OpenAI = require("openai")

const openai = new OpenAI({
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});


function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const [page, setPage] = useState(0);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleNext = () => {
    setPage(page + 1);
    // setSelectedFile(file);
  }

  const handleNextUpload = (selectedFile) => {
    setPage(page + 1);
    setSelectedFile(selectedFile);
    console.log('Selected file in App.js: HI ALAN THIS IS YOUR CONSOLE LOG ', selectedFile);
  }

  const renderImage = () => {
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      return <Image src={imageUrl}/>;
    }

    return null;
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

  const parseImage = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What's in this image?"},
            {
              type: "image_url",
              image_url: {
                "url": "https://upload.jpg", //some url here. this was used as a placeholder
                "detail": "low"
              },
            },
          ],
        },
      ],
    });
    console.log(response.choices[0]);
  };

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
    console.log(selectedFile, ' THIS IS THE SELECTED FILE!!!')
    setImageUrl(urlData);
  }


  const updateUserPrompt = async (newPrompt) => {
    setUserPrompt(newPrompt);
    console.log(newPrompt, " PROMPTPROMPTPROMPT")
    await generateImage(newPrompt);
  }




  return (
    <>
      {renderImage()}
      {/* <Dalle/> */}
      {page === 0 && <Start 
        onNext={handleNext}/>}
      {/* {page === 1 && <Upload 
        onNext={handleNext}/>} */}
      {page === 1 && <Upload 
        // onNext={(selectedFile) => handleNext(selectedFile)}/>}
        onNext={handleNextUpload}/>}
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