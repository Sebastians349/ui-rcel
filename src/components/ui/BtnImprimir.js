import React from 'react';
import { Button } from '@chakra-ui/button';
import { AiOutlinePrinter } from 'react-icons/ai';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import AlertaOk from './AlertaOk';

const BtnImprimir = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        leftIcon={<AiOutlinePrinter />}
      >
        Generar Comprobante
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{<AlertaOk />}</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <Center>
            <ModalFooter>
              <Button
                variant="outline"
                leftIcon={<BsChevronDoubleLeft />}
                mr={3}
                onClick={onClose}
              >
                Volver
              </Button>
              <Button
                onClick={() => alert('Prenda la impresora...😑')}
                variant="outline"
                leftIcon={<AiOutlinePrinter />}
              ></Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};
export default BtnImprimir;
