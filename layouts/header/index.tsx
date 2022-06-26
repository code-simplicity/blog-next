/*
 * @Author: bugdr
 * @Date: 2022-06-25 11:13:03
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 08:11:44
 * @FilePath: \blog-next\layouts\header\index.tsx
 * @Description:
 */
import AppLogo from '@components/Application/AppLogo';
import Carousel from '@components/Carousel';
import Search from '@components/Header/Search';
import UserDropdown from '@components/Header/UserDropdown/UserDropdown';
import { Burger, Button, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LayoutHeader = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  console.log('router', router);
  return (
    <>
      <Header fixed height={60} p="md">
        <div className="flex items-center justify-between md:h-full">
          <div className="flex md:mr-24">
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
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Blog Post</a>
              </Link>
            </li>
          </div>
          <div>
            <Search></Search>
          </div>
          {/* 用户功能区 */}
          <div className="flex items-center">
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
