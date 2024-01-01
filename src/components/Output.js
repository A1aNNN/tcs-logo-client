import React from 'react'
import logo from './../images/TCSLogo.png'
import { Box, Image, Text } from '@chakra-ui/react'

const Output = () => {
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
                <Box className='new-logo'></Box>
                <Box className='new-logo'></Box>
                <Box className='new-logo'></Box>
            </Box>
            <Text className='text-paragraph'>
                Improvements:
            </Text>
            <Text className='text-paragraph'>
                For a more polished final product, please fill out the Typeform to meet 
                with the TCS team!
            </Text>
        </Box>
    </Box>
  )
}

export default Output
