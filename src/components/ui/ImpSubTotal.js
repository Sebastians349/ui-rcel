import { Input } from '@chakra-ui/input';
import { VStack, Text } from '@chakra-ui/layout';

const ImpSubTotal = () => {
  return (
    <VStack>
      <Text fontWeight="normal" color="purple.600" fontSize="xs">
        Subtotal
      </Text>
      <Input size="xs"></Input>
    </VStack>
  );
};

export default ImpSubTotal;
