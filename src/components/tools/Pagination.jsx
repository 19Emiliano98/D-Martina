import * as React from 'react';

import Pagination from '@mui/material/Pagination';

import Box from '@mui/material/Box';

export default function Pages( data ) {
    const { count, onChange } = data;
    
    return (
        <Box 
            sx={{ 
                display: 'flex', alignItems: 'center',
                ml: 26, mt: 2
            }}
        >
            <Pagination 
                count={count}
                defaultPage={1}
                onChange={onChange}
                variant="outlined" 
                shape="rounded" 
            />
        </Box>
    );
}