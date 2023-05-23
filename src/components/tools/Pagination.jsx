import * as React from 'react';

import Pagination from '@mui/material/Pagination';

import Box from '@mui/material/Box';

export default function Pages( data ) {
    

    

    console.log(data);

    return (
        <Box 
            sx={{ 
                display: 'flex', alignItems: 'center',
                mt:4, ml: 26
            }}
            spacing={10}
        >
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
    );
}