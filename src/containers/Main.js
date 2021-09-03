import React from 'react';
import { Box, Stack, Center, Wrap, WrapItem } from '@chakra-ui/layout';
import MainBox from '../components/MainBox';
import UserBox from '../components/UserBox';

const Main = () => {
  return (
    <Stack direction={['column', 'row']} spacing="24px" h="75vh">
      <UserBox />
      <MainBox />
    </Stack>
  );
};

export default Main;
