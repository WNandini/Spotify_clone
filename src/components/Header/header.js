import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './header.css';
import {Box, Button } from '@mui/material';

const Header = () => {
    return(
        <>
            <Box className='header'>
                <Box>
                    <ChevronLeftIcon style={{color: '#fff'}}/>
                    <ChevronRightIcon style={{color: '#fff'}}/>
                </Box>
                <Box className='btnDiv'>
                    <Button id='signUp'>Sign up</Button>
                    <Button id='loginBtn'>Log in</Button>
                </Box>
            </Box>
        </>
    )
}

export default Header;