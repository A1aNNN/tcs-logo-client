import React from 'react'
import logo from './../images/TCSLogo.png'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import Footer from './Footer'
import Logo from './Logo'

const Output = ({ redo, response, imageUrl, onNext, onNext2 }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-step output-text-small'>
                Success!
            </Text>
            <Text className='text-instruction-black'>
                Do you like the <span style={{ color: '#969696'}}> new logo?</span>
            </Text>

            <Box className='new-logo'>
                <Image w="200px" src={imageUrl} alt='ai image'/>
            </Box>

            <Box>
                <Button className='restart-button' marginRight="10px" onClick={onNext}>Yes</Button>
                <Button className='restart-button' marginLeft="10px" onClick={onNext2}>No</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Output
