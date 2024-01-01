import { Box, Image, Input, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React from 'react'

const Improvements = () => {
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
            <Input className='improvements-input' placeholder='Type your answer here'/>
        </Box>
    </Box>
  )
}

export default Improvements
