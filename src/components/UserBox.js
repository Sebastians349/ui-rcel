import React, { useState } from 'react';
import {
  Wrap,
  VStack,
  WrapItem,
  Center,
  Text,
  Spacer,
  Heading,
} from '@chakra-ui/layout';

const UserBox = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="auto" boxShadow="md" borderRadius="xl">
          <VStack padding="5">
            <Heading
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              textAlign="center"
            >
              <Center>Por favor. Ingrese sus datos.</Center>
            </Heading>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBox;
