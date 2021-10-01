import { Input } from '@chakra-ui/input';
import {
  Container,
  Stack,
  Divider,
  Heading,
  Text,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import React from 'react';

const DatosOperacion = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="auto"
    >
      <VStack boxShadow="md" borderRadius="xl" m={5}>
        <HStack padding={5}>
          <BtnAtras hacia="/DatosReceptor" />
          <BtnAdelante hacia="/DatosConfirma" />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default DatosOperacion;
