import { Box, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Logo from './Logo';

const Loading = ({ onNext }) => {

    const blurbs = [
        "Did you know TCS was originally called 'Art for Others'?",
        "TCS has an NFT collection called 'Bangoncebu' which is used to raise money for charity.",
        "Did you know half our team's name start with letter 'A'?",
        "Thanks for stopping by!",
    ]

    const [currentBlurbIndex, setCurrentBlurbIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("fadeIn");


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onNext();
        }, 20000000);

        return () => clearTimeout(timeoutId);
    }, [onNext]);

    useEffect(() => {
        const changeBlurb = () => {
            setFadeClass("blurbFadeOut");
            setTimeout(() => {
                setCurrentBlurbIndex((prevIndex) => (prevIndex + 1) % blurbs.length);
                setFadeClass("blurbFadeIn");
            }, 1000); // Time for changing between classes
        };

        const intervalId = setInterval(changeBlurb, 4500); // Time that each blurb appears for

        return () => clearInterval(intervalId);
    }, []);

  return (
    <Box className='app' minH='100vh' w='100%'>
        <Logo/>

        <Box className='loading-container'>
            <Text className='loading-maintext'>
                Loading...
            </Text>
            <Box className='spinner'></Box>
            <Text className={`loading-subtext ${fadeClass}`}>
                {blurbs[currentBlurbIndex]}
            </Text>
        </Box>
    </Box>
  )
}

export default Loading
