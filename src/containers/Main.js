import React from 'react';
import { Stack } from '@chakra-ui/layout';
import MainBox from '../components/MainBox';
import UserBox from '../components/UserBox';

const Main = () => {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="24px"
      h="75vh"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <UserBox />
      <MainBox />
    </Stack>
  );
};

export default Main;
