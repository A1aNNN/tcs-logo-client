import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from './Logo';

const Email = ({ onNext, updateUserEmail }) => {

    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onNext();
            updateUserEmail(inputValue);
        }
    }

    const clickGenerate = () => {
        onNext();
        updateUserEmail(inputValue);
    }

  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='content prompt-container' display='flex' flexDirection='column'>
            <Text className='text-step text-title-upload'>
                Step 3
            </Text>
            <Text className='text-instruction-black'>
                Please provide a business <span style={{ color: '#969696'}}> email</span>.
            </Text>
            <Input
                className='improvements-input'
                placeholder='team@thecreativesolution.ca'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <Button className='generate-button' onClick={clickGenerate}>
                Generate logo
            </Button>
        </Box>
    </Box>
  )
}

export default Email