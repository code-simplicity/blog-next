import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { useMantineTheme } from '@mantine/core';
import LayoutApp from '../layouts/index';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <LayoutApp></LayoutApp>
    </>
  );
};

export default Home;
