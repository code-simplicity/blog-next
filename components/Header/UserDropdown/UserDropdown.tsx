/*
 * @Author: bugdr
 * @Date: 2022-06-25 16:43:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 15:23:46
 * @FilePath: \blog-next\components\Header\UserDropdown\UserDropdown.tsx
 * @Description:
 */
import { Avatar, Button } from '@mantine/core';
import { BsFillBellFill } from 'react-icons/bs';

const UserDropdown = (props: any) => {
  const { setLoginModalOpened } = props;
  const handleShowModal = () => {
    setLoginModalOpened(true);
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center">
          <Button variant="outline" onClick={() => handleShowModal()}>
            登录
          </Button>
        </div>
        <div className="flex items-center">
          <BsFillBellFill className="text-2xl" />
          <Avatar></Avatar>
          <span>用户名</span>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
