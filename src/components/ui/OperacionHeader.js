import React from 'react';
import { HStack, Heading, Stack, Divider, Text } from '@chakra-ui/layout';

const OperacionHeader = () => {
  return (
    <Stack w="auto">
      <Heading
        fontSize="small"
        fontWeight="semibold"
        textTransform="uppercase"
        color="purple.600"
        textAlign="center"
      >
        Datos de emisión. <br /> Paso 3 de 4.
      </Heading>
      <Divider color="gray.200" />
      <HStack
        padding={1}
        alignItems="flex-end"
        justifyContent="space-between"
        fontWeight="normal"
        color="purple.600"
        fontSize="md"
      ></HStack>
    </Stack>
  );
};

export default OperacionHeader;
