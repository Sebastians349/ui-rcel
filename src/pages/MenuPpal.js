import React from 'react';
import { Stack } from '@chakra-ui/layout';
import MainBoxFull from '../components/MainBoxFull';
import UserBoxFull from '../components/UserBoxFull';

const MenuPpal = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="85vh"
      p={10}
    >
      <UserBoxFull />
      <MainBoxFull />
    </Stack>
  );
};

export default MenuPpal;
