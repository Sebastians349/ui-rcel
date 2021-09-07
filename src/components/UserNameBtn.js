import React from 'react';
import { Text } from '@chakra-ui/layout';
import { Button, Link, ExternalLinkIcon } from '@chakra-ui/react';
const UserNameBtn = () => {
  return (
    <Button>
      <Text color="gray.500" fontWeight="semibold" fontSize="xs">
        <Link href="#">ROGELIO ROLDAN</Link>
      </Text>
    </Button>
  );
};

export default UserNameBtn;
