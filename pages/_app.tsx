/*
 * @Author: bugdr
 * @Date: 2022-06-25 09:06:48
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-01 07:57:27
 * @FilePath: \blog-next\pages\_app.tsx
 * @Description:
 */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import type { ButtonStylesParams, MantineThemeOverride } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import LayoutApp from '@layouts/index';
import { Provider } from 'react-redux';
import { persister, store } from '@store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NotificationsProvider } from '@mantine/notifications';

// 主题配置
const myTheme: MantineThemeOverride = {
  colorScheme: 'light', // 颜色场景
  primaryColor: 'orange', // 默认的主题颜色
  defaultRadius: 0, // 默认的圆角
  fontFamilyMonospace: 'Monaco, Courier, monospace', // 字体
  headings: { fontFamily: 'Greycliff CF, sans-serif' }, // 标题设置
  // 颜色
  colors: {
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f',
    ],
    pink: [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
    dark: [
      '#d5d7e0',
      '#acaebf',
      '#8c8fa3',
      '#666980',
      '#4d4f66',
      '#34354a',
      '#2b2c3d',
      '#1d1e30',
      '#0c0d21',
      '#01010a',
    ],
  },
  // 实体填充
  primaryShade: { light: 6, dark: 8 },
  shadows: {
    md: '1px 1px 3px #dedede3f',
    xl: '5px 5px 3px rgba(0,0,0,.25)',
  },
};

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
        theme={myTheme}
        defaultProps={{ Button: { color: 'red' }, Badge: { size: 'xl', radius: 0 } }}
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
                  theme.colorScheme === 'dark' ? theme.colors.orange[8] : theme.colors.pink[0],
                color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.pink[0],
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
