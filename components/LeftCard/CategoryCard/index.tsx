/*
 * @Author: bugdr
 * @Date: 2022-06-30 14:21:14
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 21:01:06
 * @FilePath: \blog-next\components\LeftCard\CategoryCard\index.tsx
 * @Description:文章分类的card
 */
import { Button, Card, Group, Image } from '@mantine/core';
const CategoryCard = () => {
  return (
    <>
      <Card shadow="md" p="md" radius="md" className="relative overflow-auto h-72 z-999">
        <Image
          src="/left_bg.svg"
          alt="Norway"
          className="absolute inset-0 bg-opacity-25 bg-cover"
        />
        <Group position="apart" className="my-2 ">
          <Button fullWidth>全部分类</Button>
          <Button variant="outline" fullWidth>
            读书笔记
          </Button>
          <Button variant="outline" fullWidth>
            杂谈
          </Button>
          <Button variant="outline" fullWidth>
            前端
          </Button>
          <Button variant="outline" fullWidth>
            前端
          </Button>
          <Button variant="outline" fullWidth>
            前端
          </Button>
          <Button variant="outline" fullWidth>
            前端
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default CategoryCard;
