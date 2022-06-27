/*
 * @Author: bugdr
 * @Date: 2022-06-25 16:43:00
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-27 17:33:25
 * @FilePath: \blog-next\components\Header\UserDropdown\UserDropdown.tsx
 * @Description:
 */
import { Avatar, Button, Group } from '@mantine/core';
import { BsFillBellFill } from 'react-icons/bs';
import { BsFillShieldLockFill } from 'react-icons/bs';

const UserDropdown = (props: any) => {
  const { setLoginModalOpened } = props;
  const handleShowModal = () => {
    setLoginModalOpened(true);
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center">
          <Group>
            <Button
              leftIcon={<BsFillShieldLockFill />}
              variant="outline"
              onClick={() => handleShowModal()}
            >
              登录
            </Button>
          </Group>
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
