import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ImgMediaCard() {
    const [users, setUsers] = useState([]);
    
    const getApiData = async () => {
        const res = await fetch(
        "https://dmartinablancohogar.com.ar/apiv2/productos/"
        ).then((response) => response.json());
        
        setUsers(res.data);
    };
    
    useEffect(() => {
        getApiData();
    }, []);
    
    console.log(users);
    
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
            mt: 4, ml: 29
        }}>
            hola
        </Box>
    );
}