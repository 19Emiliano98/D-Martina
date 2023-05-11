import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import DrawerStucked from '../components/DrawerStucked.jsx';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';


const Contacto = () => {
    return (
        <Box>
            <DrawerStucked />
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 6, ml: 23
            }}>
                <BackButton />
                <TitleBorder content={"Contacto"}/>
            </Box>
            
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 5, ml: 20
            }}>
                <Card sx={{ width: 800, height: 600, backgroundColor: '#D0CD9466' }}>
                    <CardContent>
                        <Stack sx={{ justifyContent: 'center' }} direction= 'row' spacing={2}>
                            <ContactSupportIcon sx={{ mt: -0.5, fontSize: '2.5rem'}}/>
                            <Typography gutterBottom variant="h5" component="div">
                                Contacto
                            </Typography>
                        </Stack>
                        <Typography sx={{ mt: 2 ,mb: 2}} variant="body2" color="text.secondary">
                            Si querés contactarnos, te dejamos nuestros datos:
                        </Typography>
                        <Typography sx={{ mb: 2}} variant="body2" color="text.secondary">
                            Teléfono: +54 333333333
                        </Typography>
                        <Typography sx={{ mb: 2}} variant="body2" color="text.secondary">
                            Dirección: Av del Paso 1585, Rosario, Santa Fe
                        </Typography>
                        <Typography sx={{ mb: 2}} variant="body2" color="text.secondary">
                            Correo electronico: dmartina@desusweb.com
                        </Typography>
                    </CardContent>
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <iframe 
                            title="myIframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.26960240072245!2d-60.68831979119469!3d-32.94272787320217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acb1b424d623%3A0xaea2f8d6431e0070!2sMendoza%204670%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1683764878989!5m2!1ses!2sar"
                            width="500" height="300"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Contacto