import Navbar from './components/Navbar.jsx';
import Drawerstucked from './components/DrawerStucked.jsx';
import SearchBar from './components/tools/SearchBar.jsx';
import Cards from './components/Cards.jsx';
import Pagination from './components/tools/Pagination.jsx';

import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <Navbar />
      <Drawerstucked />
      <SearchBar />
      <Cards />
      <Pagination />
    </Box>
  );
}

export default App;
