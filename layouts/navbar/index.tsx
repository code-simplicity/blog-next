import { Navbar, Text } from '@mantine/core';
import { useState } from 'react';

const LayoutNavBar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Text className="text-yellow-800">
          <span className="!text-yellow-800">Application navbar</span>
        </Text>
      </Navbar>
    </>
  );
};

export default LayoutNavBar;
