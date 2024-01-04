import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import behance from './../images/TCSbehance.png'
import linkedin from './../images/TCSlinkedin.png'
import youtube from './../images/TCSyoutube.png'
import tiktok from './../images/TCStiktok.png'
import instagram from './../images/TCSinstagram.png'

const Footer = () => {
  return (
    <Box className='footer-container'>
        <Box className='footer' display='flex' flexDirection='row'>
            <Box className='footer-words' display="flex" flexDirection="row">
                <Text className='footer-words-start'>Made with love by </Text>
                <Text className='footer-words-end'>The Creative Solution Team</Text>
            </Box>

            <Box className='footer-socials'>
                <a href='https://www.linkedin.com/company/thecreativesolution-ca/' target='_blank'>
                    <Image className='social-icon' src={linkedin}/>
                </a>
                <a href='https://www.instagram.com/thecreativesolution.ca/' target='_blank'>
                    <Image className='social-icon' src={instagram} marginLeft='18px'/>
                </a>
                <a href='https://www.behance.net/thecreativesolution' target='_blank'>
                    <Image className='social-icon' src={behance} marginLeft='18px'/>
                </a>
                <a href='https://www.tiktok.com/@thecreativesolution.ca' target='_blank'>
                    <Image className='social-icon' src={tiktok} marginLeft='18px'/>
                </a>
                <a href='https://www.youtube.com/@TheCreativeSolution' target='_blank'>
                    <Image className='social-icon' src={youtube} marginLeft='18px' marginBottom='3px'/>
                </a>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer
