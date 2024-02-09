import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
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


            <Button className='restart-button' onClick={() => window.open('https://form.typeform.com/to/yhnJoMX8', '_blank')}>
                Let's talk
            </Button>
        </Box>
    </Box>
  )
}

export default BadOutcome