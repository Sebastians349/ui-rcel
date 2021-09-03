import React from 'react';
import { Box, Stack, Center, Wrap, WrapItem } from '@chakra-ui/layout';

const Main = () => {
  return (
    <Stack direction={['column', 'row']} spacing="24px" h="75vh">
      <Wrap spacing="30px" align="center">
        <WrapItem>
          <Center w="180px" h="40px" boxShadow="md" borderRadius="xl">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="400px" h="280px" boxShadow="md" borderRadius="xl">
            Box 1
          </Center>
        </WrapItem>
      </Wrap>
    </Stack>
  );
};

export default Main;
