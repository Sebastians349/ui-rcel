import React from 'react';
import { Stack } from '@chakra-ui/layout';
import MainBoxFull from '../components/MainBoxFull';
import UserBoxFull from '../components/UserBoxFull';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const MenuPpal = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="auto"
      p={10}
    >
      <UserBoxFull />
      <MainBoxFull />
    </Stack>
  );
};

export default MenuPpal;
