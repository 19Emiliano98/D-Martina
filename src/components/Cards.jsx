import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ImgMediaCard() {
    const test = [ 'Iguana', 'Perro', 'Gato', 'Hongo', 'Plato', 'Yory', 'Maxy', 'Rodri' ];
    const cantP = [];

    for (let i = 0; i < test.length; i++) {
        cantP.push(
                <Card sx={{ 
                        width: 260,
                        mr:2.5, mb: 2.5,
                        background: '#D0CD9466'
                    }}>
                    <CardMedia
                        component="img"
                        alt={test[i]}
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent sx={{ display:'flex', justifyContent: 'center' }}>
                        <Typography variant="h6" component="div">
                            {test[i]}
                        </Typography>
                    </CardContent>
                    <Box sx={{ 
                            display: 'flex', flexDirection:'column', alignItems: 'center'
                        }}>
                        <CardActions 
                            sx={{ 
                                background: '#241623', borderRadius: '10px' 
                            }}>
                            <Button 
                                sx={{ 
                                    color: '#FFFFFF', px: '60px'
                                }} 
                                size="small"
                            >
                                <WhatsAppIcon sx={{ fontSize: '1rem', mb: '2px', mr: '5px' }}/>
                                <Typography sx={{ fontSize: '0.75rem' }} variant='caption'>
                                    Whatsapp
                                </Typography>
                            </Button>
                        </CardActions>
                        <CardActions>
                            <Button sx={{ color: '#241623' }} size="small">Detalles</Button>
                        </CardActions>
                    </Box>
                </Card>
        );
    }


    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
            mt: 4, ml: 29
        }}>
            {cantP}
        </Box>
    );
}