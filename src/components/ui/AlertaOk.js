import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const AlertaOk = props => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        ¡Comprobante generado!
      </AlertTitle>
      <AlertDescription maxWidth="sm" fontSize="sm">
        Imprimalo presionando el ícono de la impresora <br />
        Cierre esta ventana para volver a la pantalla anterior.
        <br /> O vuelva al Menú Principal para generar un nuevo comprobante.
      </AlertDescription>
    </Alert>
  );
};

export default AlertaOk;
