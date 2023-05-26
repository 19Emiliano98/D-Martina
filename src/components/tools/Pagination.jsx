import * as React from 'react';

import Pagination from '@mui/material/Pagination';

import Box from '@mui/material/Box';

export default function Pages( data ) {
    const { cantPages } = data;
    
    return (
        <Box 
            sx={{ 
                display: 'flex', alignItems: 'center',
                ml: 26
            }}
        >
            <Pagination count={cantPages} variant="outlined" shape="rounded" />
        </Box>
    );
}