import { Input } from '@chakra-ui/input';
import {
  Container,
  Divider,
  Heading,
  Text,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';
import BtnSiNo from './BtnSiNo';
import BtnTipoComp from './BtnTipoComp';

const ReceptorFooter = () => {
  return (
    <Container size="md" fontSize="small">
      <Heading
        fontSize="small"
        fontWeight="semibold"
        textTransform="uppercase"
        color="blue.600"
        textAlign="center"
        padding={1}
      >
        Compradores
      </Heading>
      <Divider borderColor="gray.200" />
      <HStack>
        <Text fontSize="small" padding={2}>
          ¿El comprobante se emite a más de 1 comprador?
        </Text>
        <Center padding={2}>
          <BtnSiNo />
        </Center>
      </HStack>
      <Heading
        fontSize="small"
        fontWeight="semibold"
        textTransform="uppercase"
        color="blue.600"
        textAlign="center"
        padding={2}
      >
        Comprobantes asociados
      </Heading>
      <Divider borderColor="gray.200" />
      <HStack alignItems="center">
        <VStack padding={1} alignItems="flex-start">
          <Text fontSize="xx-small" textAlign="center">
            Tipo Comp.
          </Text>
          <BtnTipoComp />
        </VStack>
        <VStack padding={1}>
          <Text textAlign="left">Pto. Vta</Text>
          <Input size="xs" />
        </VStack>
        <VStack padding={1}>
          <Text textAlign="left">Comprobante</Text>
          <Input size="xs" />
        </VStack>
        <VStack padding={1}>
          <Text textAlign="left" placeholder="01/01/01">
            Fecha Emisión
          </Text>
          <Input size="xs" />
        </VStack>
      </HStack>
    </Container>
  );
};

export default ReceptorFooter;
