'use client';
import { Button } from '@chakra-ui/react';
import React from 'react';

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant={'outline'}
        h='28px'
        display={{ base: 'none', sm: 'flex' }}
        w={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => console.log('Log In')}
      >
        Log In
      </Button>
      <Button
        h='28px'
        display={{ base: 'none', sm: 'flex' }}
        w={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => console.log('Signed Up')}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
