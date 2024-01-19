import "./App.css";
import axios from 'axios';
import { useState } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";
import { Button, Image } from "@chakra-ui/react";
import GoodOutcome from "./components/GoodOutcome";
import BadOutcome from "./components/BadOutcome";


const OpenAI = require("openai")

const openai = new OpenAI({
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});


function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  // const [imageUrl, setImageUrl] = useState(null);

  const [page, setPage] = useState(0);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleNext = () => {
    setPage(page + 1);
    // setSelectedFile(file);
  }

  const handleNext2 = () => {
    setPage(page + 2);
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

  
  //For the restart buttons
  const redo = () => {
    setPage (page - 4);
  }

  const redo5 = () => {
    setPage (page - 5);
  }

  const redo6 = () => {
    setPage (page - 6);
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
  
  const [visionOutput, setVisionOutput] = useState("");

  const parseImage = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            // { type: "text", text: "What's in this image?"},
            // { type: "text", text: "This image is a logo of a company. I want you to look at this and provide text in high detail of what you see. Your text should be detailed enough so that the dall-e API can produce an improved logo that still resembles the original logo."},
            {type: "text", text: "Describe the image in detail (colors, features, theme, style, etc). Provide enough detail that an artist would be able to redraw it. Use less than 50 words."},
            {
              type: "image_url",
              image_url: {
                // "url": "https://upload.jpg", //some url here. this was used as a placeholder
                // "url": "https://assets.wfcdn.com/im/11342258/compr-r85/3298/32983805/ground-mount-metal-monkey-bars.jpg",
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
                "detail": "high"
              },
            },
          ],
        },
      ],
      // max_tokens: 1500,
      max_tokens: 100,
    });
    console.log(response.choices[0].message);

    let descript_text = response.choices[0].message.content;
    console.log(descript_text, " is the variable descript_text");

    // setVisionOutput(response.choices[0].message.content);
    setVisionOutput(descript_text);
    console.log(visionOutput, " ALAN THIS is the output of vision within parseImage");
  };

  const generateImage = async (newPrompt) => {
    console.log(newPrompt, " is the prompt for the image.");
    console.log(visionOutput, " is the prompt taken from vision.");

    const response = await openai.images.generate({
      model: "dall-e-3",
      // prompt: userPrompt,
      prompt: newPrompt,
      // prompt: visionOutput,
      // prompt: "I work at a design agency called The Creative Solution (or TCS for short). Give me a clean black and white logo incorporating the word TCS.",
      n: 1,
    })


    const urlData = response.data[0].url;
    console.log(response?.data, "DATATATATATA")
    console.log(selectedFile, ' THIS IS THE SELECTED FILE!!!')
    setImageUrl(urlData);
  }

  const updateUserPrompt = async (newPrompt) => {
    setUserPrompt(newPrompt);
    console.log(newPrompt, " PROMPTPROMPTPROMPT")
    await generateImage(newPrompt); //COMMENTED THIS OUT
    // generateImage(visionOutput);
  }

  const logVariable = () => {
    console.log(visionOutput, " THIS IS A RESULT OF logVariable");
  }


  return (
    <>
      {/* {renderImage()}
      <Button onClick={parseImage}>Testing vision</Button>
      <Button onClick={logVariable}>Test what the variable visionOutput is</Button> */}
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
      {page === 4 && <Output 
        redo={redo} 
        response={response} 
        imageUrl={imageUrl}
        onNext={handleNext}
        onNext2={handleNext2}
      />}

      {page === 5 && <GoodOutcome
        redo5={redo5}
      />}
      {page === 6 && <BadOutcome
        redo6={redo6}
      />}
    </>
  )
}

export default App;