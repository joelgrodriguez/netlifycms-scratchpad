import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/layout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    );
  }
}
