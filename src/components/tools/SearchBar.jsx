import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
    <Box
        component="form"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            '& > :not(style)': { mt: 2, ml: 30, width: '50%', height: '48px' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Productos Destacados" variant="outlined" />
    </Box>
    );
}