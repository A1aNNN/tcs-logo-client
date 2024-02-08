import { Box, Image, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React, { useEffect } from 'react'
import Footer from './Footer';
import Logo from './Logo';

const Loading = ({ onNext }) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onNext();
        }, 20000);

        return () => clearTimeout(timeoutId);
    }, []);

  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='loading-container'>
            <Text className='loading-maintext'>
                Loading...
            </Text>
            <Box className='spinner'></Box>
            <Text className='loading-subtext'>
                Did you know TCS was originally called "Art for Others"?
            </Text>
        </Box>
    </Box>
    // <Box className='app' minH='100vh' w='100%'>
    //     <Box className='logo-box'>
    //         <Image className='logo' src={logo}/>
    //     </Box>

    //     <Box className='content' display='flex' flexDirection='column'>
    //         <Text className='text-title'>
    //             Logo Generator
    //         </Text>
    //         <Text className='text-instruction loading-text'>
    //             Loading...
    //         </Text>
    //     </Box>

    //     <Footer/>
    // </Box>
  )
}

export default Loading
