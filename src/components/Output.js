import React from 'react'
import logo from './../images/TCSLogo.png'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Footer from './Footer'

const Output = ({ redo, response, imageUrl }) => {
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
                    {/* <img w="256px" src={imageUrl} alt='2nd ai image'/> */}
                </Box>
                {/* <Box className='new-logo'></Box>
                <Box className='new-logo'></Box> */}
            </Box>

            {/* FOR CHAT GPT RESPONSE */}
            {/* <Text className='text-paragraph'>
                Improvements:
            </Text>
            <Text className='text-paragraph'>
                {response}
            </Text> */}
            <Text className='text-paragraph'>
                To receive a 
                finalized logo, please fill out the Typeform to meet 
                with the TCS team!
            </Text>
            <Button className='restart-button' onClick={redo}>
                Restart
            </Button>
        </Box>

        <Footer/>
    </Box>
  )
}

export default Output
