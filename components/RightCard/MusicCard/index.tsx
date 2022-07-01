/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:30:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:52:12
 * @FilePath: \blog-next\components\RightCard\MusicCard\index.tsx
 * @Description:音乐卡片
 */
import { Badge, Box, Button, Card, Group, Text, Image, Grid } from '@mantine/core';
import { GiMusicSpell } from 'react-icons/gi';

const MusicCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4 h-42">
        <Box
          className="flex items-center mb-2"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.orange[7],
          })}
        >
          <GiMusicSpell className="mr-2 text-xl" />
          <Text className="" size="md">
            音乐区
          </Text>
        </Box>
        <Card.Section className="px-2">
          <Grid columns={24} gutter="xs">
            <Grid.Col span={10}>
              <Image
                src="https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/app/blog-app.jpg"
                alt="Norway"
              />
            </Grid.Col>
            <Grid.Col span={14}>
              <div className="truncate text-sm">发如雪</div>
              <div className="break-all text-xs">周杰伦</div>
              <div className="absolute bottom-1">底部功能区</div>
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </>
  );
};

export default MusicCard;
