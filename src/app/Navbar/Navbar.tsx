import Image from 'next/image';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <nav className='flex bg-white h-11 py-[6px] px-[12px] justify-around'>
      <div className='flex items-center'>
        <Image
          src='/redditFace.svg'
          alt='logo'
          width={32}
          height={32}
          className=''
          loading='lazy'
        />
        <Image
          src='/redditText.svg'
          alt='logo'
          width={57}
          height={18}
          className='sm:hidden '
          loading='lazy'
        />
      </div>
      <SearchBar user={''} />
      <RightContent user={''} />
      {/* 
      <Directorty />
      
      */}
    </nav>
  );
};
export default Navbar;
