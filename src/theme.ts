// 1. Import `extendTheme`
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#ff3600',
    },
  },
  fonts: {
    Body: 'Open Sans, sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.200',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
      defaultProps: {
        variant: 'solid',
      },
    },
  },
});
