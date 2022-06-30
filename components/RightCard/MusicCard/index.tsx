/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:30:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:52:12
 * @FilePath: \blog-next\components\RightCard\MusicCard\index.tsx
 * @Description:音乐卡片
 */
import { Badge, Button, Card, Group, Text } from '@mantine/core';

const MusicCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Text size="sm">音乐卡片</Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </>
  );
};

export default MusicCard;
