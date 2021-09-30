import React from 'react';
import {
  Center,
  Box,
  VStack,
  Stack,
  StackDivider,
  Container,
  Heading,
  Spacer,
  HStack,
  Text,
} from '@chakra-ui/layout';
import BtnAdelante from '../components/ui/BtnAdelante';
import BtnAtras from '../components/ui/BtnAtras';
import BtnIva from '../components/ui/BtnIva';

const DatosReceptor = props => {
  const titulos = [
    'condicion frente al iva',
    'Tipo y nro de documento',
    'domicilio comercial',
    'email',
  ];
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="85vh"
    >
      <Center boxShadow="xl" borderRadius="xl">
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
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              {titulos[0]}
            </Text>
            <BtnIva />
          </HStack>
          <HStack justify="space-between">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              {titulos[1]}
            </Text>
            <BtnIva />
          </HStack>
          <HStack justify="space-between">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              {titulos[2]}
            </Text>
            <BtnIva />
          </HStack>
          <HStack justify="space-between">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              {titulos[3]}
            </Text>
            <BtnIva />
          </HStack>

          <HStack spacing={10}>
            <BtnAtras hacia="/DatosEmision" />
            <BtnAdelante />
          </HStack>
        </VStack>
      </Center>
    </Stack>
  );
};

export default DatosReceptor;
