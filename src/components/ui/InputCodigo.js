import { Input } from '@chakra-ui/input';
import { Text, VStack } from '@chakra-ui/layout';
const InputCodigo = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Código
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default InputCodigo;
