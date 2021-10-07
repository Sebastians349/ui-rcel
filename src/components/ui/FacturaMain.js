import { Text, HStack, Stack } from '@chakra-ui/layout';
import React from 'react';

const FacturaMain = () => {
  return (
    <Stack>
      <HStack
        fontWeight="bold"
        fontSize="x-small"
        justify="space-between"
        bg="gray.400"
      >
        <Text>Codigo</Text>
        <Text>Producto/Servicio</Text>
        <Text>Cantidad</Text>
        <Text>U.Medida</Text>
        <Text>Precio U.</Text>
        <Text>% Bonif</Text>
        <Text>Imp. Bonif.</Text>
        <Text>Subtotal</Text>
      </HStack>
      <HStack fontWeight="bold" fontSize="x-small" justify="space-between">
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </HStack>
    </Stack>
  );
};

export default FacturaMain;
