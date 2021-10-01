import React from 'react';
import { HStack, Heading, Stack, Divider, Text } from '@chakra-ui/layout';

const OperacionHeader = () => {
  return (
    <Stack>
      <Heading
        fontSize="small"
        fontWeight="semibold"
        textTransform="uppercase"
        color="purple.600"
        textAlign="center"
      >
        Datos de emisión. <br /> Paso 1 de 4.
      </Heading>
      <Divider color="gray.200" />
      <HStack
        padding={1}
        alignItems="flex-end"
        fontWeight="normal"
        color="purple.600"
        fontSize="md"
      >
        <Text>Código</Text>
        <Text>Producto/Servicio</Text>
        <Text>Cantidad</Text>
        <Text>Unidad/Medida</Text>
        <Text>% Bonificado</Text>
        <Text>Importe Bonificado</Text>
        <Text>Subtotal</Text>
        <Text>Eliminar</Text>
      </HStack>
    </Stack>
  );
};

export default OperacionHeader;
