import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                mt: 7, ml: 20
            }}>
                <Card sx={{ width: 800, height: 400, backgroundColor: '#D0CD9466' }}>
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
                        <Typography variant="body2" color="text.secondary">
                            Correo electronico: dmartina@desusweb.com
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Contacto