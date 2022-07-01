/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:26:09
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:53:02
 * @FilePath: \blog-next\components\RightCard\OfficialAccountCard\index.tsx
 * @Description:公众号卡片
 */
import { Badge, Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { FaOldRepublic } from 'react-icons/fa';

const OfficialAccountCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Box
          className="flex items-center mb-2"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.orange[7],
          })}
        >
          <FaOldRepublic className="mr-2 text-xl" />
          <Text className="" size="md">
            公众号
          </Text>
        </Box>
        <Card.Section>
          <Image src="/gongzhonghao.png" height={240} alt="公众号" />
        </Card.Section>
      </Card>
    </>
  );
};

export default OfficialAccountCard;
