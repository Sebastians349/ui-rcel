import React from 'react';
import { Stack } from '@chakra-ui/layout';
import MainBox from '../components/MainBox';
import UserBox from '../components/UserBox';

const Main = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      justifyContent="space-evenly"
      alignItems="center"
      height="80vh"
    >
      {/* <UserBoxFull />
      <MenuPpal /> */}
      <UserBox />
      <MainBox />
    </Stack>
  );
};

export default Main;
