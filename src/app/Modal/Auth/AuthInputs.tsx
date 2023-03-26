import { authModalState } from '@/app/atoms/authModalAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <div className='flex flex-col ite w-full mt-1'>
      {modalState.view === 'login' ? <Login /> : <SignUp />}
    </div>
  );
};
export default AuthInputs;
