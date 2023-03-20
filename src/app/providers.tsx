'use client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
