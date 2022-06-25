import { AppShell, useMantineTheme } from '@mantine/core';
import LayoutAsideBar from './asidebar';
import LayoutFooter from './footer';
import LayoutHeader from './header';
import LayoutNavBar from './navbar';

const LayoutApp = () => {
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
        fixed
        header={<LayoutHeader></LayoutHeader>}
        navbar={<LayoutNavBar></LayoutNavBar>}
        aside={<LayoutAsideBar></LayoutAsideBar>}
        footer={<LayoutFooter></LayoutFooter>}
      >
        内容显示区域
      </AppShell>
    </>
  );
};

export default LayoutApp;
