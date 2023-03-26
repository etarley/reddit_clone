import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Flex, Popover, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButton from './OAuthButton';

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <Modal isOpen={modalState.open} onClose={handleClose}>
      <Popover isLazy>
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
              <OAuthButton />
              <Text color='gray.500' fontWeight={700}>
                OR
              </Text>
              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Popover>
    </Modal>
  );
};
export default AuthModal;
