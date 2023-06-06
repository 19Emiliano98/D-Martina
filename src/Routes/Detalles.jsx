/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';

const Detalles = () => {
    const [product, setProduct] = useState([]);
    let { data } = useParams();
    
    async function getProducts () {
        return fetch(`https://dmartinablancohogar.com.ar/apiv2/productos/${data}`)
            .then(function(res) {
                return res.json();
            })
            .catch(err => {
                console.log('No se encuentra el elemento: ' + err);
            });
        };
        
    useEffect(() => {
        getProducts().then((res) => {
            setProduct(res.data.producto);               
        });
    }, []);

    const test = [product]
console.log(test);

    const cardsRender = test.map(( p, index ) => 
        <Card sx={{ width: 1000, height: 600, backgroundColor: '#D0CD9466' }} key={index}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {p.nombre}
                </Typography>
                <Typography sx={{mb: 2}} variant="body2" color="text.secondary">
                    Descripción del producto:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {p.descripcion}
                </Typography>
            </CardContent>
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
            {/* <CardActions>
                <Button href="/detalles" sx={{ color: '#241623' }} size="small">Detalles</Button>
            </CardActions> */}
        </Card>
    )

    return (
        <Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 6, ml: 23
            }}>
                <BackButton />
                <TitleBorder content={"Detalles"}/>
            </Box>
            
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 5, ml: 23
            }}>
                {cardsRender}
            </Box>
        </Box>
    )
};

export default Detalles;