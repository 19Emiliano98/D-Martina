/* eslint-disable */
import React, { useEffect, useState } from 'react';

import Pagination from './tools/Pagination.jsx';

import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ImgMediaCard(filter) {
    const { catFilter } = filter;
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    async function getProducts() {
        return fetch("https://dmartinablancohogar.com.ar/apiv2/productos/")
            .then(function(response) {
                return response.json();
            })
            .catch(err => {
                console.log('No se encuentra el elemento: ' + err);
            })
        }
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    useEffect(() => {
        getProducts().then(function(result) {
            const dataFetch = result.data.producto;
            if(catFilter == 'Bazar'){
                const res = dataFetch.filter(x => x.prod_cate_id == 1);
                setProducts(res)
            }else if(catFilter == 'Blanqueria'){
                const res = dataFetch.filter(x => x.prod_cate_id == 2);
                setProducts(res)
            }else if(catFilter == 'Camping'){
                const res = dataFetch.filter(x => x.prod_cate_id == 3);
                setProducts(res)
            }else if(catFilter == 'Electrodomesticos'){
                const res = dataFetch.filter(x => x.prod_cate_id == 4);
                setProducts(res)
            }else if(catFilter == 'Varios'){
                const res = dataFetch.filter(x => x.prod_cate_id == 5);
                setProducts(res)
            }else{
                setProducts(dataFetch)
            }
        });
    }, []);
	
	const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    
    const cardsRender = currentItems.map(( p, index ) => 
        <Card 
            sx={{ 
                width: 270, height: 295,
                mr:2.5, mb: 2.5,
                background: '#D0CD9466'
            }}
            key={index}
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
            <CardContent sx={{ display:'flex', justifyContent: 'center' }}>
                <Typography variant="body2" component="div" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {p.prod_nombre}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
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
            </Box>
        </Card>
    )
    
    return (
        <Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
                mt: 6, ml: 32
            }}>
                {cardsRender}
            </Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center'
            }}>
                <Pagination 
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    );
}