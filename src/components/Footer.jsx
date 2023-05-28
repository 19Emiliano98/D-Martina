import * as React from 'react';

import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bottomElement: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box sx={{ 
            display: "flex", justifyContent: "center",
            backgroundColor: "#241623", color: "white"
        }} className={classes.bottomElement}>
            ®2023 - Desarrollado por desusweb
        </Box>
    )
}

export default Footer