import React from 'react';
import { VStack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import BtnUserName from './ui/BtnUserName';
import MainBoxTitle from './ui/MainBoxTitle';
import { Spacer } from '@chakra-ui/react';

const MainBox = (props) => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="md" borderRadius="xs">
          <VStack>
            <MainBoxTitle />
            <Spacer />
            <Spacer />
            <BtnUserName />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBox;
