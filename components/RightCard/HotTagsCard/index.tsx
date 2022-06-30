/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:21:59
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:51:55
 * @FilePath: \blog-next\components\RightCard\HotTagsCard\index.tsx
 * @Description:热门标签的关键字
 */
import { Badge, Button, Card, Group, Text } from '@mantine/core';

const HotTagsCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Text size="sm">热门标签</Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </>
  );
};

export default HotTagsCard;
