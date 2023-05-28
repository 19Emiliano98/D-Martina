import * as React from 'react';

import { Box, Stack, Card, CardContent, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';

const SobreNosotros = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 6, ml: 23
            }}>
                <BackButton />
                <TitleBorder content={"Sobre Nosotros"}/>
            </Box>
            
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 7, ml: 20
            }}>
                <Card sx={{ width: 800, height: 400, backgroundColor: '#D0CD9466' }}>
                    <CardContent>
                        <Stack sx={{ justifyContent: 'center' }} direction= 'row' spacing={2}>
                            <RocketLaunchIcon sx={{ mt: -0.5, fontSize: '2.5rem'}}/>
                            <Typography gutterBottom variant="h5" component="div">
                                Sobre Nosotros
                            </Typography>
                        </Stack>
                        <Typography sx={{ mt: 4 ,mb: 3}} variant="body2" color="text.secondary">
                            ¡Bienvenidos a D Martina! Somos un bazar que ofrece una amplia variedad de productos 
                            de moda y decoración de alta calidad a precios accesibles. También fabricamos nuestra 
                            propia línea de ropa, diseñada para ser elegante, cómoda y asequible.
                        </Typography>
                        <Typography sx={{ mb: 3}} variant="body2" color="text.secondary">
                            En D Martina, estamos comprometidos con la satisfacción de nuestros clientes. 
                            Nuestro equipo apasionado y experimentado trabaja duro para brindar una experiencia de 
                            compra única, en la que encontrarás artículos exclusivos que no se encuentran en ningún otro lugar
                        </Typography>
                        <Typography sx={{ mb: 3}} variant="body2" color="text.secondary">
                            Además, estamos comprometidos con la sostenibilidad y el medio ambiente, 
                            por lo que utilizamos materiales de alta calidad y procesos de fabricación responsables.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Esperamos que disfrutes navegando en nuestro bazar y descubriendo todo lo que tenemos 
                            para ofrecer. Gracias por visitarnos en D Martina, ¡esperamos verte pronto!
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default SobreNosotros