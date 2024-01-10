import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from './../images/TCSLogo.png'
import Footer from './Footer'

const BadOutcome = ({ redo6 }) => {
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
                Well, we don't like AI generated images either! Fill out the Typeform to schedule a call with the TCS team!
            </Text>

            <Button className='restart-button' onClick={redo6}>Restart</Button>
        </Box>

        <Footer/>
    </Box>
  )
}

export default BadOutcome