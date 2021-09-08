import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { GoChevronRight } from 'react-icons/go';

const BtnGenerico = props => {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        width="300px"
        textAlign="left"
        leftIcon={<GoChevronRight />}
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
