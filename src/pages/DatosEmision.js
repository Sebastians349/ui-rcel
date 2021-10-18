import React from 'react';
import {
  Center,
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
import UserBoxFull from '../components/UserBoxFull';
import BtnSelFecha from '../components/ui/BtnSelFecha';
import BtnConceptos from '../components/ui/BtnConceptos';

const DatosEmision = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="85vh"
    >
      <UserBoxFull />
      <Center w="400px" h="280px" boxShadow="md" borderRadius="xl">
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
              Datos de emisión. <br /> Paso 1 de 4.
            </Heading>
          </Container>

          <HStack alignItems="center">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              seleccione fecha{' '}
            </Text>
            <BtnSelFecha />
          </HStack>
          <HStack alignItems="center">
            <Text
              alignSelf="flex-end"
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize="small"
            >
              conceptos a incluir{' '}
            </Text>
            <Spacer />
            <BtnConceptos />
          </HStack>

          <HStack justify="space-evenly" p={3}>
            <BtnAtras hacia="/PtosDeVenta" />
            <BtnAdelante hacia="/DatosReceptor" />
          </HStack>
        </VStack>
      </Center>
    </Stack>
  );
};

export default DatosEmision;
