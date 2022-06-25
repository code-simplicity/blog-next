import AppLogo from '@components/Application/AppLogo';
import Carousel from '@components/Carousel';
import { Burger, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

const LayoutHeader = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Header fixed height={60} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
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
      </Header>
      <div className="mb-12">
        <Carousel></Carousel>
      </div>
    </>
  );
};

export default LayoutHeader;
