/*
 * @Author: bugdr
 * @Date: 2022-06-25 09:06:48
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-26 08:08:22
 * @FilePath: \blog-next\pages\index.tsx
 * @Description:
 */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { useMantineTheme } from '@mantine/core';
import Carousel from '@components/Carousel';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <section>
        <div>首页</div>
      </section>
    </>
  );
};

export default Home;
