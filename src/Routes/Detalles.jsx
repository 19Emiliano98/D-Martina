/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';

import Relacionados from '../components/Relacionados.jsx';

const Detalles = () => {
    const [product, setProduct] = useState([]);
    const [relacionados, setRelacionados] = useState([]);
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
            setProduct([res.data.producto]);
            setRelacionados(res.data.relacionado);           
        });
    }, []);

    const cardsRender = product.map(( p, index ) => 
        <Card 
            sx={{ 
                display:'flex',
                width: 1000, height: 500, 
                backgroundColor: '#D0CD9466' 
            }} 
            key={ index }
        >
            <CardMedia
                component="img"
                height="500"
                sx={{ objectFit: "contain", minWidth: 500 }}
                image={`https://dmartinablancohogar.com.ar/${p.imagen[0].ruta}`}
                title={p.nombre}
            />
            <Box
                sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                    mt: 7
                }}
            >
                <CardContent>
                    <Typography 
                        sx={{ 
                            textAlign: 'center', mb: 3
                        }}
                        gutterBottom variant="h5" 
                        component="div">
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
                        background: '#241623', borderRadius: '10px', 
                        position: 'absolute', mt: 38
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
            </Box>
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

            <Box sx={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                width: 300,
                ml: '100vh'
            }}>
                <Relacionados relacionados={relacionados}/>
            </Box>
        </Box>
    )
};

export default Detalles;