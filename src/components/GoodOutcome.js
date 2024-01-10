import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from './../images/TCSLogo.png'
import Footer from './Footer'

const GoodOutcome = ({ redo5 }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box>
        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title'>
                Logo Generator
            </Text>

            <Text className='text-paragraph'>
                This was just a sneak peak of what we're capable of! To get a well-polished final product, fill out the Typeform to meet with the TCS team!
            </Text>

            <Button className='restart-button' onClick={redo5}>Restart</Button>
        </Box>

        <Footer/>
    </Box>
  )
}

export default GoodOutcome