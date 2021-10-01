import React from 'react';
import { VStack, HStack, Stack } from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import ReceptorMain from '../components/ui/ReceptorMain';
import ReceptorCondi from '../components/ui/ReceptorCondi';
import ReceptorFooter from '../components/ui/ReceptorFooter';

const DatosReceptor = props => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="auto"
    >
      <VStack boxShadow="md" borderRadius="xl" m={5}>
        <ReceptorMain />
        <ReceptorCondi />
        <ReceptorFooter />
        <HStack padding={5}>
          <BtnAtras hacia="/DatosEmision" />
          <BtnAdelante hacia="/DatosOperacion" />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default DatosReceptor;
