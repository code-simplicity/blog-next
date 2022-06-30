/*
 * @Author: bugdr
 * @Date: 2022-06-30 15:05:22
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 15:06:26
 * @FilePath: \blog-next\components\SkeletonLoading\index.tsx
 * @Description:展位加载
 */

import { Skeleton } from '@mantine/core';

const SkeletonLoading = () => {
  return (
    <>
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </>
  );
};

export default SkeletonLoading;
