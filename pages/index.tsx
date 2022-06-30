/*
 * @Author: bugdr
 * @Date: 2022-06-25 09:06:48
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 22:28:21
 * @FilePath: \blog-next\pages\index.tsx
 * @Description:
 */
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';
import {
  useMantineTheme,
  Card,
  Image,
  Group,
  Text,
  Badge,
  Button,
  Avatar,
  Box,
  Tooltip,
} from '@mantine/core';
import { motion, useViewportScroll } from 'framer-motion';
import LeftCard from '@components/LeftCard';
import RightCard from '@components/RightCard';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  // 获取屏幕滚动的边界，第一个card到大屏幕边界的时候出发固定
  const leftContent = useRef<any>();
  const mainContent = useRef<any>();
  // 屏幕滚动监听
  const onWindowScrollListen = () => {
    const scrolledTop = document.documentElement.scrollTop;
    // 屏幕滚动到620,侧边栏就改为fixed定位
    if (scrolledTop >= 620 && leftContent.current !== undefined) {
      leftContent.current.style.position = 'fixed';
      leftContent.current.style.top = '70px';
      leftContent.current.style.zIndex = 99;
      mainContent.current.style.marginLeft = `${leftContent.current.offsetWidth + 112}px`;
    } else if (scrolledTop < 620) {
      leftContent.current.style.position = '';
      leftContent.current.style.overflow = 'hidden';
      mainContent.current.style.marginLeft = '';
    }
    console.log('scrolledTop', scrolledTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', onWindowScrollListen);
    window.onresize = function () {
      onWindowScrollListen();
    };
  }, []);
  return (
    <>
      <section className="flex">
        {/* 左侧 */}
        <div className="w-64 mr-4 md:ml-24 bg-dark-100" ref={leftContent}>
          {/* 用户卡片 */}
          <LeftCard />
        </div>
        {/* 中间模块 */}
        <section className="flex-1 mr-4" ref={mainContent}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gray-500 h-72"
          >
            中间
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gray-500 h-72"
          >
            中间
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gray-500 h-72"
          >
            中间
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gray-500 h-72"
          >
            中间
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 bg-gray-500 h-72"
          >
            中间
          </motion.div>
        </section>
        {/* 右侧模块 */}
        <section className="w-64 md:mr-24 ">
          <RightCard />
        </section>
      </section>
    </>
  );
};

export default Home;
