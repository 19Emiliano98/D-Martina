import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './Routes/Home.jsx';
import SobreNosotros from './Routes/SobreNosotros.jsx';
//import NotFound from './Routes/NotFound.jsx';

import Box from '@mui/material/Box';
import Navbar from './components/Navbar.jsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/inicio" element={<Home />}/>
            <Route path="/nosotros" element={<SobreNosotros />}/>
            <Route path="*" element={<Navigate to='/inicio' />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
