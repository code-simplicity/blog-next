import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { useMantineTheme } from '@mantine/core';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div>首页</div>
    </>
  );
};

export default Home;
