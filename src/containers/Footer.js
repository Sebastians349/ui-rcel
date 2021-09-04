import { Box, Spacer, Stack } from '@chakra-ui/layout';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const d = new Date();
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const fecha = d.toLocaleString('es-US', options);
  return (
    <Stack
      direction={['column', 'row']}
      h="10vh"
      spacing="24px"
      borderTop="1px"
      borderTopColor="gray.400"
      justifyContent="space-between"
      padding="3"
      alignItems="center"
    >
      <Text fontSize="small" fontWeight="semibold">
        {fecha}
      </Text>
      <Text fontSize="small" fontWeight="semibold">
        Autenticado por Administración General De Ingresos Públicos
      </Text>
    </Stack>
  );
};

export default Footer;
