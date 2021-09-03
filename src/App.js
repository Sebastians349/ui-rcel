import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box border="1px" h="100vh">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
