import { Box, Button, Image, Text } from '@chakra-ui/react'
import uploadIcon from './../images/upload-icon.svg'
import React, { useRef } from 'react'
import Logo from './Logo'

const Upload = ({ onNext }) => {

    //For the input file
    const fileInputRef = useRef(null);

    const isPNG = (file) => {
        return file && file.type === 'image/png';
    };

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
        <Logo/>

        <Box className='content prompt-container' display='flex' flexDirection='column'>
            <Text className='text-step text-title-upload'>
                Step 1
            </Text>
            <Text className='text-instruction-black'>
                <span style={{ color: '#969696'}}>Upload</span> your logo PNG.
            </Text>
            <Button className='upload-button' onClick={handleButtonClick}>
                <Image src={uploadIcon} paddingRight='8px'/>
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
    </Box>
  )
}

export default Upload
