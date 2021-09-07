import React from 'react';
import { Wrap, VStack, WrapItem, Center, Text } from '@chakra-ui/layout';
import UserName from './UserName';
import UserId from './UserId';

const UserBox = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="auto" boxShadow="md" borderRadius="xl">
          <VStack padding="5">
            <Text
              fontWeight="semibold"
              fontSize="smaller"
              textTransform="uppercase"
            >
              Usuario
            </Text>
            <UserId />
            <UserName />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBox;
