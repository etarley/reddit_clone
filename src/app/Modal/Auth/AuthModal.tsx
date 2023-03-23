'use client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>
            {modalState.view === 'login'
              ? 'Log In'
              : modalState.view === 'resetPassword'
              ? 'Reset Password'
              : 'Sign Up'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems={'center'}
            justifyContent='center'
            pb={6}
          >
            <Flex
              direction='column'
              align='center'
              justify='center'
              width='70%'
            >
              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
