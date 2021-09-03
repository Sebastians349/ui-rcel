import React from 'react';
import { Center, Wrap, WrapItem } from '@chakra-ui/layout';
const MainBox = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="md" borderRadius="xl">
          main Box
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBox;
