import React from 'react';
import { Text } from '@chakra-ui/layout';

const UserId = () => {
  const userId = Math.trunc(Math.random() * 10000000);
  return (
    <Text fontSize="small" color="gray.600">
      {userId}
    </Text>
  );
};

export default UserId;
