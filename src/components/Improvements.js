import { Box, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from './Logo';

const Improvements = ({ onNext, updateUserPrompt, parseImage }) => {

    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onNext();
            parseImage();
            updateUserPrompt(inputValue);
        }
    }

  return (
    <Box className='app' minH='100vh' w='100%'>
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
    </Box>
  )
}

export default Improvements
