import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
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


            <Button className='restart-button' onClick={() => window.open('https://form.typeform.com/to/yhnJoMX8', '_blank')}>Let's talk</Button>
        </Box>
    </Box>
  )
}

export default GoodOutcome