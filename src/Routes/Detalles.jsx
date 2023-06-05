import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';

const Detalles = () => {
    let { data } = useParams();
    console.log(data);
    
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
                <Card sx={{ width: 1000, height: 600, backgroundColor: '#D0CD9466' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nombre producto
                        </Typography>
                        <Typography sx={{mb: 2}} variant="body2" color="text.secondary">
                            Descripción del producto:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ¡Obtén tu mochila juvenil premium de la marca D'MARTINA! Con apertura de doble cierre y bolsillos laterales y al frente, esta mochila es perfecta para llevar todo lo que necesitas. Confeccionada en nylon premium de grosor extra y con tira y asa reforzadas, esta mochila también cuenta con zippers metálicos y forro interno para una mayor durabilidad. 
                            Además, incluye 2 vasos plásticos con tapa y sorbete de la selección argentina. ¡No te pierdas esta increíble oferta!
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
            </Box>
        </Box>
    )
};

export default Detalles;