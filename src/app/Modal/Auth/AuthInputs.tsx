import { authModalState } from '@/app/atoms/authModalAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <div className='flex flex-col ite w-full mt-1'>
      {modalState.view === 'login' ? <Login /> : <div>Sign Up</div>}
    </div>
  );
};
export default AuthInputs;
