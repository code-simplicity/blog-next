/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:35:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 22:31:40
 * @FilePath: \blog-next\components\RightCard\NoticeCard\index.tsx
 * @Description:公告卡片
 */
import { Badge, Box, Button, Card, Group, Text } from '@mantine/core';
import { AiFillNotification } from 'react-icons/ai';

const NoticeCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4 ">
        <Box className="flex items-center text-red-400">
          <AiFillNotification className="mr-2 text-xl" />
          <Text className="" size="md">
            最新公告
          </Text>
        </Box>
        <Text size="sm" className="">
          这是最新的内容，你应该遵守这个内容并且去实现
        </Text>
      </Card>
    </>
  );
};

export default NoticeCard;
