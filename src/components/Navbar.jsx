import * as React from 'react';

import logo from '../img/dmartinaLogo.jpg';

import { AppBar, Box, Toolbar, IconButton, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#241623',
    },
    secondary: {
      main: '#000000',
    },
  },
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar sx={{ height: 62 }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar src={logo} sx={{ width: 55, height: 55, mt: -0.5 }}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}