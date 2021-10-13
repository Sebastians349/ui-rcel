import React from 'react';
import { Text } from '@chakra-ui/layout';

const UserId = () => {
  const id = Math.trunc(Math.random() * 10000000);
  return (
    <Text fontSize="small" color="gray.600">
      {id}
    </Text>
  );
};

export default UserId;
