/*
 * @Author: bugdr
 * @Date: 2022-06-30 14:19:23
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-30 14:31:34
 * @FilePath: \blog-next\components\LeftCard\index.tsx
 * @Description:
 */
import CategoryCard from './CategoryCard';
import UserInfoCard from './UserInfoCard';

const LeftCard = () => {
  return (
    <>
      <UserInfoCard />
      <CategoryCard />
    </>
  );
};

export default LeftCard;
