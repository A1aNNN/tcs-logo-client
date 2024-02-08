import { Box, Image, Input, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Logo from './Logo';

const Improvements = ({ onNext, handleSubmit, updateUserPrompt, parseImage }) => {

    const [inputValue, setInputValue] = useState("");

    // const handleKeyPress = async (event) => {
    //     if (event.key === 'Enter') {
    //         onNext();
    //         handleSubmit();
    //         await updateUserPrompt(inputValue);
    //     }
    // }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            onNext();
            handleSubmit();
            parseImage();
            await updateUserPrompt(inputValue);

        }
    }

    // Example of useEffect
    // useEffect(() => {
    //     console.log(inputValue, ' is the changed input');
    // }, [inputValue])


  return (
    <Box className='app' minH='100vh' w='100%'>
        {/* <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box> */}
        <Logo/>

        <Box className='content prompt-container' display='flex' flexDirection='column'>
            <Text className='text-step text-title-upload'>
                Step 2
            </Text>
            <Text className='text-instruction-black'>
                Tell us the <span style={{ color: '#969696'}}> name</span> of your business.
            </Text>
            <Input
                className='improvements-input'
                placeholder='-> Type your answer here...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </Box>

        {/* <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title'>
                Logo Generator
            </Text>
            <Text className='text-instruction'>
                2. Please tell us the name of your business.
            </Text>
            <Input
                className='improvements-input'
                placeholder='Your business name here'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </Box> */}

        {/* <Footer/> */}
    </Box>
  )
}

export default Improvements
