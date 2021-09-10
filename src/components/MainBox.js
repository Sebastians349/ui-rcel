import React from 'react';
import { VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnUserName from './ui/BtnUserName';
import MainBoxTitle from './ui/MainBoxTitle';

const MainBox = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="xl" borderRadius="xl">
          <VStack>
            <MainBoxTitle />
            <BtnUserName />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBox;
