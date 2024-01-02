import React from 'react'
import "./../App.css";
import logo from './../images/TCSLogo.png'
import { Box, Button, Image, Text } from '@chakra-ui/react';

const Start = ({ onNext }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title'>
                Logo Generator
            </Text>
            <Text className='start-paragraph'>
                Welcome to the TCS Logo Generator! Please attach a PNG image of 
                your current logo, as well as a few points of improvement to receive 
                three improved logos.
            </Text>
            <Text className='start-paragraph'>
                Please keep in mind that these logos are tentative. To receive a 
                well flushed out product, please fill out the Typeform to meet 
                with the TCS team!
            </Text>
            <Button className='start-button' onClick={onNext}>
                Get started here
            </Button>
        </Box>
    </Box>
  )
}

export default Start
