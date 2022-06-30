/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:26:09
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:53:02
 * @FilePath: \blog-next\components\RightCard\OfficialAccountCard\index.tsx
 * @Description:公众号卡片
 */
import { Badge, Button, Card, Group, Text } from '@mantine/core';

const OfficialAccountCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Text size="sm">公众号卡片</Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </>
  );
};

export default OfficialAccountCard;
