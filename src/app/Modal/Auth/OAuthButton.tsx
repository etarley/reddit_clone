import { Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const OAuthButton: React.FC = () => {
  return (
    <Flex w={'100%'} mb={4}>
      <Button w={'100%'} variant='oauth' mb={2}>
        <Image
          loading='lazy'
          src='/googlelogo.png'
          alt='google logo'
          width={20}
          height={20}
          className='mr-2'
        />
        Continue with Google
      </Button>
    </Flex>
  );
};
export default OAuthButton;
