/*
 * @Author: bugdr
 * @Date: 2022-06-25 09:06:48
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 16:42:40
 * @FilePath: \blog-next\pages\_app.tsx
 * @Description:
 */
import '../styles/globals.less';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import type { ButtonStylesParams } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import LayoutApp from '@layouts/index';
import { Provider } from 'react-redux';
import { persister, store } from '@store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NotificationsProvider } from '@mantine/notifications';

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
            'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
          },
          shadows: {
            md: '1px 1px 3px rgba(0,0,0,.25)',
            xl: '5px 5px 3px rgba(0,0,0,.25)',
          },
        }}
        styles={{
          Button: (theme, params: ButtonStylesParams) => ({
            root: { height: 36, padding: '0 26px', backgroundColor: 'orange' },
            filled: {
              color: theme.colors[params.color || theme.primaryColor][6],
              '&:hover': {
                color: theme.colors[params.color || theme.primaryColor][1],
              },
            },
            outline: {
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            },
          }),
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <NotificationsProvider position="top-right" zIndex={2077} autoClose={3000}>
              <LayoutApp>
                <Component {...pageProps} />
              </LayoutApp>
            </NotificationsProvider>
          </PersistGate>
        </Provider>
      </MantineProvider>
    </>
  );
}
