import Carousel from '@components/Carousel';
import { AppShell, Button, useMantineTheme } from '@mantine/core';
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
        header={<LayoutHeader></LayoutHeader>}
        navbar={<LayoutNavBar></LayoutNavBar>}
        aside={<LayoutAsideBar></LayoutAsideBar>}
        footer={<LayoutFooter></LayoutFooter>}
      >
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <div>12</div>
        <Button className="bg-dark-700 text-black" color="pink">
          登录
        </Button>
      </AppShell>
    </>
  );
};

export default LayoutApp;
