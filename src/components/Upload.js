import { Box, Button, Image, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React from 'react'

const Upload = () => {
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
                1. Upload your logo PNG
            </Text>
            <Button className='upload-button'>
                Upload here
            </Button>
        </Box>
    </Box>
  )
}

export default Upload
