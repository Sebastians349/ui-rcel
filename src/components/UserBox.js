import React, { useState } from 'react';
import { Wrap, VStack, WrapItem, Center, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import UserName from './UserName';
import UserId from './UserId';

const UserBox = () => {
  const handleChange = e => e.target.value;
  console.log(handleChange);
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
            <Input
              size="xs"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
            ></Input>
            ;<Button size="xs">Ingresar</Button>;
            {/* CHECK simplifique compos para el input */}
            {/* <UserId /> */}
            {/* <UserName /> */}
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBox;
