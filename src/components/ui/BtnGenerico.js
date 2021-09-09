import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

const BtnGenerico = props => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        width="300px"
        textAlign="left"
        leftIcon={props.icon}
        colorScheme="gray"
        variant="outline"
        boxShadow="xs"
        fontSize="sm"
      >
        {props.name}
      </Button>
    </Stack>
  );
};

export default BtnGenerico;
