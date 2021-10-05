import { Stack, HStack, VStack } from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import React from 'react';
import OperacionHeader from '../components/ui/OperacionHeader';
import OperacionFilaInputs from '../components/ui/OperacionFilaInputs';

const DatosOperacion = () => {
  return (
    <Stack
      direction={['column', 'row']}
      alignItems="center"
      justifyContent="center"
      height="auto"
    >
      <VStack boxShadow="md" borderRadius="xl" m={5}>
        <OperacionHeader />
        <VStack p={1}>
          <OperacionFilaInputs />
        </VStack>
        <HStack padding={5}>
          <BtnAtras hacia="/DatosReceptor" />
          <BtnAdelante hacia="/DatosConfirma" />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default DatosOperacion;
