import React from 'react';
import { Divider, HStack, VStack, Stack, Text } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/layout';

const Factura = props => {
  return (
    <Stack
      height="md"
      w="md"
      border="1px"
      borderColor="purple.300"
      divider={<StackDivider borderColor="gray.200" />}
      padding={1}
      align="stretch"
    >
      <Text textAlign="center" fontWeight="semibold">
        ORIGINAL - Factura C
      </Text>
      <HStack justifyContent="space-between">
        <VStack fontSize="xx-small" alignItems="flex-start">
          <Text>Razon Social:{props.caca}</Text>
          <Text>Domicilio Comercial: {props.domicilio}</Text>
          <Text>Condicion Frente al IVA: Responsable Monotributo</Text>
        </VStack>
        <Divider orientation="vertical" color="gray.200" />
        <Stack>
          <VStack fontSize="xx-small" alignItems="flex-start">
            <Text>Pto de venta:{props.caca}</Text>
            <Text>Fecha de Emisión: fasdfasd </Text>
            <Text>Cuit: adsfasdfas</Text>
            <Text>Ingresos Brutos: fasdfsdfdddddddddddddddddddddddd </Text>
            <Text>Fecha inicio actividades: dfadfa</Text>
          </VStack>
        </Stack>
      </HStack>
      <Text fontSize="xx-small">akakaka</Text>
      <Text fontSize="xx-small">akakaka</Text>
    </Stack>
  );
};

export default Factura;
