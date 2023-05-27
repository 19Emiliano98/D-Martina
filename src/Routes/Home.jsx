//import Drawerstucked from '../components/DrawerStucked.jsx';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import Cards from '../components/Cards.jsx';

import Box from '@mui/material/Box';

function Home() {
    return (
        <Box>
            {/* <Drawerstucked /> */}
            <Box sx={{
                display: 'flex', justifyContent: 'center',
                mt: 3, ml: 23
            }}>
                <TitleBorder content={"Productos destacados"}/>
            </Box>
            <Cards />
        </Box>
    );
}

export default Home;