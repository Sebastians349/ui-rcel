import React from 'react';
import { Text, VStack, HStack, Stack, Divider } from '@chakra-ui/layout';

const FacturaSubHeader = props => {
  return (
    <Stack>
      <HStack justify="space-between">
        <Text fontSize="xx-small" fontWeight="semibold">
          Facturado desde: {props.fecha} hasta: {props.fecha}
        </Text>
      </HStack>
      <HStack>
        <VStack>
          <Text fontSize="xx-small" fontWeight="semibold">
            Cuit: {props.cuitR}
          </Text>
          <Text fontSize="xx-small" fontWeight="semibold">
            Condicion frente al IVA:
          </Text>{' '}
          <Text fontSize="xx-small" fontWeight="semibold">
            Condicion de venta:
          </Text>
        </VStack>
        <Divider orientation="vertical" color="gray.200" />
        <VStack>
          <Text fontSize="xx-small" fontWeight="semibold">
            Apellido y Nombre / Razón social:
          </Text>
          <Text fontSize="xx-small" fontWeight="semibold">
            Domicilio:
          </Text>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default FacturaSubHeader;
