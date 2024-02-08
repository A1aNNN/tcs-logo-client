import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from './../images/TCSLogo.png'
import Footer from './Footer'
import Logo from './Logo'

const GoodOutcome = ({ redo5 }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-step outcome-text-small'>
                Yay!
            </Text>
            <Text className='text-instruction-black outcome-text-big'>
                <span style={{ color: '#969696'}}>Let's start</span> creating together.
            </Text>
            <Text className='outcome-text-md'>
                This was just a sneak peek of what we're capable of! To get a polished final product, 
                fill out our interest form and we will get back to you in &lt; 48 hours!
            </Text>


            <Button className='restart-button'>Let's talk</Button>
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

    //         <Text className='text-paragraph'>
    //             This was just a sneak peak of what we're capable of! To get a well-polished final product, fill out the Typeform to meet with the TCS team!
    //         </Text>

    //         <Button className='restart-button' onClick={redo5}>Restart</Button>
    //     </Box>

    //     <Footer/>
    // </Box>
  )
}

export default GoodOutcome