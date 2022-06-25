import Carousel from '@components/Carousel';
import { AppShell, Button, useMantineTheme } from '@mantine/core';
import LayoutAsideBar from './asidebar';
import LayoutFooter from './footer';
import LayoutHeader from './header';
import LayoutNavBar from './navbar';

// 整夜页面的布局，头部公共，尾部公共，中间替换组件
const LayoutApp = ({ children }: any) => {
  const theme = useMantineTheme();
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
