import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import BtnUnidades from './BtnUnidades';

const OperacionInputs = () => {
  return (
    <HStack padding={5} alignItems="flex-end" w="max-content">
      <Input size="xs"></Input>
      <Input size="xs"></Input>
      <Input size="xs" placeholder="1"></Input>
      {/* <BtnUnidades /> */}
      <Input size="xs"></Input>
      <Input size="xs"></Input>
      <Input size="xs"></Input>
      <Button variant="outline" size="xs">
        X
      </Button>
    </HStack>
  );
};

export default OperacionInputs;
