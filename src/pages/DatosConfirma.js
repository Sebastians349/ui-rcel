import React from 'react';
import { Stack, HStack } from '@chakra-ui/layout';
import BtnAtras from '../components/ui/BtnAtras';
import BtnImprimir from '../components/ui/BtnImprimir';
const DatosConfirma = () => {
  return (
    <Stack
      direction={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      height="auto"
    >
      <HStack padding={1}>
        <BtnAtras hacia="/DatosOperacion" />
        <BtnImprimir />
      </HStack>
    </Stack>
  );
};

export default DatosConfirma;
