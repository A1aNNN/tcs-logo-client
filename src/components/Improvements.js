import { Box, Image, Input, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React, { useState } from 'react'

const Improvements = ({ onNext, handleSubmit, updateUserPrompt }) => {

    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onNext();
            handleSubmit();
        }
    }


  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title'>
                Logo Generator
            </Text>
            <Text className='text-instruction'>
                2. Add some improvement points
            </Text>
            <Input
                className='improvements-input'
                placeholder='Type your answer here'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </Box>
    </Box>
  )
}

export default Improvements
