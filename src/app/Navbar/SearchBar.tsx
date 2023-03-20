import { SearchIcon } from '@chakra-ui/icons';
import {
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';

type SearchBarProps = {
  user: any;
};

const SearchBar: React.FC<SearchBarProps> = ({ user }) => {
  return (
    <Flex flexGrow={1} mr={2} align={'center'}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' mb={1} />
        </InputLeftElement>
        <Input
          placeholder='Search Reddit'
          fontSize={'10pt'}
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'gray.100',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          height='34px'
          bg={'gray.50'}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchBar;