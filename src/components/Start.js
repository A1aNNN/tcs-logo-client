import React from 'react'
import "./../App.css";
// import logo from "./images/TCSLogo.svg"
import logo from './../images/TCSLogo.png'
import { Box, Image } from '@chakra-ui/react';

const Start = () => {
  return (
    <Box className='app'>
        <Image className='logo' src={logo}/>
    </Box>
  )
}

export default Start
