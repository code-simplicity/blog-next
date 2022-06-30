/*
 * @Author: bugdr
 * @Date: 2022-06-30 14:21:14
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 14:30:03
 * @FilePath: \blog-next\components\LeftCard\CategoryCard\index.tsx
 * @Description:文章分类的card
 */
import { Button, Card, Group, Image } from '@mantine/core';

const CategoryCard = () => {
  return (
    <>
      <Card shadow="md" p="md" radius="md" className="relative overflow-auto h-72 z-999">
        <Image
          src="https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/blog-images/2022_05_22/png/977911704196485120.png"
          alt="Norway"
          height={500}
          className="absolute inset-0 bg-opacity-25 bg-cover"
        />
        <Group position="apart" className="my-2 ">
          <Button variant="outline" fullWidth>
            全部分类
          </Button>
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
          <Button variant="outline" fullWidth>
            前端
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default CategoryCard;
