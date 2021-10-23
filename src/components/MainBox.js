import React, { useState } from 'react';
import { VStack, Center, Wrap, WrapItem, Heading } from '@chakra-ui/layout';
import BtnUserName from './ui/BtnUserName';
import { Spacer } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/react';

const MainBox = props => {
  const [user, setUser] = useState({
    nombre: '',
    cuit: '',
  });

  const handleInputChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Wrap>
      <WrapItem>
        <Center w="400px" h="280px" boxShadow="md" borderRadius="xs">
          <VStack>
            <Spacer />
            <FormControl id="cuit" isRequired>
              <FormLabel
                textAlign="center"
                fontWeight="semibold"
                fontSize="smaller"
                textTransform="uppercase"
              ></FormLabel>
              <Input
                name="nombre"
                type="text"
                size="md"
                placeholder="Ingrese su nombre
                "
                onChange={handleInputChange}
              />
              <Spacer />
              <Input
                name="cuit"
                type="number"
                size="md"
                placeholder="Ingrese su Cuit
                "
                onChange={handleInputChange}
              />
            </FormControl>
            <Spacer />
            <Heading
              fontSize="xs"
              fontWeight="semibold"
              textTransform="uppercase"
              color="purple.600"
            >
              Seleccione la empresa a representar
            </Heading>
            <Spacer />

            <BtnUserName
              textTransform="uppercase"
              user={user.nombre}
              cuit={user.cuit}
            />
          </VStack>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MainBox;
