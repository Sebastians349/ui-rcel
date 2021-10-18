import React from 'react';
import { Text } from '@chakra-ui/layout';
import { Button, Link } from '@chakra-ui/react';
import { BsChevronDoubleRight } from 'react-icons/bs';

import { Link as ReachLink } from 'react-router-dom';

const UserNameBtn = props => {
  return (
    <Link as={ReachLink} to="/MenuPpal">
      <Button
        loadingText="Loading"
        spinnerPlacement="start"
        rightIcon={<BsChevronDoubleRight />}
      >
        <Text color="gray.500" fontWeight="semibold" fontSize="xs">
          {props.categ}{' '}
        </Text>
      </Button>
    </Link>
  );
};

export default UserNameBtn;
