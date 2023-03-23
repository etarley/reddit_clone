'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import AuthButtons from './AuthButtons';

const AuthModal = dynamic(() => import('@/app/Modal/Auth/AuthModal'));

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
