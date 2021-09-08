import React from 'react';
import { VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnComprobantes from './ui/BtnComprobantes';
import BtnConsultas from './ui/BtnConsultas';
import BtnGenerico from './ui/BtnGenerico';
const botones = {
  datos: 'caca',
};
const MainBoxFull = props => {
  return (
    <Wrap>
      <WrapItem>
        <Center padding={4} boxShadow="xl" borderRadius="xl">
          <VStack>
            <BtnComprobantes />
            <BtnConsultas />
            <BtnGenerico name={datos} />
            <BtnGenerico />
            <BtnGenerico />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBoxFull;
