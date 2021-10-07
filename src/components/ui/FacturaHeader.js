import React from 'react';
import { Stack, Text, VStack, HStack, Divider } from '@chakra-ui/layout';

const FacturaHeader = props => {
  return (
    <Stack>
      <Text textAlign="center" fontWeight="semibold">
        ORIGINAL - Factura C
      </Text>
      <HStack justifyContent="space-between">
        <VStack
          fontWeight="semibold"
          fontSize="xx-small"
          alignItems="flex-start"
        >
          <Text>Razon Social:</Text>
          <Text>Domicilio Comercial: </Text>
          <Text>Condicion Frente al IVA: Responsable Monotributo</Text>
          <Text>Cuit: {props.userId}</Text>
        </VStack>
        <Divider orientation="vertical" color="gray.200" />
        <Stack>
          <VStack
            fontWeight="semibold"
            fontSize="xx-small"
            alignItems="flex-start"
          >
            <Text>Pto de venta:{props.caca}</Text>
            <Text>Fecha de Emisión: </Text>
            <Text>Ingresos Brutos: </Text>
            <Text>Fecha inicio actividades: </Text>
          </VStack>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default FacturaHeader;
