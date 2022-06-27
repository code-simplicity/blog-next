/*
 * @Author: bugdr
 * @Date: 2022-06-25 11:13:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 14:14:30
 * @FilePath: \blog-next\layouts\header\index.tsx
 * @Description:
 */
import AppLogo from '@components/Application/AppLogo';
import Carousel from '@components/Carousel';
import Search from '@components/Header/Search';
import UserDropdown from '@components/Header/UserDropdown/UserDropdown';
import HorizontalMenu from '@components/Menu/HorizontalMenu';
import { Burger, Button, Header, MediaQuery, Menu, Text, useMantineTheme } from '@mantine/core';
import Routers from '@router/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LayoutHeader = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  // 路由表的封装
  return (
    <>
      <Header fixed height={60} className="lg:pl-36 md:pr-4 sm:px-2">
        <div className="flex items-center md:h-full">
          <div className="flex md:mr-6">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <AppLogo />
          </div>
          {/* 导航区域 */}
          <div className="flex flex-1">
            <HorizontalMenu Routers={Routers} />
          </div>
          <div>
            <Search></Search>
          </div>
          {/* 用户功能区 */}
          <div className="flex items-center truncate">
            <UserDropdown></UserDropdown>
          </div>
        </div>
      </Header>
      {/* 这里只有首页路由才可以显示 */}
      {router.pathname === '/' ? (
        <div>
          <Carousel></Carousel>
        </div>
      ) : null}
    </>
  );
};

export default LayoutHeader;
