import { Box, Spacer } from '@chakra-ui/layout';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box h="12vh" borderTop="1px" borderTopColor="gray.400">
      <Flex justifyContent="space-around">
        <Text>Fecha</Text>
        <Spacer />
        <Text>Autenticado por Administración General De Ingresos Públicos</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
