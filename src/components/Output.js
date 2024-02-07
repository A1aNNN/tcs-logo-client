import React from 'react'
import logo from './../images/TCSLogo.png'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Footer from './Footer'

const Output = ({ redo, response, imageUrl, onNext, onNext2 }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title'>
                Logo Generator
            </Text>
            <Box className='output-logos-container' display='flex' flexDirection='row'>
                {/* LOGOS OUTPUTTED HERE */}
                <Box className='new-logo'>
                    <Image w="200px" src={imageUrl} alt='ai image'/>
                </Box>
            </Box>

            {/* FOR CHAT GPT RESPONSE */}
            {/* <Text className='text-paragraph'>
                Improvements:
            </Text>
            <Text className='text-paragraph'>
                {response}
            </Text> */}
            <Text className='text-paragraph'>
                Do you like the new logo?
            </Text>
            <Box>
                <Button className='restart-button' marginRight="10px" onClick={onNext}>Yes</Button>
                <Button className='restart-button' marginLeft="10px" onClick={onNext2}>No</Button>
            </Box>
        </Box>

        <Footer/>
    </Box>
  )
}

export default Output
