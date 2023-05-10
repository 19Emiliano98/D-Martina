import React from 'react'

import Box from '@mui/material/Box';

import DrawerStucked from '../components/DrawerStucked.jsx';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import BackButton from '../components/tools/BackButton.jsx';


const SobreNosotros = () => {
    return (
        <Box>
            <DrawerStucked />
            <Box>
                <BackButton />
                <TitleBorder content={"Sobre Nosotros"}/>
            </Box>
        </Box>
    )
}

export default SobreNosotros