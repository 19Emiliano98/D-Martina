import React, { useEffect, useState } from 'react';

import Pagination from './tools/Pagination.jsx';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const pageSize = 10;

export default function ImgMediaCard() {
    const [products, setProducts] = useState([]);
    
    async function getProducts() {
        return fetch("https://dmartinablancohogar.com.ar/apiv2/productos/")
            .then(function(response) {
                return response.json();
            })
        }
    
    const [ pagination, setPagination ] = useState({
        count: products.length,
        from: 0,
        to: pageSize
    })
    
    useEffect(() => {
        getProducts().then(function(result) {
            setProducts(result.data.producto)
        });
    }, [pagination.from, pagination.to]);
    
    const data = products.slice( pagination.from, pagination.to );
    const cantPages = Math.ceil(products.length / pageSize);
    
    const handlePageChange = ( event, page ) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;

        setPagination({ ...pagination, from: from, to: to })
    }

    const cardsRender = data.map(p => 
        <Card sx={{ 
            width: 260,
            mr:2.5, mb: 2.5,
            background: '#D0CD9466'
        }}>
            <CardMedia
                component="img"
                alt={p.prod_nombre}
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent sx={{ display:'flex', justifyContent: 'center' }}>
                <Typography variant="h6" component="div">
                    {p.prod_nombre}
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
                    <Button href="/detalles" sx={{ color: '#241623' }} size="small">Detalles</Button>
                </CardActions>
            </Box>
        </Card>
    )
    
    return (
        <Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
                mt: 4, ml: 29
            }}>
                {cardsRender}
            </Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center'
            }}>
                <Pagination onChange={handlePageChange} cantPages={cantPages}/>
            </Box>
        </Box>
    );
}