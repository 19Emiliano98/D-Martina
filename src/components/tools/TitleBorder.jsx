import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TitleBorder(content) {

    console.log(content);

    return (
    <Box
        component="form"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '1%', ml: '10%',
        }}
        noValidate
        autoComplete="off"
        >
        <Card sx={{ 
            width: 800, height: 35, 
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