import React from 'react';
import { Stack, HStack } from '@chakra-ui/layout';
import MainBoxFull from '../components/MainBoxFull';
import UserBoxFull from '../components/UserBoxFull';

const MenuPpal = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="88vh"
    >
      <UserBoxFull />
      <MainBoxFull />
    </Stack>
  );
};

export default MenuPpal;
