import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from './components/Sidebar.jsx';

import Home from './Routes/Home.jsx';
import Detalles from './Routes/Detalles.jsx';
import SobreNosotros from './Routes/SobreNosotros.jsx';
import Contacto from './Routes/Contacto.jsx';

import Bazar from './Routes/Categories/Bazar.jsx';
import Blanqueria from './Routes/Categories/Blanqueria';
import Camping from './Routes/Categories/Camping';
import Electrodomesticos from './Routes/Categories/Electrodomesticos';
import Varios from './Routes/Categories/Varios';

import Box from '@mui/material/Box';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    }
  }
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/inicio" element={<Home />}/>
            <Route path="/detalles/:data" element={<Detalles />}/>
            <Route path="/nosotros" element={<SobreNosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            
            <Route path="/bazar" element={<Bazar />}/>
            <Route path="/blanqueria" element={<Blanqueria />}/>
            <Route path="/camping" element={<Camping />}/>
            <Route path="/electrodomesticos" element={<Electrodomesticos />}/>
            <Route path="/varios" element={<Varios />}/>
            
            <Route path="*" element={<Navigate to='/inicio' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
