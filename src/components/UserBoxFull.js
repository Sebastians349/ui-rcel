import React from 'react';
import { Wrap, VStack, WrapItem, Center, Text } from '@chakra-ui/layout';

const UserBoxFull = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="auto" boxShadow="md" borderRadius="xl">
          <VStack>
            <Text fontWeight="bold" fontSize="xs" textTransform="uppercase">
              Usuario
            </Text>
            <Text>259999994</Text>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBoxFull;
