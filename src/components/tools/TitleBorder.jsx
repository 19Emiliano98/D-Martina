import * as React from 'react';

import { Box, Card, CardContent, Typography } from '@mui/material';

export default function TitleBorder(content) {
    return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
        >
        <Card sx={{ 
            width: 800, height: 35,
            mt: 1,
            pb: 2,
            boxShadow: 3, borderRadius: '5px'
        }}>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {content.content}
                </Typography>
            </CardContent>
        </Card>
    </Box>
    );
}