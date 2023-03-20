import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type ReightContentProps = {
  user: any;
};

const ReightContent: React.FC<ReightContentProps> = ({ user }) => {
  return (
    <>
      {/* {<AuthModal />} */}
      <Flex justify={'center'} align={'center'}>
        <AuthButtons></AuthButtons>
      </Flex>
    </>
  );
};
export default ReightContent;
