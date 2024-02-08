import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from './../images/TCSLogo.png'
import Footer from './Footer'
import Logo from './Logo'

const BadOutcome = ({ redo6 }) => {
  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-step outcome-text-small'>
                Let's start creating together!
            </Text>
            <Text className='text-instruction-black outcome-text-big'>
                It's ok, we don't like <span style={{ color: '#969696'}}>AI-generated</span> logos either.
            </Text>
            <Text className='outcome-text-md'>
                Let's create a logo you actually like! Fill out our interest form and we
                 will get back to you in &lt; 48 hours!
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
    //             Well, we don't like AI generated images either! Fill out the Typeform to schedule a call with the TCS team!
    //         </Text>

    //         <Button className='restart-button' onClick={redo6}>Restart</Button>
    //     </Box>

    //     <Footer/>
    // </Box>
  )
}

export default BadOutcome