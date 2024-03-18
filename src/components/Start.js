import React, { useEffect } from 'react'
import "./../App.css";
import { Box, Button, Text } from '@chakra-ui/react';
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
            <Text className='text-title-start-generator'>
                <span style={{color: '#191919'}}>Logo </span> Generator
            </Text>
            <Text className='start-paragraph'>
                Upgrade your current logo and receive a one-of-a-kind AI powered logo in less than a minute!
            </Text>
            <Button className='start-button' onClick={onNext}>
                Get started here
            </Button>
        </Box>
    </Box>
  )
}

export default Start
