import { Box, Image, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React, { useEffect } from 'react'

const Loading = ({ onNext }) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onNext();
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

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
                Loading...
            </Text>
        </Box>
    </Box>
  )
}

export default Loading
