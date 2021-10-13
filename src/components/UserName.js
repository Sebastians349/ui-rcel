import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

const UserName = () => {
  const [usuario, setUsuario] = useState('');
  const id = setUsuario;

  return <Input size="xs" placeholder="Ingrese su nombre"></Input>;
  <Button>Ingresar</Button>;
};

export default UserName;
