import React from 'react';
import { VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnComprobantes from './ui/BtnComprobantes';
const MainBoxFull = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center padding={4} boxShadow="xl" borderRadius="xl">
          <VStack>
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
            <BtnComprobantes />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBoxFull;
