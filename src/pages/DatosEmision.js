import React from 'react';
import {
  Center,
  VStack,
  Stack,
  Container,
  Heading,
  Spacer,
  HStack,
  Text,
} from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import UserBoxFull from '../components/UserBoxFull';
import BtnSelFecha from '../components/ui/BtnSelFecha';
import BtnConceptos from '../components/ui/BtnConceptos';

const DatosEmision = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="85vh"
    >
      <UserBoxFull />
      <Center w="400px" h="280px" boxShadow="xl" borderRadius="xl">
        <VStack>
          <Container maxW="md" centerContent>
            <Heading
              fontSize="small"
              fontWeight="semibold"
              textTransform="uppercase"
              color="purple.600"
              textAlign="center"
            >
              Datos de emisión. Paso 1 de 4.
            </Heading>
          </Container>
          <Spacer />
          <Spacer />
          <HStack alignItems="center">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              seleccione fecha{' '}
            </Text>
            <BtnSelFecha />
          </HStack>
          <HStack alignItems="center">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              conceptos a incluir{' '}
            </Text>
            <Spacer />
            <BtnConceptos />
          </HStack>
          <Spacer />
          <Spacer />
          <HStack spacing={10}>
            <BtnAtras hacia="/PtosDeVenta" />
            <BtnAdelante hacia="/DatosReceptor" />
          </HStack>
        </VStack>
      </Center>
    </Stack>
  );
};

export default DatosEmision;
