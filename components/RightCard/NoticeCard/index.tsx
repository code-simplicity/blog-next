/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:35:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-01 08:17:25
 * @FilePath: \blog-next\components\RightCard\NoticeCard\index.tsx
 * @Description:公告卡片
 */
import { Badge, Box, Button, Card, Text } from '@mantine/core';
import { AiFillNotification } from 'react-icons/ai';

const NoticeCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4 h-36">
        <Box
          className="flex items-center mb-2"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.orange[7],
          })}
        >
          <AiFillNotification className="mr-2 text-xl" />
          <Text className="" size="md">
            最新公告
          </Text>
        </Box>
        <Box>
          <Text size="sm" className="">
            这是最新的内容，你应该遵守这个内容并且去实现,最新的消息就是你应该去执行最应该执行的内容
          </Text>
        </Box>
      </Card>
    </>
  );
};

export default NoticeCard;
