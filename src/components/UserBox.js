import React from 'react';
import { Wrap, WrapItem, Center } from '@chakra-ui/layout';

const UserBox = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="40px" boxShadow="md" borderRadius="xl">
          Box 2
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBox;
