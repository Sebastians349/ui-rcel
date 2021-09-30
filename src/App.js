import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import Footer from './containers/Footer';
import Seleccion from './pages/Seleccion';
import MenuPpal from './pages/MenuPpal';
import PtosDeVenta from './pages/PtosDeVenta';
import MainHeader from './containers/MainHeader';
import DatosEmision from './pages/DatosEmision';
import DatosReceptor from './pages/DatosReceptor';
import DatosOperacion from './pages/DatosOperacion';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <MainHeader />
        <Switch>
          <Route path="/home">
            <Seleccion />
          </Route>
          <Route path="/MenuPpal">
            <MenuPpal />
          </Route>
          <Route path="/PtosDeVenta">
            <PtosDeVenta />
          </Route>
          <Route path="/DatosEmision">
            <DatosEmision />
          </Route>
          <Route path="/DatosReceptor">
            <DatosReceptor />
          </Route>
          <Route path="/DatosOperacion">
            <DatosOperacion />
          </Route>
        </Switch>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
