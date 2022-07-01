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
import AppletCard from '@components/RightCard/AppletCard';
import OfficialAccountCard from '@components/RightCard/OfficialAccountCard';
import MusicCard from '@components/RightCard/MusicCard';
import HotTagsCard from '@components/RightCard/HotTagsCard';
import NoticeCard from '@components/RightCard/NoticeCard';

const Home: NextPage = () => {
  // 获取屏幕滚动的边界，第一个card到大屏幕边界的时候出发固定
  const leftContentCard = useRef<any>();
  const mainContent = useRef<any>();
  const rightContentCard = useRef<any>();
  const [rightHiddenCard, setRightHiddenCard] = useState(false);
  // 屏幕滚动监听
  const onWindowScrollListen = () => {
    const scrolledTop = document.documentElement.scrollTop;
    // 屏幕滚动到620,侧边栏就改为fixed定位
    if (scrolledTop >= 620 && leftContentCard.current !== undefined) {
      leftContentCard.current.style.position = 'fixed';
      leftContentCard.current.style.top = '70px';
      leftContentCard.current.style.zIndex = 99;
      mainContent.current.style.marginLeft = `${leftContentCard.current.offsetWidth + 112}px`;
    } else if (scrolledTop < 620) {
      leftContentCard.current.style.position = '';
      leftContentCard.current.style.overflow = 'hidden';
      mainContent.current.style.marginLeft = '';
    }
    if (scrolledTop >= 1330 && rightContentCard.current !== undefined) {
      rightContentCard.current.style.position = 'fixed';
      rightContentCard.current.style.top = '70px';
      rightContentCard.current.style.right = '16px';
      rightContentCard.current.style.zIndex = 99;
      mainContent.current.style.marginRight = `${rightContentCard.current.offsetWidth + 112}px`;
      setRightHiddenCard(true);
    } else if (scrolledTop < 1330) {
      rightContentCard.current.style.position = '';
      rightContentCard.current.style.overflow = 'hidden';
      mainContent.current.style.marginRight = '';
      setRightHiddenCard(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onWindowScrollListen);
    window.onresize = function () {
      onWindowScrollListen();
    };
  }, []);
  return (
    <>
      <section className="md:flex">
        {/* 左侧 */}
        <div className="w-64 mr-4 md:ml-24 bg-dark-100" ref={leftContentCard}>
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
        <section className="w-72 md:mr-24" ref={rightContentCard}>
          {rightHiddenCard ? (
            <>
              <NoticeCard />
              <HotTagsCard />
              <MusicCard />
            </>
          ) : (
            <>
              <NoticeCard />
              <HotTagsCard />
              <MusicCard />
              <OfficialAccountCard />
              <AppletCard />
            </>
          )}

          {/* <RightCard /> */}
        </section>
      </section>
    </>
  );
};

export default Home;
