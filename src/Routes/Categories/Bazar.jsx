import TitleBorder from '../../components/tools/TitleBorder.jsx';
import Cards from '../../components/Cards.jsx';

import Box from '@mui/material/Box';

function Bazar() {
    return (
        <div>
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 3, ml: 23
            }}>
                <TitleBorder content={"Bazar"}/>
            </Box>
            <Cards />
        </div>
    );
}

export default Bazar;