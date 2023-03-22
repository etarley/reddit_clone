import AuthModal from '@/app/Modal/Auth/AuthModal';
import React from 'react';
import AuthButtons from './AuthButtons';

type ReightContentProps = {
  user: any;
};

const ReightContent: React.FC<ReightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <div className='flex items-center'>
        <AuthButtons />
      </div>
    </>
  );
};
export default ReightContent;
