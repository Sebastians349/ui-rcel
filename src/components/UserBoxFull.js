import React from 'react';
import { Wrap, VStack, WrapItem, Center, Text } from '@chakra-ui/layout';
import UserId from './UserId';
import AgencyName from './AgencyName';

const UserBoxFull = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="auto" boxShadow="md" borderRadius="xl">
          <VStack padding={1}>
            <Text fontWeight="semibold" fontSize="xs" textTransform="uppercase">
              Usuario
            </Text>
            <UserId />
            <Text fontWeight="semibold" fontSize="xs" textTransform="uppercase">
              Representando
            </Text>
            <UserId />
            <Text fontWeight="semibold" fontSize="xs" textTransform="uppercase">
              Dependencia
            </Text>
            <AgencyName />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBoxFull;
