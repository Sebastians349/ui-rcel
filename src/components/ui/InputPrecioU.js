import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
const InputPrecioU = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Precio Uni.
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default InputPrecioU;
