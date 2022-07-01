/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:28:38
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:51:37
 * @FilePath: \blog-next\components\RightCard\AppletCard\index.tsx
 * @Description:小程序
 */
import { Box, Card, Image, Text } from '@mantine/core';
import { GiHappySkull } from 'react-icons/gi';

const AppletCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Box
          className="flex items-center"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.orange[7],
          })}
        >
          <GiHappySkull className="mr-2 text-xl" />
          <Text className="" size="md">
            小程序
          </Text>
        </Box>
        <Card.Section className="p-2">
          <Image src="/gongzhonghao.png" height={240} alt="公众号" />
        </Card.Section>
      </Card>
    </>
  );
};

export default AppletCard;
