/*
 * @Author: bugdr
 * @Date: 2022-06-25 11:04:51
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 09:21:27
 * @FilePath: \blog-next\layouts\index.tsx
 * @Description:
 */
import Carousel from '@components/Carousel';
import { AppShell, Button, useMantineTheme } from '@mantine/core';
import { checkTokenAction } from '@store/modules/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutAsideBar from './asidebar';
import LayoutFooter from './footer';
import LayoutHeader from './header';
import LayoutNavBar from './navbar';

// 整夜页面的布局，头部公共，尾部公共，中间替换组件
const LayoutApp = ({ children }: any) => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  // 触发获取用户信息的
  useEffect(() => {
    dispatch(checkTokenAction());
  }, []);
  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<LayoutHeader></LayoutHeader>}
        footer={<LayoutFooter></LayoutFooter>}
      >
        {children}
      </AppShell>
    </>
  );
};

export default LayoutApp;
