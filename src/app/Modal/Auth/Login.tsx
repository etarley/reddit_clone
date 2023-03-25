import { authModalState } from '@/app/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        name='email'
        placeholder='email'
        type='email'
        onChange={onChange}
        _focus={{
          border: '1px solid',
          borderColor: 'blue.500',
          outline: 'none',
        }}
        mb={2}
      ></Input>
      <Input
        mb={2}
        required
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        name='password'
        placeholder='password'
        type='password'
        onChange={onChange}
        _focus={{
          border: '1px solid',
          borderColor: 'blue.500',
          outline: 'none',
        }}
      ></Input>
      <Button type='submit' mt={2} width='100%' height={'36px'} mb={2}>
        {' '}
        Log In{' '}
      </Button>
      <Flex justify='center' align='center' fontSize='10pt'>
        <Text mr={1}>New here?</Text>
        <Text
          color='blue.500'
          cursor='pointer'
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: 'signup' }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
