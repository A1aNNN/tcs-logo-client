import { Box, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

// import { OpenAIApi } from 'openai';
const OpenAI = require("openai")

// const configuation = new Configuration({
//     apiKey: process.env.GPT_API_KEY,
// })

const openai = new OpenAI({
  organization: "org-BcNVFNM1cR3LbwSak5O12NCe",
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const Dalle = () => {

  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    // const imageParameters = {
    //   prompt: userPrompt,
    //   // n: parseInt(number),
    //   // size: size,
    //   n: 1,
    //   size: "1024x1024",
    // }

    // const response = await openai.createImage({
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: userPrompt,
      // prompt: "give me a simple logo for my soda company. It's called Boke. MAKE SURE THE NAME IS SPELLED CORRECTLY",
      n: 1,
      // size: "256x256",
      // n: parseInt(number),
      // size: size,
    })
    // (imageParameters);
    const urlData = response.data[0].url;
    console.log(response?.data, "DATATATATATATATA")
    setImageUrl(urlData);
  }

  return (
    <Box h="400px">
        {imageUrl && <Image w="256px" src={imageUrl} alt="ai image"/>}
      
        
        <input className='prompt'
          placeholder={"Description"}
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          />

        {/* <input className='number'
          placeholder={"Number"}
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}/>
        
        <input className='size'
          placeholder={"Size"}
          value={size}
          onChange={(e) => setSize(e.target.value)}
          /> */}
        
        <Button onClick={generateImage}>GENERATE IMAGE</Button>
    </Box>
  )
}

export default Dalle
