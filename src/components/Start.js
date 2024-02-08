import React, { useEffect } from 'react'
import "./../App.css";
import logo from './../images/TCSLogo.png'
import lightmodelogo from './../images/tcs-lightmode-logo.svg'
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Footer from './Footer';

const Start = ({ onNext }) => {

    useEffect(() => {
        const contentElement = document.querySelector('.start-content');
        contentElement.classList.add('active');
    }, []);


  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={lightmodelogo}/>
        </Box>

        <Box className='content start-content' display='flex' flexDirection='column'>
            <Text className='text-title-start'>
                Logo Generator
            </Text>
            <Text className='start-paragraph'>
                Welcome to the TCS Logo Generator! Please attach a PNG image of 
                your current logo, as well as the name of your business to receive 
                an improved logo.
            </Text>
            <Text className='start-paragraph'>
                Please keep in mind that the logo is tentative. To receive a 
                finalized logo, please fill out the Typeform to meet 
                with the TCS team!
            </Text>
            <Button className='start-button' onClick={onNext}>
                Get started here
            </Button>
        </Box>

        <Footer/>
    </Box>
  )
}

export default Start
