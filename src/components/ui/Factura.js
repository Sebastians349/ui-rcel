import React from 'react';
import { HStack, VStack, Stack, Text, Divider } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/layout';
import FacturaHeader from './FacturaHeader';
import FacturaSubHeader from './FacturaSubHeader';
import FacturaMain from './FacturaMain';
import FacturaFooter from './FacturaFooter';

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
      <FacturaHeader />
      <FacturaSubHeader />
      <FacturaMain />
      <FacturaFooter />
    </Stack>
  );
};

export default Factura;
