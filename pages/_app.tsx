import '../styles/globals.less';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import LayoutApp from '@layouts/index';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>博客主页</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* 全局主题的配置 */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          primaryColor: 'orange',
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
          colors: {
            // Add your color
            'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            // or replace default theme color
            blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
          },
          shadows: {
            // other shadows (xs, sm, lg) will be merged from default theme
            md: '1px 1px 3px rgba(0,0,0,.25)',
            xl: '5px 5px 3px rgba(0,0,0,.25)',
          },
        }}
        styles={{ Button: { root: { fontWeight: 400 } } }}
      >
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </MantineProvider>
    </>
  );
}
