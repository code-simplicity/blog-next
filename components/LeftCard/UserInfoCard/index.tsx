/*
 * @Author: bugdr
 * @Date: 2022-06-30 14:21:06
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 14:47:02
 * @FilePath: \blog-next\components\LeftCard\UserInfoCard\index.tsx
 * @Description:用户分类的Card
 */
import { Avatar, Box, Card, Group, Image, Skeleton, Text, Tooltip } from '@mantine/core';
import { useSelector } from 'react-redux';

const UserInfoCard = () => {
  const { userInfo } = useSelector((store: any) => store.user);
  console.log('userInfo :>> ', userInfo);
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Card.Section>
          <Image src={userInfo.avatar} height={130} alt="card-left" />
          <Box className="flex items-center justify-center -mt-16 ">
            <Avatar
              className="w-20 h-20 rounded-full bg-gradient-to-bl"
              src={userInfo.avatar}
            ></Avatar>
          </Box>
          <Text className="mt-1 text-center text-red-600" size="md">
            {userInfo.userName}
          </Text>
          <Text className="mt-1 text-sm text-center text-blue-600">
            {userInfo.sign}
            未来不可变，过去不可变
          </Text>
        </Card.Section>
        <Group position="apart" className="my-2">
          <Box className="flex flex-col items-center">
            <Text weight={500}>111</Text>
            <Text weight={300} className="text-sm md:text-sm">
              文章数
            </Text>
          </Box>
          <Box className="flex flex-col items-center">
            <Text weight={500}>14</Text>
            <Text weight={500} className="text-sm md:text-sm">
              分类数
            </Text>
          </Box>
          <Box className="flex flex-col items-center">
            <Text weight={500}>1</Text>
            <Text weight={500} className="text-sm md:text-sm">
              评论数
            </Text>
          </Box>
          <Box className="flex flex-col items-center">
            <Text weight={500}>1</Text>
            <Text weight={500} className="text-sm md:text-sm">
              留言数
            </Text>
          </Box>
        </Group>
        <Group position="apart" className="my-2">
          <Box>
            <Tooltip label="微信" color="orange" withArrow>
              <Avatar className="w-10 h-10 rounded-full bg-gradient-to-bl"></Avatar>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Github" color="orange" withArrow>
              <Avatar className="w-10 h-10 rounded-full bg-gradient-to-bl"></Avatar>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="哔哩哔哩" color="orange" withArrow>
              <Avatar className="w-10 h-10 rounded-full bg-gradient-to-bl"></Avatar>
            </Tooltip>
          </Box>
        </Group>
      </Card>
    </>
  );
};

export default UserInfoCard;
