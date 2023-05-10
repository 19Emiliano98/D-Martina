import Drawerstucked from '../components/DrawerStucked.jsx';
import TitleBorder from '../components/tools/TitleBorder.jsx';
import Cards from '../components/Cards.jsx';
import Pagination from '../components/tools/Pagination.jsx';

import Box from '@mui/material/Box';

function Home() {
    return (
        <Box>
            <Drawerstucked />
            <TitleBorder content={"Productos destacados"}/>
            <Cards />
            <Pagination />
        </Box>
    );
}

export default Home;