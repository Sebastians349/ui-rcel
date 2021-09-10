import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Main />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
