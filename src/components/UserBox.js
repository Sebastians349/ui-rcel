import React, { useState } from 'react';
import {
  Wrap,
  VStack,
  WrapItem,
  Center,
  Text,
  Spacer,
} from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

const UserBox = () => {
  const [user, setUser] = useState({
    nombre: '',
    cuit: '',
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="auto" boxShadow="md" borderRadius="xl">
          <VStack padding="5">
            <FormControl id="cuit" isRequired>
              <FormLabel
                textAlign="center"
                fontWeight="semibold"
                fontSize="smaller"
                textTransform="uppercase"
              >
                Cuit
              </FormLabel>
              <Input
                name="nombre"
                type="text"
                size="xs"
                placeholder="Ingrese su nombre
                "
                onChange={handleInputChange}
              />
              <Spacer />
              <Input
                name="cuit"
                type="number"
                size="xs"
                placeholder="Ingrese su Cuit
                "
                onChange={handleInputChange}
              />
            </FormControl>
            <Text textAlign="center">
              {user.nombre} <br />
              {user.cuit}
            </Text>
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UserBox;
