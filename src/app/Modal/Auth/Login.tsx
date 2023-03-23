import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

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
        mb={2}
        onChange={onChange}
      ></Input>
      <Input
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
      ></Input>
      <Button type='submit' mt={2} width='100%' height={'36px'} mb={2}>
        {' '}
        Log In{' '}
      </Button>
    </form>
  );
};
export default Login;
