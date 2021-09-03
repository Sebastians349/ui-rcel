import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh">
        <Header />
        <Main />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
