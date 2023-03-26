import { authModalState } from '@/app/atoms/authModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/clientApp';

const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errir, setErrir] = useState('');

  const setAuthModalState = useSetRecoilState(authModalState);
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signUpForm.password !== signUpForm.confirmPassword) {
      return;
    }
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
        name='confirmPassword'
        placeholder='confirm password'
        type='password'
        onChange={onChange}
        _focus={{
          border: '1px solid',
          borderColor: 'blue.500',
          outline: 'none',
        }}
      ></Input>
      <Button type='submit' mt={2} width='100%' height={'36px'} mb={2}>
        SIGN UP
      </Button>
      <Flex justify='center' align='center' fontSize='10pt'>
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color='blue.500'
          cursor='pointer'
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: 'login' }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
