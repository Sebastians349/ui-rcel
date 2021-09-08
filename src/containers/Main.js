import React from 'react';
import { Stack } from '@chakra-ui/layout';
import MainBox from '../components/MainBox';
import UserBox from '../components/UserBox';
import UserBoxFull from '../components/UserBoxFull';
import MainBoxFull from '../components/MainBoxFull';

const Main = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="15px"
      padding={4}
      justifyContent="space-evenly"
      alignItems="center"
      height="85vh"
    >
      <UserBoxFull />
      <MainBoxFull />
    </Stack>
  );
};

export default Main;
