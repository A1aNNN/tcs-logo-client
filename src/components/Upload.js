import { Box, Button, Image, Text } from '@chakra-ui/react'
import logo from './../images/TCSLogo.png'
import React, { useEffect, useRef } from 'react'
import Footer from './Footer'

const Upload = ({ onNext }) => {

    //For the input file
    const fileInputRef = useRef(null);

    

    useEffect(() => {
        const element = document.querySelector('.text-title-upload');
        element.classList.add('active');
    }, []);

    const isPNG = (file) => {
        return file && file.type === 'image/png';
    };

    // const handleFileChange = (e) => {
    //     //Access the selected file using e.target.files[0]
    //     const selectedFile = e.target.files[0];
    //     //You can now use the selected file in your next function or state
    //     //For example, you can pass it to onNext(selectedFile)
    //     if (isPNG(selectedFile)) {
    //         onNext(selectedFile);
    //     } else {
    //         //Provide user feedback that only PNG files are allowed.
    //         console.error('Please upload a PNG file.');
    //     }
    // };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (isPNG(selectedFile)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                // Pass the Base64 string to the next function instead of the file object
                onNext(base64String);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            console.error('Please upload a PNG file.');
        }
    };
    


    const handleButtonClick = () => {
        //Trigger the file input when the button is clicked
        fileInputRef.current.click();
    }

  return (
    <Box className='app' minH='100vh' w='100%'>
        <Box className='logo-box'>
            <Image className='logo' src={logo}/>
        </Box>

        <Box className='content' display='flex' flexDirection='column'>
            <Text className='text-title-upload'>
                Logo Generator
            </Text>
            <Text className='text-instruction'>
                1. Upload your logo PNG
            </Text>
            {/* <Button className='upload-button' onClick={onNext}> */}
            <Button className='upload-button' onClick={handleButtonClick}>
            {/* <Button className='upload-button' onClick={() => onNext()}> */}
                Upload here
            </Button>
            <input 
                type='file'
                accept='image/png'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </Box>

        <Footer/>
    </Box>
  )
}

export default Upload
