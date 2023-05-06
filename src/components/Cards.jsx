import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

export default function ImgMediaCard() {
    const test = [ 'Iguana', 'Perro', 'Gato', 'Hongo', 'Plato', 'Yory', 'Maxy', 'Rodri' ];
    const cantP = [];

    for (let i = 0; i < test.length; i++) {
        cantP.push(
            <Card sx={{ 
                    width: 260,
                    mr:2.5, mb: 2.5
                }}>
                <CardMedia
                    component="img"
                    alt={test[i]}
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {test[i]}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }


    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
            mt: 8, ml: 29
        }}>
            {cantP}
        </Box>
    );
}