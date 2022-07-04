/*
 * @Author: bugdr
 * @Date: 2022-06-30 21:21:59
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-04 21:17:38
 * @FilePath: \blog-next\components\RightCard\HotTagsCard\index.tsx
 * @Description:热门标签的关键字
 */
import { Badge, Box, Button, Card, Group, Text } from '@mantine/core';
import { GiPriceTag } from 'react-icons/gi';
import { TagCloud } from 'react-tagcloud';

const HotTagsCard = () => {
  const data = [
    { value: 'jQuery', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'Flow', count: 30 },
  ];

  const customRenderer = (tag: any, size: any, color: any) => (
    <div
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 50}em`,
        border: `1px solid ${color}`,
        margin: '4px',
        padding: '4px',
        display: 'inline-block',
        color: `${color}`,
      }}
    >
      {tag.value}
    </div>
  );
  return (
    <>
      <Card shadow="md" p="sm" radius="md" className="mb-4 h-72">
        <Box
          className="flex items-center mb-2"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.orange[7],
          })}
        >
          <GiPriceTag className="mr-2 text-xl" />
          <Text className="" size="md">
            热门标签
          </Text>
        </Box>
        <Box>
          <TagCloud minSize={12} maxSize={32} tags={data} renderer={customRenderer} />
        </Box>
      </Card>
    </>
  );
};

export default HotTagsCard;
