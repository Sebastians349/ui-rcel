import { Link } from '@chakra-ui/react';
import {
  Stack,
  Center,
  Heading,
  Spacer,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/layout';
import { Link as ReachLink } from 'react-router-dom';
import React from 'react';
import { Image } from '@chakra-ui/image';
import { ColorModeSwitcher } from '../lib/ColorModeSwitcher';

const MainHeader = () => {
  return (
    <HStack
      justify="space-between"
      boxShadow="xs"
      p="2"
      borderBottom="1px"
      borderBottomColor="gray.400"
    >
      <Link href="/home">
        <Heading fontSize="3xl" textTransform="uppercase">
          <Image
            w="125px"
            objectFit="fill"
            alt="logo de afip"
            src="logo_afip.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Heading>
      </Link>
      <Spacer />
      <Stack
        fontWeight="semibold"
        direction={['column', 'row']}
        justifyContent="center"
      >
        <Link alignSelf="center" as={ReachLink} to="/home">
          Inicio
        </Link>
        <Link alignSelf="center">Documentación</Link>
        <Link alignSelf="center">Ayuda</Link>
      </Stack>
      <Spacer />
      <Center>
        <VStack>
          <Text borderBottom="1px" fontWeight="bold">
            RCEL
          </Text>
          <Text fontSize="xx-small">
            <Center>COMPROBANTES EN LINEA</Center>
          </Text>
        </VStack>
        <ColorModeSwitcher justifySelf="flex-start" />
      </Center>
    </HStack>
  );
};

export default MainHeader;
