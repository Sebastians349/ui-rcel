import React from 'react';
import {
  Center,
  VStack,
  StackDivider,
  Container,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/layout';
import BtnIva from './BtnIva';
import BtnDni from './BtnDni';
import BtnDomic from './BtnDomic';
import BtnEmail from './BtnEmail';

const ReceptorMain = () => {
  const titulos = [
    'Condición frente al IVA',
    'Tipo de documento',
    'Domicilio comercial',
    'E-mail',
    // lo pase como array, para una futura funcionalidad que ahora no recuerdo 😶
  ];
  return (
    <Center>
      <VStack
        p={5}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Container maxW="md" centerContent>
          <Heading
            fontSize="small"
            fontWeight="semibold"
            textTransform="uppercase"
            color="purple.600"
            textAlign="center"
          >
            Datos del Receptor. <br /> Paso 2 de 4.
          </Heading>
        </Container>
        <HStack justify="space-between">
          <Text alignSelf="flex-end" fontWeight="semibold" fontSize="small">
            {titulos[0]}
          </Text>
          <BtnIva />
        </HStack>
        <HStack justify="space-between">
          <Text alignSelf="flex-end" fontWeight="semibold" fontSize="small">
            {titulos[1]}
          </Text>
          <BtnDni />
        </HStack>
        <HStack justify="space-between">
          <Text alignSelf="flex-end" fontWeight="semibold" fontSize="small">
            {titulos[2]}
          </Text>
          <BtnDomic />
        </HStack>
        <HStack justify="space-between">
          <Text alignSelf="flex-end" fontWeight="semibold" fontSize="small">
            {titulos[3]}
          </Text>
          <BtnEmail />
        </HStack>
      </VStack>
    </Center>
  );
};

export default ReceptorMain;
