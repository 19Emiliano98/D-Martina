import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from './components/Sidebar.jsx';

import Home from './Routes/Home.jsx';
import Detalles from './Routes/Detalles.jsx';
import SobreNosotros from './Routes/SobreNosotros.jsx';
import Contacto from './Routes/Contacto.jsx';

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
            <Route path="/detalles" element={<Detalles />}/>
            <Route path="/nosotros" element={<SobreNosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="*" element={<Navigate to='/inicio' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
