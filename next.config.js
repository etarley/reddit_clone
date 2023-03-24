/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    '@chakra-ui/react': {
      transform: '@chakra-ui/react/{{member}}',
    },
    '@chakra-ui/icons': {
      transform: '@chakra-ui/icons/{{member}}',
    },
  },
};

module.exports = nextConfig;
