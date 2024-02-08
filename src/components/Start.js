import React, { useEffect } from 'react'
import "./../App.css";
import logo from './../images/TCSLogo.png'
import lightmodelogo from './../images/tcs-lightmode-logo.svg'
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Footer from './Footer';
import Logo from './Logo';

const Start = ({ onNext }) => {

    useEffect(() => {
        const contentElement = document.querySelector('.start-content');
        contentElement.classList.add('active');
    }, []);


  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='content start-content' display='flex' flexDirection='column'>
            {/* <Text className='text-title-start'>
                Logo Generator
            </Text> */}
            {/* <Text className='text-title-start-logo'>
                Logo
            </Text>
            <Text className='text-title-start-generator'>
                Generator.
            </Text> */}
            <Text className='text-title-start-generator'>
                <span style={{color: '#191919'}}>Logo </span> Generator
            </Text>
            {/* <Text className='start-paragraph'>
                Welcome to the TCS Logo Generator! Please attach a PNG image of 
                your current logo, as well as the name of your business to receive 
                an improved logo.
            </Text> */}
            {/* <Text className='start-paragraph'>
                Please keep in mind that the logo is tentative. To receive a 
                finalized logo, please fill out the Typeform to meet 
                with the TCS team!
            </Text> */}
            <Text className='start-paragraph'>
                Upload your current logo and the name of your business to receive an improved, 
                one-of-a-kind AI powered logo.
            </Text>
            <Button className='start-button' onClick={onNext}>
                Get started here
            </Button>
        </Box>

        {/* <Footer/> */}
    </Box>
  )
}

export default Start
