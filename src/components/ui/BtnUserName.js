import React from 'react';
import { Text } from '@chakra-ui/layout';
import { Button, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const UserNameBtn = () => {
  return (
    <Button>
      <Text color="gray.500" fontWeight="semibold" fontSize="xs">
        <Link as={ReachLink} to="/MenuPpal">
          ROGELIO ROLDAN
        </Link>
      </Text>
    </Button>
  );
};

export default UserNameBtn;
