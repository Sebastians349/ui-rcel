import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="100vh" bgColor="red.100" p={3}>
          <Header bgColor="red.800">
            <ColorModeSwitcher justifySelf="flex-end" />
          </Header>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
