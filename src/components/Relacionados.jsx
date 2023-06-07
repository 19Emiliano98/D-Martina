import React from 'react';

import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import Slider from 'react-slick';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Relacionados = (data) => {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    const related = data.relacionados
    
    const carouselRender = related.map(( p, index ) => (
        <Card 
            sx={{ 
                height: 400,
                mt: 3, mb: 7,
                background: '#D0CD9466'
            }}
            key={ index }
        >
            <CardMedia
                component="img"
                height="150"
                src={`https://dmartinablancohogar.com.ar/${p.prod_imagen}`}
                alt={p.prod_imagen}
                sx={{
                    objectFit: "contain"
                }}
            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {p.prod_nombre}
                </Typography>
            </CardContent>
            <CardActions sx={{ background: '#241623', borderRadius: '10px'}}>
                <Button sx={{ color: '#FFFFFF', px: '60px' }} size="small">
                    <WhatsAppIcon sx={{ fontSize: '1rem', mb: '2px', mr: '5px' }}/>
                    <Typography sx={{ fontSize: '0.75rem' }} variant='caption'>
                        Whatsapp
                    </Typography>
                </Button>
            </CardActions>
            <CardActions>
                <Button 
                    href={`/detalles/${p.prod_slug}`} 
                    sx={{ color: '#241623' }} 
                    size="small"
                >
                    Detalles
                </Button>
            </CardActions>
        </Card>
    ))

    return (
        <Slider {...carouselSettings}>
            {carouselRender}
        </Slider>
    );
};

export default Relacionados;
