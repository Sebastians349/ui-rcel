import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Route } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Seleccion from './pages/Seleccion';
import MenuPpal from './pages/MenuPpal';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Route path="/home">
          <Seleccion />
        </Route>
        <Route path="/MenuPpal">
          <MenuPpal />
        </Route>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
