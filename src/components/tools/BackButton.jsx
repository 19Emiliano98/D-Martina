import * as React from 'react';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[50],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

export default function ContainedButtons() {
    return (
        <ThemeProvider theme={theme}>
            <Button 
                sx={{ 
                    mr: 4, px: 8, 
                    borderRadius: '4px',
                    backgroundColor: 'white', color: 'black'
                }} 
                variant="contained"
            >
                <ArrowBackIcon />
            </Button>
        </ThemeProvider>
    );
}