import React from 'react';
import { Container, Spacer, Text } from '@chakra-ui/layout';
import {
  Wrap,
  Center,
  VStack,
  Heading,
  WrapItem,
  HStack,
} from '@chakra-ui/react';
import BtnSeleccion from '../components/ui/BtnSeleccion';

const PtosDeVenta = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="xl" borderRadius="xl">
          <VStack>
            <Container maxW="sm" centerContent>
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
            <Spacer />
            <HStack alignItems="center">
              <Text
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize="small"
              >
                punto de venta a utilizar
              </Text>
              <BtnSeleccion />
            </HStack>
            <HStack alignItems="center">
              <Text
                alignSelf="flex-start"
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize="small"
              >
                tipo de comprobante
              </Text>
              <BtnSeleccion />
            </HStack>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default PtosDeVenta;
