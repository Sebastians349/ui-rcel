import React from 'react';
import { VStack, Center, Heading, Wrap, WrapItem } from '@chakra-ui/layout';
import UserName from './UserName';
const MainBox = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="xl" borderRadius="xl">
          <VStack>
            <Heading
              fontSize="xs"
              fontWeight="medium"
              textTransform="uppercase"
              color="purple.600"
            >
              Seleccione la empresa a representar
            </Heading>
            <UserName />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBox;
