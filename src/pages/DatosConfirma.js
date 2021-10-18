import React from 'react';
import { Stack, HStack, VStack } from '@chakra-ui/layout';
import BtnAtras from '../components/ui/BtnAtras';
import BtnImprimir from '../components/ui/BtnImprimir';
import Factura from '../components/ui/Factura';
const DatosConfirma = () => {
  return (
    <Stack
      direction={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      height="85vh"
    >
      <VStack padding={3}>
        <Factura />|
        <HStack justify="space-evenly" p={3}>
          <BtnAtras hacia="/DatosOperacion" />
          <BtnImprimir />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default DatosConfirma;
