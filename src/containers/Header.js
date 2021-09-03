import React from 'react';
import {
  Flex,
  Image,
  Center,
  Heading,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../lib/ColorModeSwitcher';

const Header = () => {
  return (
    <Flex
      justify="space-around"
      boxShadow="xs"
      p="2"
      borderBottom="1px"
      borderBottomColor="gray.400"
    >
      <Center p="2">
        <Link href="/home">
          <Heading fontSize="3xl" textTransform="uppercase">
            <Image
              boxSize="50px"
              objectFit="contain"
              alt="logo de afip"
              src="logo_afip.png"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Heading>
        </Link>
      </Center>
      <Spacer />
      <Center>
        <VStack>
          <Text borderBottom="1px" fontWeight="bold">
            RCEL
          </Text>
          <Text fontSize="xx-small">COMPROBANTES EN LINEA</Text>
        </VStack>
        <ColorModeSwitcher justifySelf="flex-start" />
      </Center>
    </Flex>
  );
};

export default Header;
