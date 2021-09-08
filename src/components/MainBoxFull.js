import React from 'react';
import { VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnComprobantes from './ui/BtnComprobantes';
import BtnConsultas from './ui/BtnConsultas';
import BtnGenerico from './ui/BtnGenerico';

const MainBoxFull = props => {
  return (
    <Wrap>
      <WrapItem>
        <Center padding={4} boxShadow="xl" borderRadius="xl">
          <VStack>
            <BtnComprobantes />
            <BtnConsultas />
            <BtnGenerico name="Datos Adicionales del comprobante" />
            <BtnGenerico name="ABM - Puntos de venta" />
            <BtnGenerico />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBoxFull;
