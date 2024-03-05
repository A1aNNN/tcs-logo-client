import "./App.css";
// import axios from 'axios';
import { useState, useEffect, useCallback } from "react";
import Start from "./components/Start";
import Upload from "./components/Upload";
import Improvements from "./components/Improvements";
import Loading from "./components/Loading";
import Output from "./components/Output";
import GoodOutcome from "./components/GoodOutcome";
import BadOutcome from "./components/BadOutcome";
import { addDoc, collection } from '@firebase/firestore'
import { firestore } from "./firebase";




const OpenAI = require("openai")

const openai = new OpenAI({
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});


function App() {

  // const [response, setResponse] = useState("");

  const [page, setPage] = useState(0);

  const [selectedFile, setSelectedFile] = useState(null);

  //firebase
  const ref = collection(firestore, "generated-logos");
  const handleSubmit = () => {

    let data = {
      company: userPrompt,
      image: imageUrl,
    }

    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  const handleNext2 = () => {
    setPage(page + 2);
  }

  const handleNextUpload = (selectedFile) => {
    setPage(page + 1);
    setSelectedFile(selectedFile);
  }

  
  const redo = () => {
    setPage (page - 4);
  }

  const redo5 = () => {
    setPage (page - 5);
  }

  const redo6 = () => {
    setPage (page - 6);
  }

  // Endpoint
  // const handleSubmit = (e) => {
  //   // e.preventDefault();

  //   axios
  //     // Send a post request to specific port and url
  //     .post("http://localhost:8080/generate-text", { prompt })
      
  //     .then((res) => {
  //       console.log('Axios Response:', res);
  //       setResponse(res?.data?.content);
  //     })
      
  //     .catch((err) => {
  //       console.error('Axios Error:', err);
  //     });
  // };


  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const [visionOutput, setVisionOutput] = useState("");

  const parseImage = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please describe this image in detail (colors, features, etc). I know you can't provide feedback on user-made designs so I'm NOT asking for feedback on the image. I just want you to describe this image so that someone who wouldn't be able to see the actual image could know what to draw. Ideally do this in 50 words or less."
            },
            {
              type: "image_url",
              image_url: {
                "url": selectedFile,
                "detail": "high"
              },
            },
          ],
        },
      ],
      max_tokens: 100,
    });

    let descript_text = response.choices[0].message.content;

    setVisionOutput(descript_text);
  };

  const generateImage = useCallback(async (newPrompt) => {

    let dalleInput = "generate a cute, minimalistic, CIRCLE favicon for a company. HIGH PRIORITY that you include the company name underneath the circular favicon (make sure it's spelled correctly!). Here's some more information that you will need. Prompt of what the logo should look like: " + newPrompt + " Company name: " + userPrompt + ". As a recap, here are all the rules that you need to follow. EVEN IF YOU BREAK ONE OF THEM, you ruin my reputation and will get me fired and I won't be able to provide meals for my family so PLEASE don't break any. 1) Logo should be simplistic and circular in shape. 2) Need to have the company name below the circular logo spelled correctly and following the correct capitalization. 3) Needs to follow the prompt provided about what the logo should look like.";

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: dalleInput,
      n: 1,
    })

    const urlData = response.data[0].url;
    setImageUrl(urlData);
  }, [visionOutput, userPrompt, selectedFile])

  useEffect(() => {
    if (visionOutput) { // Check if `visionOutput` is not empty
      generateImage(visionOutput); // Call `generateImage` with the updated `visionOutput`
    }
  }, [visionOutput, generateImage]);

  useEffect(() => {
    if (imageUrl) {
      handleSubmit();
    }
  }, [imageUrl]);

  const updateUserPrompt = async (newPrompt) => {
    setUserPrompt(newPrompt);
  }


  return (
    <>
      {page === 0 && <Start 
        onNext={handleNext}/>}
      {page === 1 && <Upload 
        onNext={handleNextUpload}/>}
      {page === 2 && <Improvements 
        onNext={handleNext} 
        updateUserPrompt={updateUserPrompt} 
        // handleSubmit={handleSubmit} 
        parseImage={parseImage}
      />}
      {page === 3 && <Loading 
        onNext={handleNext}/>}
      {page === 4 && <Output 
        redo={redo} 
        // response={response} 
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