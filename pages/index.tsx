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
  Box,
  Button,
  Badge,
  Card,
  Grid,
  Image,
  useMantineTheme,
  Text,
  Title,
  Container,
} from '@mantine/core';
import { motion, useViewportScroll } from 'framer-motion';
import LeftCard from '@components/LeftCard';
import RightCard from '@components/RightCard';
import AppletCard from '@components/RightCard/AppletCard';
import OfficialAccountCard from '@components/RightCard/OfficialAccountCard';
import MusicCard from '@components/RightCard/MusicCard';
import HotTagsCard from '@components/RightCard/HotTagsCard';
import NoticeCard from '@components/RightCard/NoticeCard';
import Article from '@locales/lang/zh-CN/article';
import { getArticleList } from '@api/article';
import { ResponseCode } from '@utils/enums/ResponseCode';
import dayjs from 'dayjs';
import { GiTimeBomb } from 'react-icons/gi';
import { FaRegEye } from 'react-icons/fa';
import { RiMessage3Fill } from 'react-icons/ri';
import { IoIosThumbsUp } from 'react-icons/io';

const Home: NextPage = () => {
  // 获取屏幕滚动的边界，第一个card到大屏幕边界的时候出发固定
  const leftContentCard = useRef<any>();
  const mainContent = useRef<any>();
  const rightContentCard = useRef<any>();
  const [rightHiddenCard, setRightHiddenCard] = useState(false);
  // 屏幕滚动监听
  const onWindowScrollListen = () => {
    const scrolledTop = document.documentElement.scrollTop;
    console.log('scrolledTop', scrolledTop);

    // 屏幕滚动到400,侧边栏就改为fixed定位
    if (scrolledTop >= 400 && leftContentCard.current !== undefined) {
      leftContentCard.current.style.position = 'fixed';
      leftContentCard.current.style.top = '70px';
      leftContentCard.current.style.zIndex = 99;
      mainContent.current.style.marginLeft = `${leftContentCard.current.offsetWidth + 112}px`;
      articleSignBoxRef.current.style.position = 'fixed';
      articleSignBoxRef.current.style.top = '60px';
      articleSignBoxRef.current.style.zIndex = 99;
    } else if (scrolledTop < 400) {
      leftContentCard.current.style.position = '';
      articleSignBoxRef.current.style.position = '';
      mainContent.current.style.marginLeft = '';
    }
    if (scrolledTop >= 960 && rightContentCard.current !== undefined) {
      rightContentCard.current.style.position = 'fixed';
      rightContentCard.current.style.top = '70px';
      rightContentCard.current.style.right = '16px';
      rightContentCard.current.style.zIndex = 99;
      mainContent.current.style.marginRight = `${rightContentCard.current.offsetWidth + 112}px`;
      setRightHiddenCard(true);
    } else if (scrolledTop < 960) {
      rightContentCard.current.style.position = '';
      mainContent.current.style.marginRight = '';
      setRightHiddenCard(false);
    }
  };
  /**
   * 标记按钮的颜色
   * {
   *    articleAll：全部，
   *    articleTop：置顶文章，
   *    articleLately：最近文章，
   *    articleMostPreview：最多预览
   *  }
   */
  const [articleSign, setArticleSign] = useState('articleAll');
  // 文章的切换按钮ref
  const articleSignBoxRef = useRef<any>();
  // 切换不同的按钮，固定不同的状态
  const handleChangeArticle = (key: string) => {
    setArticleSign(key);
  };
  // 获取所有文章列表
  const [articleListData, setArticleListData] = useState([]);
  // 初始化页面参数
  const [pageParams, setPageParams] = useState({
    page: 1,
    size: 10,
  });
  const getArticleData = async (args: any) => {
    const params = { ...args };
    const { result, code } = await getArticleList(params);
    if (code === ResponseCode.SUCCESS) {
      setArticleListData(result.contents);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onWindowScrollListen);
    window.onresize = function () {
      onWindowScrollListen();
    };
    getArticleData(pageParams);
  }, [pageParams]);

  return (
    <>
      <section className="md:flex">
        {/* 左侧 */}
        <div className="w-64 mr-4 md:ml-24 bg-dark-100" ref={leftContentCard}>
          {/* 用户卡片 */}
          <LeftCard />
        </div>
        {/* 中间模块 */}
        <section className="md:flex-1 mr-4" ref={mainContent}>
          <Box className="flex items-center mb-4" ref={articleSignBoxRef}>
            {Article.articleSignList.map((item) => {
              return (
                <Button
                  key={item.key}
                  onClick={() => handleChangeArticle(item.key)}
                  sx={(theme) => ({
                    backgroundColor: `${
                      articleSign === item.key ? theme.colors.orange[8] : theme.colors.gray[5]
                    } !important`,
                    color: `${
                      articleSign === item.key ? theme.colors.cyan[0] : theme.colors.gray[9]
                    }`,
                    '&:hover': {
                      color: 'red',
                    },
                  })}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
          <motion.div>
            {articleListData && articleListData.length
              ? articleListData.map((item: any) => {
                  return (
                    <Card className="mb-4 h-56" shadow="lg" key={item.id}>
                      <Card.Section>
                        <Grid>
                          <Grid.Col span={5} className="relative">
                            <Image
                              src={item.cover}
                              alt={item.title}
                              height={240}
                              className="absolute top-0 left-0 bottom-0 object-fill"
                            />
                          </Grid.Col>
                          <Grid.Col span={7}>
                            <Container className="flex flex-col p-2">
                              <Title order={4} className="mb-2">
                                {item.title}
                              </Title>
                              <Title order={6} className="mb-2">
                                {item.summary}
                                <span className="ml-4 text-blue-500 cursor-pointer">阅读更多</span>
                              </Title>

                              <Box className="flex items-center ">
                                {item.labels && item.labels.length
                                  ? item.labels.map((lab: any) => {
                                      return (
                                        <Badge
                                          key={item}
                                          className="mr-2"
                                          size="md"
                                          radius="xl"
                                          color="teal"
                                          variant="gradient"
                                          gradient={{ from: 'orange', to: 'red' }}
                                          component="a"
                                        >
                                          {lab}
                                        </Badge>
                                      );
                                    })
                                  : null}
                              </Box>
                              <Box className="flex items-center absolute bottom-2">
                                <Text className="mr-2 flex items-center">
                                  <GiTimeBomb className="mr-1" />
                                  {dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss')}
                                </Text>
                                <Text className="mr-2 flex items-center">
                                  <FaRegEye className="mr-1" />
                                  {item.viewCount}
                                </Text>
                                <Text className="mr-2 flex items-center">
                                  <RiMessage3Fill className="mr-1" />6
                                </Text>
                                <Text className="flex items-center">
                                  <IoIosThumbsUp className="mr-1" />
                                  12
                                </Text>
                              </Box>
                            </Container>
                          </Grid.Col>
                        </Grid>
                      </Card.Section>
                    </Card>
                  );
                })
              : null}
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
