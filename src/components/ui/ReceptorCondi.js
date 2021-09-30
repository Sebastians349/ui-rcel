import React from 'react';
import { VStack, Container, Heading, Spacer } from '@chakra-ui/layout';
import { CheckboxGroup, Checkbox } from '@chakra-ui/checkbox';
const ReceptorCondi = () => {
  return (
    <Container maxW="md" centerContent>
      <Heading
        fontSize="small"
        fontWeight="semibold"
        textTransform="uppercase"
        color="blue.600"
        textAlign="center"
      >
        Condiciones de venta{' '}
      </Heading>
      <Spacer />
      <CheckboxGroup defaultValue={['contado']}>
        <VStack alignItems="left" padding={3}>
          <Checkbox value="contado">Contado</Checkbox>
          <Checkbox value="debito">Tarjeta de débito</Checkbox>
          <Checkbox value="credito">Tarjeta de crédito</Checkbox>
          <Checkbox value="cuenta corriente">Cuenta Corriente</Checkbox>
          <Checkbox value="cheque">Cheque</Checkbox>
          <Checkbox value="ticket">Ticket</Checkbox>
          <Checkbox value="otra">Otra</Checkbox>
        </VStack>
      </CheckboxGroup>
    </Container>
  );
};

export default ReceptorCondi;
