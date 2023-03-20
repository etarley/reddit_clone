import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import RightContent from './RightContent/RightContent';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image src='/redditFace.svg' alt='logo' height='30px' />
        <Image
          src='/redditText.svg'
          alt='logo'
          height='46px'
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      <SearchBar user={''} />
      <RightContent user={''} />
      {/* 
      <Directorty />
      
      */}
    </Flex>
  );
};
export default Navbar;
