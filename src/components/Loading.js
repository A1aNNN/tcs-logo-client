import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Logo from './Logo';

const Loading = ({ onNext }) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onNext();
        }, 20000);

        return () => clearTimeout(timeoutId);
    }, [onNext]);

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
            {/* <Text>
                Did you know half our team's name start with letter "A"?
            </Text> */}
        </Box>
    </Box>
  )
}

export default Loading
