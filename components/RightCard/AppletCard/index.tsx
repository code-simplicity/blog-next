/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:28:38
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:51:37
 * @FilePath: \blog-next\components\RightCard\AppletCard\index.tsx
 * @Description:小程序
 */
import { Badge, Button, Card, Group, Text } from '@mantine/core';

const AppletCard = () => {
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4">
        <Text size="sm">小程序</Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </>
  );
};

export default AppletCard;
