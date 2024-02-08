import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import lightmodelogo from './../images/tcs-lightmode-logo.svg'

const Logo = () => {
  return (
    <Box className='logo-box'>
        <Image className='logo' src={lightmodelogo}/>
    </Box>
  )
}

export default Logo
