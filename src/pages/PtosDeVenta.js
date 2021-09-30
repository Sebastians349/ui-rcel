import React from 'react';
import { Container, Spacer, Stack, Text } from '@chakra-ui/layout';
import {
  Center,
  VStack,
  Heading,
  HStack,
  StackDivider,
} from '@chakra-ui/react';
import BtnSeleccion from '../components/ui/BtnSeleccion';
import UserBoxFull from '../components/UserBoxFull';
import BtnTipoComp from '../components/ui/BtnTipoComp';
import BtnAtras from '../components/ui/BtnAtras';
import BtnAdelante from '../components/ui/BtnAdelante';

const PtosDeVenta = () => {
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
        <VStack
          p={5}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Container maxW="md" centerContent>
            <Heading
              fontSize="small"
              fontWeight="semibold"
              textTransform="uppercase"
              color="purple.600"
              textAlign="center"
            >
              Puntos de Venta y tipos de comprobantes <br /> habilitados para
              impresión
            </Heading>
          </Container>

          <HStack justify="space-between">
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              punto de venta a utilizar
            </Text>
            <BtnSeleccion />
          </HStack>
          <HStack justify="space-between">
            <Text
              alignSelf="flex-start"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              tipo de comprobante
            </Text>
            <BtnTipoComp />
          </HStack>

          <HStack justify="space-between">
            <BtnAtras hacia="/MenuPpal" />
            <BtnAdelante hacia="DatosEmision" />
          </HStack>
        </VStack>
      </Center>
    </Stack>
  );
};

export default PtosDeVenta;
