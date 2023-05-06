import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
    return (
        <Stack 
            sx={{ 
                display: 'flex', alignItems: 'center',
                mt:4, ml: 26
            }}
            spacing={10}
        >
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
}