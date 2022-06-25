import AppLogo from '@components/Application/AppLogo';
import Carousel from '@components/Carousel';
import UserDropdown from '@components/Header/UserDropdown/UserDropdown';
import { Burger, Button, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

const LayoutHeader = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header fixed height={60} p="md">
        <div className="flex items-center md:h-full justify-between">
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
            <div>导航一</div>
            <div>导航一</div>
            <div>导航一</div>
            <div>导航一</div>
            <div>导航一</div>
          </div>
          {/* 用户功能区 */}
          <div className="flex items-center">
            <UserDropdown></UserDropdown>
          </div>
        </div>
      </Header>
      <div className="mb-12">
        <Carousel></Carousel>
      </div>
    </>
  );
};

export default LayoutHeader;
