import { Stack, HStack, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const FacturaFooter = props => {
  return (
    <Stack justify="flex-start">
      <HStack justify="space-evenly">
        <Image
          boxSize="50px"
          objectFit="contain"
          alt="logo de afip"
          src="logo_afip.png"
          fallbackSrc="https://via.placeholder.com/150"
        ></Image>
        <Text fontSize="xx-small">Comprobante autorizado</Text>
        <Text fontSize="xx-small">Pagina 1/1 </Text>
        <Text fontSize="xx-small">Cae nro:</Text>
      </HStack>
    </Stack>
  );
};

export default FacturaFooter;
