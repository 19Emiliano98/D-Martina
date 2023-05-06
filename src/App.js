//import { Pagination } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import Drawerstucked from './components/DrawerStucked.jsx';
import SearchBar from './components/tools/SearchBar.jsx'

import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <Navbar />
      <Drawerstucked />
      <SearchBar />
      {/* <Pagination /> */}
    </Box>
  );
}

export default App;
